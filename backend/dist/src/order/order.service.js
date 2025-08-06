"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let OrderService = class OrderService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createOrder(userId, createOrderDto) {
        const cartItems = await this.prisma.cart.findMany({
            where: { userId },
            include: {
                product: true,
            },
        });
        if (cartItems.length === 0) {
            throw new common_1.BadRequestException('Cart is empty');
        }
        const totalAmount = cartItems.reduce((sum, item) => {
            return sum + (item.product.price * item.quantity);
        }, 0);
        const orderNumber = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
        const order = await this.prisma.order.create({
            data: {
                orderNumber,
                userId,
                totalAmount,
                status: client_1.OrderStatus.PENDING,
                paymentMethod: createOrderDto.paymentMethod,
                paymentStatus: client_1.PaymentStatus.PENDING,
                shippingAddress: createOrderDto.shippingAddress || undefined,
                items: {
                    create: cartItems.map(item => ({
                        productId: item.productId,
                        name: item.product.name,
                        price: item.product.price,
                        quantity: item.quantity,
                    })),
                },
            },
            include: {
                items: true,
            },
        });
        await this.prisma.cart.deleteMany({
            where: { userId },
        });
        return this.mapToOrderResponse(order);
    }
    async findAll(filterDto, userId) {
        const { page = 1, limit = 10, status, paymentStatus, orderNumber, paymentMethod } = filterDto;
        const skip = (page - 1) * limit;
        const where = {};
        if (userId) {
            where.userId = userId;
        }
        if (status) {
            where.status = status;
        }
        if (paymentStatus) {
            where.paymentStatus = paymentStatus;
        }
        if (orderNumber) {
            where.orderNumber = { contains: orderNumber, mode: 'insensitive' };
        }
        if (paymentMethod) {
            where.paymentMethod = { contains: paymentMethod, mode: 'insensitive' };
        }
        const [orders, total] = await Promise.all([
            this.prisma.order.findMany({
                where,
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
                include: {
                    items: true,
                    user: {
                        select: {
                            id: true,
                            username: true,
                            email: true,
                        },
                    },
                },
            }),
            this.prisma.order.count({ where }),
        ]);
        const totalPages = Math.ceil(total / limit);
        return {
            orders: orders.map(order => this.mapToOrderResponse(order)),
            pagination: {
                page,
                limit,
                total,
                totalPages,
                hasNext: page < totalPages,
                hasPrev: page > 1,
            },
        };
    }
    async findOne(id, userId) {
        const where = { id };
        if (userId) {
            where.userId = userId;
        }
        const order = await this.prisma.order.findFirst({
            where,
            include: {
                items: true,
                user: {
                    select: {
                        id: true,
                        username: true,
                        email: true,
                    },
                },
            },
        });
        if (!order) {
            throw new common_1.NotFoundException(`Order with ID ${id} not found`);
        }
        return this.mapToOrderResponse(order);
    }
    async updateOrderStatus(id, status) {
        const order = await this.prisma.order.findUnique({
            where: { id },
            include: {
                items: true,
            },
        });
        if (!order) {
            throw new common_1.NotFoundException(`Order with ID ${id} not found`);
        }
        const updatedOrder = await this.prisma.order.update({
            where: { id },
            data: { status },
            include: {
                items: true,
            },
        });
        return this.mapToOrderResponse(updatedOrder);
    }
    async updatePaymentStatus(id, paymentStatus) {
        const order = await this.prisma.order.findUnique({
            where: { id },
            include: {
                items: true,
            },
        });
        if (!order) {
            throw new common_1.NotFoundException(`Order with ID ${id} not found`);
        }
        const updatedOrder = await this.prisma.order.update({
            where: { id },
            data: { paymentStatus },
            include: {
                items: true,
            },
        });
        return this.mapToOrderResponse(updatedOrder);
    }
    async getOrderStats() {
        const [totalOrders, pendingOrders, completedOrders, totalRevenue, averageOrderValue,] = await Promise.all([
            this.prisma.order.count(),
            this.prisma.order.count({ where: { status: client_1.OrderStatus.PENDING } }),
            this.prisma.order.count({ where: { status: client_1.OrderStatus.COMPLETED } }),
            this.prisma.order.aggregate({
                _sum: { totalAmount: true },
            }),
            this.prisma.order.aggregate({
                _avg: { totalAmount: true },
            }),
        ]);
        return {
            totalOrders,
            pendingOrders,
            completedOrders,
            totalRevenue: totalRevenue._sum.totalAmount || 0,
            averageOrderValue: averageOrderValue._avg.totalAmount || 0,
        };
    }
    async deleteOrder(id) {
        const order = await this.prisma.order.findUnique({
            where: { id },
            include: {
                items: true,
            },
        });
        if (!order) {
            throw new common_1.NotFoundException(`Order with ID ${id} not found`);
        }
        await this.prisma.orderItem.deleteMany({
            where: { orderId: id },
        });
        await this.prisma.order.delete({
            where: { id },
        });
        return { message: 'Order deleted successfully' };
    }
    mapToOrderResponse(order) {
        return {
            id: order.id,
            orderNumber: order.orderNumber,
            userId: order.userId,
            user: order.user ? {
                id: order.user.id,
                username: order.user.username,
                email: order.user.email,
            } : undefined,
            totalAmount: order.totalAmount,
            status: order.status,
            paymentMethod: order.paymentMethod,
            paymentStatus: order.paymentStatus,
            shippingAddress: order.shippingAddress,
            items: order.items.map((item) => ({
                id: item.id,
                productId: item.productId,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                totalPrice: item.price * item.quantity,
            })),
            createdAt: order.createdAt,
            updatedAt: order.updatedAt,
        };
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrderService);
//# sourceMappingURL=order.service.js.map