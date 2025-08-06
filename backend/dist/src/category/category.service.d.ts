import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryFilterDto } from './dto/category-filter.dto';
import { CategoryResponseDto } from './dto/category-response.dto';
export declare class CategoryService {
    private prisma;
    constructor(prisma: PrismaService);
    createCategory(createCategoryDto: CreateCategoryDto): Promise<CategoryResponseDto>;
    getCategories(filterDto: CategoryFilterDto): Promise<{
        categories: CategoryResponseDto[];
        total: number;
        page: number;
        limit: number;
    }>;
    getCategoryById(id: string): Promise<CategoryResponseDto>;
    updateCategory(id: string, updateCategoryDto: UpdateCategoryDto): Promise<CategoryResponseDto>;
    deleteCategory(id: string): Promise<{
        message: string;
    }>;
    private mapToCategoryResponse;
}
