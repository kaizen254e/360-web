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
exports.BlogController = void 0;
const common_1 = require("@nestjs/common");
const blog_service_1 = require("./blog.service");
const create_blog_post_dto_1 = require("./dto/create-blog-post.dto");
const update_blog_post_dto_1 = require("./dto/update-blog-post.dto");
const blog_filter_dto_1 = require("./dto/blog-filter.dto");
const blog_post_response_dto_1 = require("./dto/blog-post-response.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const admin_guard_1 = require("../auth/guards/admin.guard");
const client_1 = require("@prisma/client");
let BlogController = class BlogController {
    blogService;
    constructor(blogService) {
        this.blogService = blogService;
    }
    async createBlogPost(createBlogPostDto, req) {
        return this.blogService.createBlogPost(createBlogPostDto, req.user.id);
    }
    async updateBlogPost(id, updateBlogPostDto) {
        return this.blogService.updateBlogPost(id, updateBlogPostDto);
    }
    async deleteBlogPost(id) {
        return this.blogService.deleteBlogPost(id);
    }
    async getBlogPosts(filterDto) {
        return this.blogService.getBlogPosts(filterDto);
    }
    async getBlogPostById(id) {
        return this.blogService.getBlogPostById(id);
    }
    async getBlogPostBySlug(slug) {
        return this.blogService.getBlogPostBySlug(slug);
    }
    async createBlogCategory(body) {
        return this.blogService.createBlogCategory(body.name, body.slug, body.description, body.parentId);
    }
    async getBlogCategories() {
        return this.blogService.getBlogCategories();
    }
    async createBlogTag(body) {
        return this.blogService.createBlogTag(body.name, body.slug, body.description);
    }
    async getBlogTags() {
        return this.blogService.getBlogTags();
    }
    async createBlogComment(postId, body, req) {
        return this.blogService.createBlogComment(postId, req.user.id, body.content, body.parentId);
    }
    async getBlogComments(postId) {
        return this.blogService.getBlogComments(postId);
    }
    async getFeaturedPosts(limit = 5) {
        return this.blogService.getFeaturedPosts(limit);
    }
    async getPopularPosts(limit = 5) {
        return this.blogService.getPopularPosts(limit);
    }
    async searchBlogPosts(query, page = 1, limit = 10) {
        const filterDto = {
            search: query,
            page,
            limit,
        };
        return this.blogService.getBlogPosts(filterDto);
    }
    async getBlogPostsByCategory(slug, page = 1, limit = 10) {
        const filterDto = {
            categorySlug: slug,
            page,
            limit,
        };
        return this.blogService.getBlogPosts(filterDto);
    }
    async getBlogPostsByTag(slug, page = 1, limit = 10) {
        const filterDto = {
            tagSlug: slug,
            page,
            limit,
        };
        return this.blogService.getBlogPosts(filterDto);
    }
};
exports.BlogController = BlogController;
__decorate([
    (0, common_1.Post)('posts'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new blog post (Admin only)' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Blog post created successfully',
        type: blog_post_response_dto_1.BlogPostResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Blog post slug already exists' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_blog_post_dto_1.CreateBlogPostDto, Object]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "createBlogPost", null);
__decorate([
    (0, common_1.Put)('posts/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Update blog post (Admin only)' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Blog post updated successfully',
        type: blog_post_response_dto_1.BlogPostResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Blog post not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_blog_post_dto_1.UpdateBlogPostDto]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "updateBlogPost", null);
__decorate([
    (0, common_1.Delete)('posts/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Delete blog post (Admin only)' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Blog post deleted successfully',
        schema: {
            type: 'object',
            properties: {
                message: { type: 'string' },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Blog post not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "deleteBlogPost", null);
__decorate([
    (0, common_1.Get)('posts'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all blog posts with filtering and pagination' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Blog posts retrieved successfully',
        schema: {
            type: 'object',
            properties: {
                posts: {
                    type: 'array',
                    items: { $ref: '#/components/schemas/BlogPostResponseDto' },
                },
                total: { type: 'number' },
                page: { type: 'number' },
                limit: { type: 'number' },
            },
        },
    }),
    (0, swagger_1.ApiQuery)({ name: 'search', required: false, description: 'Search by title or content' }),
    (0, swagger_1.ApiQuery)({ name: 'status', required: false, enum: client_1.BlogPostStatus, description: 'Filter by status' }),
    (0, swagger_1.ApiQuery)({ name: 'categoryId', required: false, description: 'Filter by category ID' }),
    (0, swagger_1.ApiQuery)({ name: 'categorySlug', required: false, description: 'Filter by category slug' }),
    (0, swagger_1.ApiQuery)({ name: 'tagId', required: false, description: 'Filter by tag ID' }),
    (0, swagger_1.ApiQuery)({ name: 'tagSlug', required: false, description: 'Filter by tag slug' }),
    (0, swagger_1.ApiQuery)({ name: 'authorId', required: false, description: 'Filter by author ID' }),
    (0, swagger_1.ApiQuery)({ name: 'isFeatured', required: false, type: 'boolean', description: 'Filter by featured status' }),
    (0, swagger_1.ApiQuery)({ name: 'year', required: false, type: 'number', description: 'Filter by year' }),
    (0, swagger_1.ApiQuery)({ name: 'month', required: false, type: 'number', description: 'Filter by month' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: 'number', example: 1 }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: 'number', example: 10 }),
    (0, swagger_1.ApiQuery)({ name: 'sortBy', required: false, enum: ['title', 'createdAt', 'publishedAt', 'viewCount'], example: 'createdAt' }),
    (0, swagger_1.ApiQuery)({ name: 'sortOrder', required: false, enum: ['asc', 'desc'], example: 'desc' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [blog_filter_dto_1.BlogFilterDto]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "getBlogPosts", null);
__decorate([
    (0, common_1.Get)('posts/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get blog post by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Blog post retrieved successfully',
        type: blog_post_response_dto_1.BlogPostResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Blog post not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "getBlogPostById", null);
__decorate([
    (0, common_1.Get)('posts/slug/:slug'),
    (0, swagger_1.ApiOperation)({ summary: 'Get blog post by slug' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Blog post retrieved successfully',
        type: blog_post_response_dto_1.BlogPostResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Blog post not found' }),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "getBlogPostBySlug", null);
__decorate([
    (0, common_1.Post)('categories'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new blog category (Admin only)' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Blog category created successfully',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "createBlogCategory", null);
__decorate([
    (0, common_1.Get)('categories'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all blog categories' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Blog categories retrieved successfully',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "getBlogCategories", null);
__decorate([
    (0, common_1.Post)('tags'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new blog tag (Admin only)' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Blog tag created successfully',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "createBlogTag", null);
__decorate([
    (0, common_1.Get)('tags'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all blog tags' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Blog tags retrieved successfully',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "getBlogTags", null);
__decorate([
    (0, common_1.Post)('posts/:id/comments'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Add a comment to a blog post (Authenticated users)' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Comment added successfully',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "createBlogComment", null);
__decorate([
    (0, common_1.Get)('posts/:id/comments'),
    (0, swagger_1.ApiOperation)({ summary: 'Get comments for a blog post' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Comments retrieved successfully',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "getBlogComments", null);
__decorate([
    (0, common_1.Get)('posts/featured/featured'),
    (0, swagger_1.ApiOperation)({ summary: 'Get featured blog posts' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Featured blog posts retrieved successfully',
        type: [blog_post_response_dto_1.BlogPostResponseDto],
    }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: 'number', example: 5 }),
    __param(0, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "getFeaturedPosts", null);
__decorate([
    (0, common_1.Get)('posts/popular/popular'),
    (0, swagger_1.ApiOperation)({ summary: 'Get popular blog posts' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Popular blog posts retrieved successfully',
        type: [blog_post_response_dto_1.BlogPostResponseDto],
    }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: 'number', example: 5 }),
    __param(0, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "getPopularPosts", null);
__decorate([
    (0, common_1.Get)('search'),
    (0, swagger_1.ApiOperation)({ summary: 'Search blog posts' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Search results retrieved successfully',
    }),
    (0, swagger_1.ApiQuery)({ name: 'q', required: true, description: 'Search query' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: 'number', example: 1 }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: 'number', example: 10 }),
    __param(0, (0, common_1.Query)('q')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "searchBlogPosts", null);
__decorate([
    (0, common_1.Get)('category/:slug'),
    (0, swagger_1.ApiOperation)({ summary: 'Get blog posts by category slug' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Blog posts by category retrieved successfully',
    }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: 'number', example: 1 }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: 'number', example: 10 }),
    __param(0, (0, common_1.Param)('slug')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "getBlogPostsByCategory", null);
__decorate([
    (0, common_1.Get)('tag/:slug'),
    (0, swagger_1.ApiOperation)({ summary: 'Get blog posts by tag slug' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Blog posts by tag retrieved successfully',
    }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: 'number', example: 1 }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: 'number', example: 10 }),
    __param(0, (0, common_1.Param)('slug')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "getBlogPostsByTag", null);
exports.BlogController = BlogController = __decorate([
    (0, swagger_1.ApiTags)('Blog'),
    (0, common_1.Controller)('blog'),
    __metadata("design:paramtypes", [blog_service_1.BlogService])
], BlogController);
//# sourceMappingURL=blog.controller.js.map