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
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let PaymentService = class PaymentService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async processPayment(createPaymentDto) {
        const { orderId, amount, method, gateway, metadata } = createPaymentDto;
        const order = await this.prisma.order.findUnique({
            where: { id: orderId },
        });
        if (!order) {
            throw new common_1.NotFoundException(`Order with ID ${orderId} not found`);
        }
        const existingPayment = await this.prisma.payment.findUnique({
            where: { orderId },
        });
        if (existingPayment) {
            throw new common_1.BadRequestException(`Payment already exists for order ${orderId}`);
        }
        if (amount !== order.totalAmount) {
            throw new common_1.BadRequestException(`Payment amount ${amount} does not match order total ${order.totalAmount}`);
        }
        const transactionId = `TXN-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
        const paymentStatus = await this.simulatePaymentProcessing(method, amount);
        const payment = await this.prisma.payment.create({
            data: {
                orderId,
                amount,
                method,
                status: paymentStatus,
                transactionId: paymentStatus === client_1.PaymentStatus.COMPLETED ? transactionId : null,
                gateway: gateway || 'internal',
                metadata: metadata || {},
            },
        });
        await this.prisma.order.update({
            where: { id: orderId },
            data: { paymentStatus: paymentStatus },
        });
        return this.mapToPaymentResponse(payment);
    }
    async getPaymentByOrderId(orderId) {
        const payment = await this.prisma.payment.findUnique({
            where: { orderId },
        });
        if (!payment) {
            throw new common_1.NotFoundException(`Payment for order ${orderId} not found`);
        }
        return this.mapToPaymentResponse(payment);
    }
    async getPaymentById(id) {
        const payment = await this.prisma.payment.findUnique({
            where: { id },
        });
        if (!payment) {
            throw new common_1.NotFoundException(`Payment with ID ${id} not found`);
        }
        return this.mapToPaymentResponse(payment);
    }
    async updatePaymentStatus(id, status) {
        const payment = await this.prisma.payment.findUnique({
            where: { id },
        });
        if (!payment) {
            throw new common_1.NotFoundException(`Payment with ID ${id} not found`);
        }
        const updatedPayment = await this.prisma.payment.update({
            where: { id },
            data: { status },
        });
        await this.prisma.order.update({
            where: { id: payment.orderId },
            data: { paymentStatus: status },
        });
        return this.mapToPaymentResponse(updatedPayment);
    }
    async getPaymentStats() {
        const [totalPayments, completedPayments, pendingPayments, failedPayments, totalAmount, averageAmount,] = await Promise.all([
            this.prisma.payment.count(),
            this.prisma.payment.count({ where: { status: client_1.PaymentStatus.COMPLETED } }),
            this.prisma.payment.count({ where: { status: client_1.PaymentStatus.PENDING } }),
            this.prisma.payment.count({ where: { status: client_1.PaymentStatus.FAILED } }),
            this.prisma.payment.aggregate({
                _sum: { amount: true },
            }),
            this.prisma.payment.aggregate({
                _avg: { amount: true },
            }),
        ]);
        return {
            totalPayments,
            completedPayments,
            pendingPayments,
            failedPayments,
            totalAmount: totalAmount._sum.amount || 0,
            averageAmount: averageAmount._avg.amount || 0,
        };
    }
    async simulatePaymentProcessing(method, amount) {
        const successRates = {
            CREDIT_CARD: 0.95,
            DEBIT_CARD: 0.98,
            BANK_TRANSFER: 0.99,
            CRYPTO: 0.90,
            CASH: 1.0,
        };
        const successRate = successRates[method] || 0.95;
        const random = Math.random();
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (random <= successRate) {
            return client_1.PaymentStatus.COMPLETED;
        }
        else if (random <= 0.98) {
            return client_1.PaymentStatus.FAILED;
        }
        else {
            return client_1.PaymentStatus.PENDING;
        }
    }
    mapToPaymentResponse(payment) {
        return {
            id: payment.id,
            orderId: payment.orderId,
            amount: payment.amount,
            method: payment.method,
            status: payment.status,
            transactionId: payment.transactionId || undefined,
            gateway: payment.gateway || undefined,
            metadata: payment.metadata || undefined,
            createdAt: payment.createdAt,
            updatedAt: payment.updatedAt,
        };
    }
};
exports.PaymentService = PaymentService;
exports.PaymentService = PaymentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PaymentService);
//# sourceMappingURL=payment.service.js.map