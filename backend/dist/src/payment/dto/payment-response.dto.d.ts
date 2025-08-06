import { PaymentStatus, PaymentMethod } from '@prisma/client';
export declare class PaymentResponseDto {
    id: string;
    orderId: string;
    amount: number;
    method: PaymentMethod;
    status: PaymentStatus;
    transactionId?: string;
    gateway?: string;
    metadata?: any;
    createdAt: Date;
    updatedAt: Date;
}
