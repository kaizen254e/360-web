import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { PaymentResponseDto } from './dto/payment-response.dto';
import { PaymentStatus } from '@prisma/client';
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    processPayment(createPaymentDto: CreatePaymentDto): Promise<PaymentResponseDto>;
    getPaymentStats(): Promise<{
        totalPayments: number;
        completedPayments: number;
        pendingPayments: number;
        failedPayments: number;
        totalAmount: number;
        averageAmount: number;
    }>;
    getPaymentByOrderId(orderId: string): Promise<PaymentResponseDto>;
    getPaymentById(id: string): Promise<PaymentResponseDto>;
    updatePaymentStatus(id: string, body: {
        status: PaymentStatus;
    }): Promise<PaymentResponseDto>;
}
