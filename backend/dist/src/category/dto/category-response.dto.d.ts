import { CategoryType } from './create-category.dto';
export declare class CategoryResponseDto {
    id: string;
    name: string;
    slug: string;
    description?: string;
    type: CategoryType;
    parentId?: string;
    isActive: boolean;
    order: number;
    createdAt: Date;
    updatedAt: Date;
    productCount?: number;
    subcategoryCount?: number;
}
