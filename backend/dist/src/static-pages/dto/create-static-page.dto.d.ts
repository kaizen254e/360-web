import { StaticPageStatus } from '@prisma/client';
export declare class CreateStaticPageDto {
    title: string;
    slug: string;
    content: string;
    metaTitle?: string;
    metaDescription?: string;
    status?: StaticPageStatus;
}
