import { CategoryService } from './category.service';
import { CategorySeederService } from './category-seeder.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryFilterDto } from './dto/category-filter.dto';
import { CategoryResponseDto } from './dto/category-response.dto';
import { CategoryType } from '@prisma/client';
export declare class CategoryController {
    private readonly categoryService;
    private readonly categorySeederService;
    constructor(categoryService: CategoryService, categorySeederService: CategorySeederService);
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
}
