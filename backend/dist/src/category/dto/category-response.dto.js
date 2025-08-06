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
exports.CategoryResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_category_dto_1 = require("./create-category.dto");
class CategoryResponseDto {
    id;
    name;
    slug;
    description;
    type;
    parentId;
    isActive;
    order;
    createdAt;
    updatedAt;
    productCount;
    subcategoryCount;
}
exports.CategoryResponseDto = CategoryResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Category ID',
        example: 'clx1234567890abcdef',
    }),
    __metadata("design:type", String)
], CategoryResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Category name',
        example: 'Bank Logs',
    }),
    __metadata("design:type", String)
], CategoryResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Category slug',
        example: 'bank-logs',
    }),
    __metadata("design:type", String)
], CategoryResponseDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Category description',
        example: 'High-quality bank logs from various banks',
        required: false,
    }),
    __metadata("design:type", String)
], CategoryResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Category type',
        enum: create_category_dto_1.CategoryType,
        example: create_category_dto_1.CategoryType.MAIN,
    }),
    __metadata("design:type", String)
], CategoryResponseDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Parent category ID',
        example: 'clx1234567890abcdef',
        required: false,
    }),
    __metadata("design:type", String)
], CategoryResponseDto.prototype, "parentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Category active status',
        example: true,
    }),
    __metadata("design:type", Boolean)
], CategoryResponseDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Category display order',
        example: 1,
    }),
    __metadata("design:type", Number)
], CategoryResponseDto.prototype, "order", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Category creation date',
        example: '2024-01-01T00:00:00.000Z',
    }),
    __metadata("design:type", Date)
], CategoryResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Category last update date',
        example: '2024-01-01T00:00:00.000Z',
    }),
    __metadata("design:type", Date)
], CategoryResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Number of products in this category',
        example: 25,
    }),
    __metadata("design:type", Number)
], CategoryResponseDto.prototype, "productCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Number of subcategories',
        example: 3,
    }),
    __metadata("design:type", Number)
], CategoryResponseDto.prototype, "subcategoryCount", void 0);
//# sourceMappingURL=category-response.dto.js.map