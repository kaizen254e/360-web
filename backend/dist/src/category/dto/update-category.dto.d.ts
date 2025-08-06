import { CategoryType } from './create-category.dto';
export declare class UpdateCategoryDto {
    name?: string;
    slug?: string;
    description?: string;
    type?: CategoryType;
    parentId?: string;
    isActive?: boolean;
    order?: number;
}
