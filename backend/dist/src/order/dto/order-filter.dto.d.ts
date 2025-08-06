import { OrderStatus, PaymentStatus } from '@prisma/client';
export declare class OrderFilterDto {
    page?: number;
    limit?: number;
    status?: OrderStatus;
    paymentStatus?: PaymentStatus;
    orderNumber?: string;
    paymentMethod?: string;
}
