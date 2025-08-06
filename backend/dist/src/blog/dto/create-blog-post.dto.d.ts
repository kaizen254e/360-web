import { BlogPostStatus } from '@prisma/client';
export declare class CreateBlogPostDto {
    title: string;
    slug: string;
    content: string;
    excerpt?: string;
    status?: BlogPostStatus;
    featuredImage?: string;
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string;
    isFeatured?: boolean;
    categoryId?: string;
    tagIds?: string[];
    publishedAt?: string;
}
