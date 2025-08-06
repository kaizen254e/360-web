import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductFilterDto } from './dto/product-filter.dto';
import { ProductResponseDto } from './dto/product-response.dto';
import { ProductType } from '@prisma/client';
export declare class ProductService {
    private prisma;
    constructor(prisma: PrismaService);
    private mapToProductResponse;
    createProduct(createProductDto: CreateProductDto): Promise<ProductResponseDto>;
    getProducts(filterDto: ProductFilterDto): Promise<{
        products: ProductResponseDto[];
        total: number;
        page: number;
        limit: number;
    }>;
    getProductById(id: string): Promise<ProductResponseDto>;
    updateProduct(id: string, updateProductDto: UpdateProductDto): Promise<ProductResponseDto>;
    deleteProduct(id: string): Promise<{
        message: string;
    }>;
    getProductsByCategory(categorySlug: string, limit?: number): Promise<ProductResponseDto[]>;
    getProductsByType(productType: ProductType, limit?: number): Promise<ProductResponseDto[]>;
    searchProducts(query: string, limit?: number): Promise<ProductResponseDto[]>;
    getFeaturedProducts(limit?: number): Promise<ProductResponseDto[]>;
    getPopularProducts(limit?: number): Promise<ProductResponseDto[]>;
    updateStockQuantity(id: string, quantity: number): Promise<ProductResponseDto>;
    private validateProductTypeForCategory;
}
