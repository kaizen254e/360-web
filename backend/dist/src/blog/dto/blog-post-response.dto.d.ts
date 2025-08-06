import { BlogPostStatus } from '@prisma/client';
export declare class BlogPostResponseDto {
    id: string;
    title: string;
    slug: string;
    content: string;
    excerpt?: string;
    status: BlogPostStatus;
    featuredImage?: string;
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string;
    viewCount: number;
    isFeatured: boolean;
    publishedAt?: Date;
    authorId: string;
    categoryId?: string;
    createdAt: Date;
    updatedAt: Date;
    author?: {
        id: string;
        username: string;
        firstName?: string;
        lastName?: string;
    };
    category?: {
        id: string;
        name: string;
        slug: string;
    };
    tags?: Array<{
        id: string;
        name: string;
        slug: string;
    }>;
    commentsCount?: number;
}
