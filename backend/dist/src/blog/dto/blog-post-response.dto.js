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
exports.BlogPostResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
class BlogPostResponseDto {
    id;
    title;
    slug;
    content;
    excerpt;
    status;
    featuredImage;
    metaTitle;
    metaDescription;
    keywords;
    viewCount;
    isFeatured;
    publishedAt;
    authorId;
    categoryId;
    createdAt;
    updatedAt;
    author;
    category;
    tags;
    commentsCount;
}
exports.BlogPostResponseDto = BlogPostResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Blog post ID', example: 'clx1234567890abcdef' }),
    __metadata("design:type", String)
], BlogPostResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Blog post title', example: 'How to Use Bank Logs Safely' }),
    __metadata("design:type", String)
], BlogPostResponseDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Blog post slug', example: 'how-to-use-bank-logs-safely' }),
    __metadata("design:type", String)
], BlogPostResponseDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Blog post content', example: '<p>This is the blog content...</p>' }),
    __metadata("design:type", String)
], BlogPostResponseDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Blog post excerpt', example: 'Learn the best practices...', required: false }),
    __metadata("design:type", String)
], BlogPostResponseDto.prototype, "excerpt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Blog post status', enum: client_1.BlogPostStatus, example: client_1.BlogPostStatus.PUBLISHED }),
    __metadata("design:type", String)
], BlogPostResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Featured image URL', example: 'https://example.com/image.jpg', required: false }),
    __metadata("design:type", String)
], BlogPostResponseDto.prototype, "featuredImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Meta title', example: 'Bank Logs Safety Guide', required: false }),
    __metadata("design:type", String)
], BlogPostResponseDto.prototype, "metaTitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Meta description', example: 'Learn how to use bank logs safely', required: false }),
    __metadata("design:type", String)
], BlogPostResponseDto.prototype, "metaDescription", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'SEO keywords', example: 'bank logs, safety, guide', required: false }),
    __metadata("design:type", String)
], BlogPostResponseDto.prototype, "keywords", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'View count', example: 150 }),
    __metadata("design:type", Number)
], BlogPostResponseDto.prototype, "viewCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether the post is featured', example: false }),
    __metadata("design:type", Boolean)
], BlogPostResponseDto.prototype, "isFeatured", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Publish date', example: '2024-01-01T00:00:00.000Z', required: false }),
    __metadata("design:type", Date)
], BlogPostResponseDto.prototype, "publishedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Author ID', example: 'clx1234567890abcdef' }),
    __metadata("design:type", String)
], BlogPostResponseDto.prototype, "authorId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Category ID', example: 'clx1234567890abcdef', required: false }),
    __metadata("design:type", String)
], BlogPostResponseDto.prototype, "categoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation date', example: '2024-01-01T00:00:00.000Z' }),
    __metadata("design:type", Date)
], BlogPostResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update date', example: '2024-01-01T00:00:00.000Z' }),
    __metadata("design:type", Date)
], BlogPostResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Author information', required: false }),
    __metadata("design:type", Object)
], BlogPostResponseDto.prototype, "author", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Category information', required: false }),
    __metadata("design:type", Object)
], BlogPostResponseDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tags array', type: [Object], required: false }),
    __metadata("design:type", Array)
], BlogPostResponseDto.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Comments count', example: 5, required: false }),
    __metadata("design:type", Number)
], BlogPostResponseDto.prototype, "commentsCount", void 0);
//# sourceMappingURL=blog-post-response.dto.js.map