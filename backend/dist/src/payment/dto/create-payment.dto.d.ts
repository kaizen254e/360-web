import { PaymentMethod } from '@prisma/client';
export declare class CreatePaymentDto {
    orderId: string;
    amount: number;
    method: PaymentMethod;
    gateway?: string;
    metadata?: any;
}
