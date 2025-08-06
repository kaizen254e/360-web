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
exports.BlogFilterDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const client_1 = require("@prisma/client");
class BlogFilterDto {
    search;
    status;
    categoryId;
    categorySlug;
    tagId;
    tagSlug;
    authorId;
    isFeatured;
    year;
    month;
    page = 1;
    limit = 10;
    sortBy = 'createdAt';
    sortOrder = 'desc';
}
exports.BlogFilterDto = BlogFilterDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Search term for blog title or content',
        required: false,
        example: 'bank logs',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BlogFilterDto.prototype, "search", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter by blog post status',
        enum: client_1.BlogPostStatus,
        required: false,
        example: client_1.BlogPostStatus.PUBLISHED,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(client_1.BlogPostStatus),
    __metadata("design:type", String)
], BlogFilterDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter by category ID',
        required: false,
        example: 'clx1234567890abcdef',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BlogFilterDto.prototype, "categoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter by category slug',
        required: false,
        example: 'tutorials',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BlogFilterDto.prototype, "categorySlug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter by tag ID',
        required: false,
        example: 'clx1234567890abcdef',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BlogFilterDto.prototype, "tagId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter by tag slug',
        required: false,
        example: 'banking',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BlogFilterDto.prototype, "tagSlug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter by author ID',
        required: false,
        example: 'clx1234567890abcdef',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BlogFilterDto.prototype, "authorId", void 0);
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
], BlogFilterDto.prototype, "isFeatured", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter by published date (year)',
        required: false,
        example: 2024,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value, 10)),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], BlogFilterDto.prototype, "year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter by published date (month)',
        required: false,
        example: 1,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value, 10)),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(12),
    __metadata("design:type", Number)
], BlogFilterDto.prototype, "month", void 0);
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
], BlogFilterDto.prototype, "page", void 0);
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
], BlogFilterDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Field to sort by',
        required: false,
        example: 'createdAt',
        enum: ['title', 'createdAt', 'publishedAt', 'viewCount'],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BlogFilterDto.prototype, "sortBy", void 0);
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
], BlogFilterDto.prototype, "sortOrder", void 0);
//# sourceMappingURL=blog-filter.dto.js.map