import { BlogPostStatus } from '@prisma/client';
export declare class BlogFilterDto {
    search?: string;
    status?: BlogPostStatus;
    categoryId?: string;
    categorySlug?: string;
    tagId?: string;
    tagSlug?: string;
    authorId?: string;
    isFeatured?: boolean;
    year?: number;
    month?: number;
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
}
