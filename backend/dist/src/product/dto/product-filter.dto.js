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
exports.ProductFilterDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const client_1 = require("@prisma/client");
class ProductFilterDto {
    search;
    productType;
    categoryId;
    categorySlug;
    categoryType;
    isActive;
    inStock;
    isFeatured;
    minPrice;
    maxPrice;
    bankName;
    country;
    platform;
    cardType;
    speed;
    page = 1;
    limit = 10;
    sortBy = 'createdAt';
    sortOrder = 'desc';
}
exports.ProductFilterDto = ProductFilterDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Search term for product name or description',
        required: false,
        example: 'bank log',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductFilterDto.prototype, "search", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter by product type',
        enum: client_1.ProductType,
        required: false,
        example: client_1.ProductType.BANK_LOG,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(client_1.ProductType),
    __metadata("design:type", String)
], ProductFilterDto.prototype, "productType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter by category ID',
        required: false,
        example: 'clx1234567890abcdef',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductFilterDto.prototype, "categoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter by category slug',
        required: false,
        example: 'bank-logs',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductFilterDto.prototype, "categorySlug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter by category type',
        required: false,
        example: 'MAIN',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductFilterDto.prototype, "categoryType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter by active status',
        required: false,
        example: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => value === 'true'),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ProductFilterDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter by in stock status',
        required: false,
        example: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => value === 'true'),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ProductFilterDto.prototype, "inStock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter by featured status',
        required: false,
        example: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => value === 'true'),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ProductFilterDto.prototype, "isFeatured", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Minimum price filter',
        required: false,
        example: 100,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => parseFloat(value)),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ProductFilterDto.prototype, "minPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Maximum price filter',
        required: false,
        example: 1000,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => parseFloat(value)),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ProductFilterDto.prototype, "maxPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter by bank name',
        required: false,
        example: 'Chase',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductFilterDto.prototype, "bankName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter by country',
        required: false,
        example: 'USA',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductFilterDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter by platform',
        required: false,
        example: 'PayPal',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductFilterDto.prototype, "platform", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter by card type',
        required: false,
        example: 'Visa',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductFilterDto.prototype, "cardType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter by transfer speed',
        required: false,
        example: 'Instant',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductFilterDto.prototype, "speed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Page number for pagination',
        required: false,
        example: 1,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value, 10)),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], ProductFilterDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Number of items per page',
        required: false,
        example: 10,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value, 10)),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], ProductFilterDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Field to sort by',
        required: false,
        example: 'price',
        enum: ['name', 'price', 'createdAt', 'stockQuantity'],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductFilterDto.prototype, "sortBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Sort order (asc or desc)',
        required: false,
        example: 'desc',
        enum: ['asc', 'desc'],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductFilterDto.prototype, "sortOrder", void 0);
//# sourceMappingURL=product-filter.dto.js.map