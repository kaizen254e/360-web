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
exports.CreateBlogPostDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const client_1 = require("@prisma/client");
class CreateBlogPostDto {
    title;
    slug;
    content;
    excerpt;
    status = client_1.BlogPostStatus.DRAFT;
    featuredImage;
    metaTitle;
    metaDescription;
    keywords;
    isFeatured = false;
    categoryId;
    tagIds;
    publishedAt;
}
exports.CreateBlogPostDto = CreateBlogPostDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Blog post title', example: 'How to Use Bank Logs Safely' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateBlogPostDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Blog post slug (URL-friendly)', example: 'how-to-use-bank-logs-safely' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateBlogPostDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Blog post content (HTML/markdown)', example: '<p>This is the blog content...</p>' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateBlogPostDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Blog post excerpt/summary', example: 'Learn the best practices for using bank logs safely and securely.', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBlogPostDto.prototype, "excerpt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Blog post status', enum: client_1.BlogPostStatus, example: client_1.BlogPostStatus.DRAFT }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(client_1.BlogPostStatus),
    __metadata("design:type", String)
], CreateBlogPostDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Featured image URL', example: 'https://example.com/featured-image.jpg', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreateBlogPostDto.prototype, "featuredImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Meta title for SEO', example: 'Bank Logs Safety Guide - 360LogzShop', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBlogPostDto.prototype, "metaTitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Meta description for SEO', example: 'Learn how to use bank logs safely with our comprehensive guide.', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBlogPostDto.prototype, "metaDescription", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'SEO keywords', example: 'bank logs, safety, guide, tutorial', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBlogPostDto.prototype, "keywords", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether the post is featured', example: false, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateBlogPostDto.prototype, "isFeatured", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Category ID', example: 'clx1234567890abcdef', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBlogPostDto.prototype, "categoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tag IDs array', type: [String], example: ['tag1', 'tag2'], required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateBlogPostDto.prototype, "tagIds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Publish date (ISO string)', example: '2024-01-01T00:00:00.000Z', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBlogPostDto.prototype, "publishedAt", void 0);
//# sourceMappingURL=create-blog-post.dto.js.map