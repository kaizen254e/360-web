import { PrismaService } from '../prisma/prisma.service';
import { CategoryType } from '@prisma/client';
export declare class CategorySeederService {
    private prisma;
    constructor(prisma: PrismaService);
    private readonly categoryData;
    seedAllCategories(): Promise<{
        message: string;
        created: number;
        updated: number;
    }>;
    seedCategoriesByType(type: CategoryType): Promise<{
        message: string;
        created: number;
        updated: number;
    }>;
    getCategoryStructure(): Promise<{
        [key: string]: any[];
    }>;
}
