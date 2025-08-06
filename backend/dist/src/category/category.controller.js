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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const category_service_1 = require("./category.service");
const category_seeder_service_1 = require("./category-seeder.service");
const create_category_dto_1 = require("./dto/create-category.dto");
const update_category_dto_1 = require("./dto/update-category.dto");
const category_filter_dto_1 = require("./dto/category-filter.dto");
const category_response_dto_1 = require("./dto/category-response.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const admin_guard_1 = require("../auth/guards/admin.guard");
const client_1 = require("@prisma/client");
let CategoryController = class CategoryController {
    categoryService;
    categorySeederService;
    constructor(categoryService, categorySeederService) {
        this.categoryService = categoryService;
        this.categorySeederService = categorySeederService;
    }
    async seedAllCategories() {
        return this.categorySeederService.seedAllCategories();
    }
    async seedCategoriesByType(type) {
        return this.categorySeederService.seedCategoriesByType(type);
    }
    async getCategoryStructure() {
        return this.categorySeederService.getCategoryStructure();
    }
    async createCategory(createCategoryDto) {
        return this.categoryService.createCategory(createCategoryDto);
    }
    async getCategories(filterDto) {
        return this.categoryService.getCategories(filterDto);
    }
    async getCategoryById(id) {
        return this.categoryService.getCategoryById(id);
    }
    async updateCategory(id, updateCategoryDto) {
        return this.categoryService.updateCategory(id, updateCategoryDto);
    }
    async deleteCategory(id) {
        return this.categoryService.deleteCategory(id);
    }
};
exports.CategoryController = CategoryController;
__decorate([
    (0, common_1.Post)('seed/all'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Seed all categories (Admin only)' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'All categories seeded successfully',
        schema: {
            type: 'object',
            properties: {
                message: { type: 'string' },
                created: { type: 'number' },
                updated: { type: 'number' },
            },
        },
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "seedAllCategories", null);
__decorate([
    (0, common_1.Post)('seed/:type'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Seed categories by type (Admin only)' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Categories seeded successfully',
        schema: {
            type: 'object',
            properties: {
                message: { type: 'string' },
                created: { type: 'number' },
                updated: { type: 'number' },
            },
        },
    }),
    __param(0, (0, common_1.Param)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "seedCategoriesByType", null);
__decorate([
    (0, common_1.Get)('structure'),
    (0, swagger_1.ApiOperation)({ summary: 'Get complete category structure' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Category structure retrieved successfully',
        schema: {
            type: 'object',
            properties: {
                MAIN: { type: 'array' },
                MORE_LOGS: { type: 'array' },
                LINKABLES: { type: 'array' },
                TRANSFERS: { type: 'array' },
            },
        },
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getCategoryStructure", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new category (Admin only)' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Category created successfully',
        type: category_response_dto_1.CategoryResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Category with slug already exists' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Parent category not found' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_category_dto_1.CreateCategoryDto]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "createCategory", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all categories with filtering and pagination' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Categories retrieved successfully',
        schema: {
            type: 'object',
            properties: {
                categories: {
                    type: 'array',
                    items: { $ref: '#/components/schemas/CategoryResponseDto' },
                },
                total: { type: 'number' },
                page: { type: 'number' },
                limit: { type: 'number' },
            },
        },
    }),
    (0, swagger_1.ApiQuery)({ name: 'search', required: false, description: 'Search by name or description' }),
    (0, swagger_1.ApiQuery)({ name: 'type', required: false, enum: client_1.CategoryType, description: 'Filter by category type' }),
    (0, swagger_1.ApiQuery)({ name: 'parentId', required: false, description: 'Filter by parent category ID' }),
    (0, swagger_1.ApiQuery)({ name: 'isActive', required: false, type: 'boolean', description: 'Filter by active status' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: 'number', example: 1 }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: 'number', example: 10 }),
    (0, swagger_1.ApiQuery)({ name: 'sortBy', required: false, enum: ['name', 'createdAt', 'order'], example: 'order' }),
    (0, swagger_1.ApiQuery)({ name: 'sortOrder', required: false, enum: ['asc', 'desc'], example: 'asc' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_filter_dto_1.CategoryFilterDto]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getCategories", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get category by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Category retrieved successfully',
        type: category_response_dto_1.CategoryResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Category not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getCategoryById", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Update category (Admin only)' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Category updated successfully',
        type: category_response_dto_1.CategoryResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Category not found' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Category slug already exists' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid parent category' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_category_dto_1.UpdateCategoryDto]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "updateCategory", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Delete category (Admin only)' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Category deleted successfully',
        schema: {
            type: 'object',
            properties: {
                message: { type: 'string' },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Category not found' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Category has associated products or subcategories' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "deleteCategory", null);
exports.CategoryController = CategoryController = __decorate([
    (0, swagger_1.ApiTags)('Categories'),
    (0, common_1.Controller)('categories'),
    __metadata("design:paramtypes", [category_service_1.CategoryService,
        category_seeder_service_1.CategorySeederService])
], CategoryController);
//# sourceMappingURL=category.controller.js.map