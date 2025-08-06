import { PrismaService } from '../prisma/prisma.service';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { CartResponseDto } from './dto/cart-response.dto';
export declare class CartService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    addToCart(userId: string, addToCartDto: AddToCartDto): Promise<CartResponseDto>;
    getCart(userId: string): Promise<CartResponseDto>;
    updateCartItem(userId: string, cartItemId: string, updateCartDto: UpdateCartDto): Promise<CartResponseDto>;
    removeFromCart(userId: string, cartItemId: string): Promise<CartResponseDto>;
    clearCart(userId: string): Promise<CartResponseDto>;
    getCartItemCount(userId: string): Promise<number>;
}
