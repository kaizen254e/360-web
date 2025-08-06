import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderFilterDto } from './dto/order-filter.dto';
import { OrderResponseDto } from './dto/order-response.dto';
import { OrderStatus, PaymentStatus } from '@prisma/client';
export declare class OrderService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createOrder(userId: string, createOrderDto: CreateOrderDto): Promise<OrderResponseDto>;
    findAll(filterDto: OrderFilterDto, userId?: string): Promise<{
        orders: OrderResponseDto[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
            hasNext: boolean;
            hasPrev: boolean;
        };
    }>;
    findOne(id: string, userId?: string): Promise<OrderResponseDto>;
    updateOrderStatus(id: string, status: OrderStatus): Promise<OrderResponseDto>;
    updatePaymentStatus(id: string, paymentStatus: PaymentStatus): Promise<OrderResponseDto>;
    getOrderStats(): Promise<{
        totalOrders: number;
        pendingOrders: number;
        completedOrders: number;
        totalRevenue: number;
        averageOrderValue: number;
    }>;
    deleteOrder(id: string): Promise<{
        message: string;
    }>;
    private mapToOrderResponse;
}
