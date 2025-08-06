"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CategoryService = class CategoryService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createCategory(createCategoryDto) {
        const existingCategory = await this.prisma.category.findUnique({
            where: { slug: createCategoryDto.slug },
        });
        if (existingCategory) {
            throw new common_1.ConflictException('Category with this slug already exists');
        }
        const category = await this.prisma.category.create({
            data: {
                name: createCategoryDto.name,
                slug: createCategoryDto.slug,
                description: createCategoryDto.description,
                type: createCategoryDto.type,
                parentId: createCategoryDto.parentId,
                isActive: createCategoryDto.isActive ?? true,
                order: createCategoryDto.order ?? 0,
            },
        });
        return this.mapToCategoryResponse(category);
    }
    async getCategories(filterDto) {
        const { search, type, parentId, isActive, page = 1, limit = 10, sortBy = 'order', sortOrder = 'asc', } = filterDto;
        const where = {};
        if (search) {
            where.OR = [
                { name: { contains: search, mode: 'insensitive' } },
                { description: { contains: search, mode: 'insensitive' } },
            ];
        }
        if (type) {
            where.type = type;
        }
        if (parentId !== undefined) {
            where.parentId = parentId;
        }
        if (isActive !== undefined) {
            where.isActive = isActive;
        }
        const skip = (page - 1) * limit;
        const [categories, total] = await Promise.all([
            this.prisma.category.findMany({
                where,
                skip,
                take: limit,
                orderBy: { [sortBy]: sortOrder },
            }),
            this.prisma.category.count({ where }),
        ]);
        return {
            categories: categories.map((category) => this.mapToCategoryResponse(category)),
            total,
            page,
            limit,
        };
    }
    async getCategoryById(id) {
        const category = await this.prisma.category.findUnique({
            where: { id },
        });
        if (!category) {
            throw new common_1.NotFoundException('Category not found');
        }
        return this.mapToCategoryResponse(category);
    }
    async updateCategory(id, updateCategoryDto) {
        const existingCategory = await this.prisma.category.findUnique({
            where: { id },
        });
        if (!existingCategory) {
            throw new common_1.NotFoundException('Category not found');
        }
        if (updateCategoryDto.slug &&
            updateCategoryDto.slug !== existingCategory.slug) {
            const slugConflict = await this.prisma.category.findUnique({
                where: { slug: updateCategoryDto.slug },
            });
            if (slugConflict) {
                throw new common_1.ConflictException('Category with this slug already exists');
            }
        }
        const updatedCategory = await this.prisma.category.update({
            where: { id },
            data: updateCategoryDto,
        });
        return this.mapToCategoryResponse(updatedCategory);
    }
    async deleteCategory(id) {
        const category = await this.prisma.category.findUnique({
            where: { id },
        });
        if (!category) {
            throw new common_1.NotFoundException('Category not found');
        }
        await this.prisma.category.delete({
            where: { id },
        });
        return { message: 'Category deleted successfully' };
    }
    mapToCategoryResponse(category) {
        return {
            id: category.id,
            name: category.name,
            slug: category.slug,
            description: category.description,
            type: category.type,
            parentId: category.parentId,
            isActive: category.isActive,
            order: category.order,
            createdAt: category.createdAt,
            updatedAt: category.updatedAt,
        };
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CategoryService);
//# sourceMappingURL=category.service.js.map