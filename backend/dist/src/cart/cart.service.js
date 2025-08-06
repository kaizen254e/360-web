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
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CartService = class CartService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async addToCart(userId, addToCartDto) {
        const { productId, quantity } = addToCartDto;
        const product = await this.prisma.product.findUnique({
            where: { id: productId },
        });
        if (!product) {
            throw new common_1.NotFoundException(`Product with ID ${productId} not found`);
        }
        const existingCartItem = await this.prisma.cart.findUnique({
            where: {
                userId_productId: {
                    userId,
                    productId,
                },
            },
            include: {
                product: true,
            },
        });
        if (existingCartItem) {
            await this.prisma.cart.update({
                where: { id: existingCartItem.id },
                data: { quantity: existingCartItem.quantity + quantity },
                include: {
                    product: true,
                },
            });
        }
        else {
            await this.prisma.cart.create({
                data: {
                    userId,
                    productId,
                    quantity,
                },
                include: {
                    product: true,
                },
            });
        }
        return this.getCart(userId);
    }
    async getCart(userId) {
        const cartItems = await this.prisma.cart.findMany({
            where: { userId },
            include: {
                product: true,
            },
            orderBy: { createdAt: 'desc' },
        });
        const items = cartItems.map(item => ({
            id: item.id,
            productId: item.productId,
            name: item.product.name,
            price: item.product.price,
            quantity: item.quantity,
            image: item.product.images && item.product.images.length > 0 ? item.product.images[0] : undefined,
            stockQuantity: item.product.stockQuantity || 0
        }));
        const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        return {
            id: userId,
            userId: userId,
            items: items,
            total: total,
            itemCount: items.length,
            createdAt: new Date(),
            updatedAt: new Date()
        };
    }
    async updateCartItem(userId, cartItemId, updateCartDto) {
        const { quantity } = updateCartDto;
        const cartItem = await this.prisma.cart.findFirst({
            where: {
                id: cartItemId,
                userId,
            },
            include: {
                product: true,
            },
        });
        if (!cartItem) {
            throw new common_1.NotFoundException(`Cart item with ID ${cartItemId} not found`);
        }
        const updatedCartItem = await this.prisma.cart.update({
            where: { id: cartItemId },
            data: { quantity },
            include: {
                product: true,
            },
        });
        return this.getCart(userId);
    }
    async removeFromCart(userId, cartItemId) {
        const cartItem = await this.prisma.cart.findFirst({
            where: {
                id: cartItemId,
                userId,
            },
        });
        if (!cartItem) {
            throw new common_1.NotFoundException(`Cart item with ID ${cartItemId} not found`);
        }
        await this.prisma.cart.delete({
            where: { id: cartItemId },
        });
        return this.getCart(userId);
    }
    async clearCart(userId) {
        await this.prisma.cart.deleteMany({
            where: { userId },
        });
        return {
            id: userId,
            userId: userId,
            items: [],
            total: 0,
            itemCount: 0,
            createdAt: new Date(),
            updatedAt: new Date()
        };
    }
    async getCartItemCount(userId) {
        const result = await this.prisma.cart.aggregate({
            where: { userId },
            _sum: {
                quantity: true,
            },
        });
        return result._sum.quantity || 0;
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CartService);
//# sourceMappingURL=cart.service.js.map