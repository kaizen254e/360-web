import { ProductType } from '@prisma/client';
export declare class ProductFilterDto {
    search?: string;
    productType?: ProductType;
    categoryId?: string;
    categorySlug?: string;
    categoryType?: string;
    isActive?: boolean;
    inStock?: boolean;
    isFeatured?: boolean;
    minPrice?: number;
    maxPrice?: number;
    bankName?: string;
    country?: string;
    platform?: string;
    cardType?: string;
    speed?: string;
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
}
