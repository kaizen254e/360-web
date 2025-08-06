import { CartItemResponseDto } from './cart-item-response.dto';
export declare class CartResponseDto {
    id: string;
    userId: string;
    items: CartItemResponseDto[];
    total: number;
    itemCount: number;
    createdAt: Date;
    updatedAt: Date;
}
