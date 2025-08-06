import { CategoryType } from './create-category.dto';
export declare class CategoryFilterDto {
    search?: string;
    type?: CategoryType;
    parentId?: string;
    isActive?: boolean;
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
    includeSubcategories?: boolean;
}
