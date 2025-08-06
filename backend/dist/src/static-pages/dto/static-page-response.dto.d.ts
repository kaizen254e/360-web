import { StaticPageStatus } from '@prisma/client';
export declare class StaticPageResponseDto {
    id: string;
    title: string;
    slug: string;
    content: string;
    metaTitle?: string;
    metaDescription?: string;
    status: StaticPageStatus;
    createdAt: Date;
    updatedAt: Date;
}
