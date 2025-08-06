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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const create_product_dto_1 = require("./dto/create-product.dto");
const update_product_dto_1 = require("./dto/update-product.dto");
const product_filter_dto_1 = require("./dto/product-filter.dto");
const product_response_dto_1 = require("./dto/product-response.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const admin_guard_1 = require("../auth/guards/admin.guard");
const client_1 = require("@prisma/client");
let ProductController = class ProductController {
    productService;
    constructor(productService) {
        this.productService = productService;
    }
    async createProduct(createProductDto) {
        return this.productService.createProduct(createProductDto);
    }
    async updateProduct(id, updateProductDto) {
        return this.productService.updateProduct(id, updateProductDto);
    }
    async deleteProduct(id) {
        return this.productService.deleteProduct(id);
    }
    async updateStockQuantity(id, body) {
        return this.productService.updateStockQuantity(id, body.quantity);
    }
    async getProducts(filterDto) {
        return this.productService.getProducts(filterDto);
    }
    async getProductById(id) {
        return this.productService.getProductById(id);
    }
    async getProductsByCategory(slug, limit = 10) {
        return this.productService.getProductsByCategory(slug, limit);
    }
    async getProductsByType(type, limit = 10) {
        return this.productService.getProductsByType(type, limit);
    }
    async searchProducts(query, limit = 10) {
        return this.productService.searchProducts(query, limit);
    }
    async getFeaturedProducts(limit = 10) {
        return this.productService.getFeaturedProducts(limit);
    }
    async getPopularProducts(limit = 10) {
        return this.productService.getPopularProducts(limit);
    }
    async getShopProducts(filterDto) {
        filterDto.isActive = true;
        return this.productService.getProducts(filterDto);
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new product (Admin only)' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Product created successfully',
        type: product_response_dto_1.ProductResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Category not found' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Update product (Admin only)' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Product updated successfully',
        type: product_response_dto_1.ProductResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Product not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_dto_1.UpdateProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Delete product (Admin only)' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Product deleted successfully',
        schema: {
            type: 'object',
            properties: {
                message: { type: 'string' },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Product not found' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Product has associated orders' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteProduct", null);
__decorate([
    (0, common_1.Put)(':id/stock'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Update product stock quantity (Admin only)' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Stock quantity updated successfully',
        type: product_response_dto_1.ProductResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Product not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateStockQuantity", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all products with filtering and pagination' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Products retrieved successfully',
        schema: {
            type: 'object',
            properties: {
                products: {
                    type: 'array',
                    items: { $ref: '#/components/schemas/ProductResponseDto' },
                },
                total: { type: 'number' },
                page: { type: 'number' },
                limit: { type: 'number' },
            },
        },
    }),
    (0, swagger_1.ApiQuery)({ name: 'search', required: false, description: 'Search by name or description' }),
    (0, swagger_1.ApiQuery)({ name: 'productType', required: false, enum: client_1.ProductType, description: 'Filter by product type' }),
    (0, swagger_1.ApiQuery)({ name: 'categoryId', required: false, description: 'Filter by category ID' }),
    (0, swagger_1.ApiQuery)({ name: 'categorySlug', required: false, description: 'Filter by category slug' }),
    (0, swagger_1.ApiQuery)({ name: 'categoryType', required: false, description: 'Filter by category type' }),
    (0, swagger_1.ApiQuery)({ name: 'isActive', required: false, type: 'boolean', description: 'Filter by active status' }),
    (0, swagger_1.ApiQuery)({ name: 'inStock', required: false, type: 'boolean', description: 'Filter by stock availability' }),
    (0, swagger_1.ApiQuery)({ name: 'minPrice', required: false, type: 'number', description: 'Minimum price filter' }),
    (0, swagger_1.ApiQuery)({ name: 'maxPrice', required: false, type: 'number', description: 'Maximum price filter' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: 'number', example: 1 }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: 'number', example: 10 }),
    (0, swagger_1.ApiQuery)({ name: 'sortBy', required: false, enum: ['name', 'price', 'createdAt', 'stockQuantity'], example: 'createdAt' }),
    (0, swagger_1.ApiQuery)({ name: 'sortOrder', required: false, enum: ['asc', 'desc'], example: 'desc' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_filter_dto_1.ProductFilterDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProducts", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get product by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Product retrieved successfully',
        type: product_response_dto_1.ProductResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Product not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductById", null);
__decorate([
    (0, common_1.Get)('category/:slug'),
    (0, swagger_1.ApiOperation)({ summary: 'Get products by category slug' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Products retrieved successfully',
        type: [product_response_dto_1.ProductResponseDto],
    }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: 'number', example: 10 }),
    __param(0, (0, common_1.Param)('slug')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductsByCategory", null);
__decorate([
    (0, common_1.Get)('type/:type'),
    (0, swagger_1.ApiOperation)({ summary: 'Get products by product type' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Products retrieved successfully',
        type: [product_response_dto_1.ProductResponseDto],
    }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: 'number', example: 10 }),
    __param(0, (0, common_1.Param)('type')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductsByType", null);
__decorate([
    (0, common_1.Get)('search/:query'),
    (0, swagger_1.ApiOperation)({ summary: 'Search products by name or description' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Products retrieved successfully',
        type: [product_response_dto_1.ProductResponseDto],
    }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: 'number', example: 10 }),
    __param(0, (0, common_1.Param)('query')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "searchProducts", null);
__decorate([
    (0, common_1.Get)('featured/featured'),
    (0, swagger_1.ApiOperation)({ summary: 'Get featured products for home page' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Featured products retrieved successfully',
        type: [product_response_dto_1.ProductResponseDto],
    }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: 'number', example: 10 }),
    __param(0, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getFeaturedProducts", null);
__decorate([
    (0, common_1.Get)('popular/popular'),
    (0, swagger_1.ApiOperation)({ summary: 'Get popular products' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Popular products retrieved successfully',
        type: [product_response_dto_1.ProductResponseDto],
    }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: 'number', example: 10 }),
    __param(0, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getPopularProducts", null);
__decorate([
    (0, common_1.Get)('shop/all'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all products for shop (public catalog)' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Shop products retrieved successfully',
        schema: {
            type: 'object',
            properties: {
                products: {
                    type: 'array',
                    items: { $ref: '#/components/schemas/ProductResponseDto' },
                },
                total: { type: 'number' },
                page: { type: 'number' },
                limit: { type: 'number' },
            },
        },
    }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: 'number', example: 1 }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: 'number', example: 20 }),
    (0, swagger_1.ApiQuery)({ name: 'sortBy', required: false, enum: ['name', 'price', 'createdAt'], example: 'createdAt' }),
    (0, swagger_1.ApiQuery)({ name: 'sortOrder', required: false, enum: ['asc', 'desc'], example: 'desc' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_filter_dto_1.ProductFilterDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getShopProducts", null);
exports.ProductController = ProductController = __decorate([
    (0, swagger_1.ApiTags)('Products'),
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
//# sourceMappingURL=product.controller.js.map