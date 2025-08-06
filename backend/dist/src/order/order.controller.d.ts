import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderFilterDto } from './dto/order-filter.dto';
import { OrderResponseDto } from './dto/order-response.dto';
import { OrderStatus, PaymentStatus } from '@prisma/client';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    createOrder(req: any, createOrderDto: CreateOrderDto): Promise<OrderResponseDto>;
    findAll(req: any, filterDto: OrderFilterDto): Promise<{
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
    getOrderStats(): Promise<{
        totalOrders: number;
        pendingOrders: number;
        completedOrders: number;
        totalRevenue: number;
        averageOrderValue: number;
    }>;
    findOne(req: any, id: string): Promise<OrderResponseDto>;
    updateOrderStatus(id: string, body: {
        status: OrderStatus;
    }): Promise<OrderResponseDto>;
    updatePaymentStatus(id: string, body: {
        paymentStatus: PaymentStatus;
    }): Promise<OrderResponseDto>;
    deleteOrder(id: string): Promise<{
        message: string;
    }>;
}
