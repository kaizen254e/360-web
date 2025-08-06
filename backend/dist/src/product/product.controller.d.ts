import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductFilterDto } from './dto/product-filter.dto';
import { ProductResponseDto } from './dto/product-response.dto';
import { ProductType } from '@prisma/client';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    createProduct(createProductDto: CreateProductDto): Promise<ProductResponseDto>;
    updateProduct(id: string, updateProductDto: UpdateProductDto): Promise<ProductResponseDto>;
    deleteProduct(id: string): Promise<{
        message: string;
    }>;
    updateStockQuantity(id: string, body: {
        quantity: number;
    }): Promise<ProductResponseDto>;
    getProducts(filterDto: ProductFilterDto): Promise<{
        products: ProductResponseDto[];
        total: number;
        page: number;
        limit: number;
    }>;
    getProductById(id: string): Promise<ProductResponseDto>;
    getProductsByCategory(slug: string, limit?: number): Promise<ProductResponseDto[]>;
    getProductsByType(type: ProductType, limit?: number): Promise<ProductResponseDto[]>;
    searchProducts(query: string, limit?: number): Promise<ProductResponseDto[]>;
    getFeaturedProducts(limit?: number): Promise<ProductResponseDto[]>;
    getPopularProducts(limit?: number): Promise<ProductResponseDto[]>;
    getShopProducts(filterDto: ProductFilterDto): Promise<{
        products: ProductResponseDto[];
        total: number;
        page: number;
        limit: number;
    }>;
}
