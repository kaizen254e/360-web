import { OrderStatus, PaymentStatus } from '@prisma/client';
export declare class OrderItemResponseDto {
    id: string;
    productId: string;
    name: string;
    price: number;
    quantity: number;
    totalPrice: number;
}
export declare class OrderResponseDto {
    id: string;
    orderNumber: string;
    userId: string;
    user?: {
        id: string;
        username: string;
        email: string;
    };
    totalAmount: number;
    status: OrderStatus;
    paymentMethod: string;
    paymentStatus: PaymentStatus;
    shippingAddress: any;
    items: OrderItemResponseDto[];
    createdAt: Date;
    updatedAt: Date;
}
