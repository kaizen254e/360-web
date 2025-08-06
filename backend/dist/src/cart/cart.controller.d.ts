import { CartService } from './cart.service';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { CartResponseDto } from './dto/cart-response.dto';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    addToCart(req: any, addToCartDto: AddToCartDto): Promise<CartResponseDto>;
    getCart(req: any): Promise<CartResponseDto>;
    updateCartItem(req: any, cartItemId: string, updateCartDto: UpdateCartDto): Promise<CartResponseDto>;
    removeFromCart(req: any, cartItemId: string): Promise<CartResponseDto>;
    clearCart(req: any): Promise<CartResponseDto>;
    getCartItemCount(req: any): Promise<{
        count: number;
    }>;
}
