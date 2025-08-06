import { PrismaService } from '../prisma/prisma.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { PaymentResponseDto } from './dto/payment-response.dto';
import { PaymentStatus } from '@prisma/client';
export declare class PaymentService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    processPayment(createPaymentDto: CreatePaymentDto): Promise<PaymentResponseDto>;
    getPaymentByOrderId(orderId: string): Promise<PaymentResponseDto>;
    getPaymentById(id: string): Promise<PaymentResponseDto>;
    updatePaymentStatus(id: string, status: PaymentStatus): Promise<PaymentResponseDto>;
    getPaymentStats(): Promise<{
        totalPayments: number;
        completedPayments: number;
        pendingPayments: number;
        failedPayments: number;
        totalAmount: number;
        averageAmount: number;
    }>;
    private simulatePaymentProcessing;
    private mapToPaymentResponse;
}
