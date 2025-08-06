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
exports.BlogService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let BlogService = class BlogService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    mapToBlogPostResponse(post) {
        return {
            id: post.id,
            title: post.title,
            slug: post.slug,
            content: post.content,
            excerpt: post.excerpt,
            status: post.status,
            featuredImage: post.featuredImage,
            metaTitle: post.metaTitle,
            metaDescription: post.metaDescription,
            keywords: post.keywords,
            viewCount: post.viewCount,
            isFeatured: post.isFeatured,
            publishedAt: post.publishedAt,
            authorId: post.authorId,
            categoryId: post.categoryId,
            createdAt: post.createdAt,
            updatedAt: post.updatedAt,
            author: post.author ? {
                id: post.author.id,
                username: post.author.username,
                firstName: post.author.firstName,
                lastName: post.author.lastName,
            } : undefined,
            category: post.category ? {
                id: post.category.id,
                name: post.category.name,
                slug: post.category.slug,
            } : undefined,
            tags: post.tags ? post.tags.map((tag) => ({
                id: tag.tag.id,
                name: tag.tag.name,
                slug: tag.tag.slug,
            })) : undefined,
            commentsCount: post._count?.comments || 0,
        };
    }
    async createBlogPost(createBlogPostDto, authorId) {
        const existingPost = await this.prisma.blogPost.findUnique({
            where: { slug: createBlogPostDto.slug },
        });
        if (existingPost) {
            throw new common_1.ConflictException(`Blog post with slug '${createBlogPostDto.slug}' already exists.`);
        }
        if (createBlogPostDto.categoryId) {
            const category = await this.prisma.blogCategory.findUnique({
                where: { id: createBlogPostDto.categoryId },
            });
            if (!category) {
                throw new common_1.NotFoundException(`Blog category with ID '${createBlogPostDto.categoryId}' not found.`);
            }
        }
        if (createBlogPostDto.tagIds && createBlogPostDto.tagIds.length > 0) {
            const tags = await this.prisma.blogTag.findMany({
                where: { id: { in: createBlogPostDto.tagIds } },
            });
            if (tags.length !== createBlogPostDto.tagIds.length) {
                throw new common_1.NotFoundException('One or more tags not found.');
            }
        }
        const post = await this.prisma.blogPost.create({
            data: {
                title: createBlogPostDto.title,
                slug: createBlogPostDto.slug,
                content: createBlogPostDto.content,
                excerpt: createBlogPostDto.excerpt,
                status: createBlogPostDto.status,
                featuredImage: createBlogPostDto.featuredImage,
                metaTitle: createBlogPostDto.metaTitle,
                metaDescription: createBlogPostDto.metaDescription,
                keywords: createBlogPostDto.keywords,
                isFeatured: createBlogPostDto.isFeatured,
                publishedAt: createBlogPostDto.publishedAt ? new Date(createBlogPostDto.publishedAt) : null,
                authorId,
                categoryId: createBlogPostDto.categoryId,
                tags: createBlogPostDto.tagIds ? {
                    create: createBlogPostDto.tagIds.map(tagId => ({
                        tag: { connect: { id: tagId } },
                    })),
                } : undefined,
            },
            include: {
                author: {
                    select: {
                        id: true,
                        username: true,
                        firstName: true,
                        lastName: true,
                    },
                },
                category: {
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                    },
                },
                tags: {
                    include: {
                        tag: {
                            select: {
                                id: true,
                                name: true,
                                slug: true,
                            },
                        },
                    },
                },
                _count: {
                    select: {
                        comments: true,
                    },
                },
            },
        });
        return this.mapToBlogPostResponse(post);
    }
    async getBlogPosts(filterDto) {
        const { search, status, categoryId, categorySlug, tagId, tagSlug, authorId, isFeatured, year, month, page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'desc', } = filterDto;
        const where = {};
        if (search) {
            where.OR = [
                { title: { contains: search, mode: 'insensitive' } },
                { content: { contains: search, mode: 'insensitive' } },
                { excerpt: { contains: search, mode: 'insensitive' } },
            ];
        }
        if (status) {
            where.status = status;
        }
        if (categoryId) {
            where.categoryId = categoryId;
        }
        if (categorySlug) {
            where.category = { slug: categorySlug };
        }
        if (tagId) {
            where.tags = { some: { tagId } };
        }
        if (tagSlug) {
            where.tags = { some: { tag: { slug: tagSlug } } };
        }
        if (authorId) {
            where.authorId = authorId;
        }
        if (isFeatured !== undefined) {
            where.isFeatured = isFeatured;
        }
        if (year || month) {
            where.publishedAt = {};
            if (year) {
                where.publishedAt.gte = new Date(year, 0, 1);
                where.publishedAt.lt = new Date(year + 1, 0, 1);
            }
            if (month) {
                const startDate = new Date(year || new Date().getFullYear(), month - 1, 1);
                const endDate = new Date(year || new Date().getFullYear(), month, 0);
                where.publishedAt.gte = startDate;
                where.publishedAt.lte = endDate;
            }
        }
        const skip = (page - 1) * limit;
        const [posts, total] = await Promise.all([
            this.prisma.blogPost.findMany({
                where,
                skip,
                take: limit,
                orderBy: { [sortBy]: sortOrder },
                include: {
                    author: {
                        select: {
                            id: true,
                            username: true,
                            firstName: true,
                            lastName: true,
                        },
                    },
                    category: {
                        select: {
                            id: true,
                            name: true,
                            slug: true,
                        },
                    },
                    tags: {
                        include: {
                            tag: {
                                select: {
                                    id: true,
                                    name: true,
                                    slug: true,
                                },
                            },
                        },
                    },
                    _count: {
                        select: {
                            comments: true,
                        },
                    },
                },
            }),
            this.prisma.blogPost.count({ where }),
        ]);
        return {
            posts: posts.map(post => this.mapToBlogPostResponse(post)),
            total,
            page,
            limit,
        };
    }
    async getBlogPostById(id) {
        const post = await this.prisma.blogPost.findUnique({
            where: { id },
            include: {
                author: {
                    select: {
                        id: true,
                        username: true,
                        firstName: true,
                        lastName: true,
                    },
                },
                category: {
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                    },
                },
                tags: {
                    include: {
                        tag: {
                            select: {
                                id: true,
                                name: true,
                                slug: true,
                            },
                        },
                    },
                },
                _count: {
                    select: {
                        comments: true,
                    },
                },
            },
        });
        if (!post) {
            throw new common_1.NotFoundException(`Blog post with ID '${id}' not found.`);
        }
        await this.prisma.blogPost.update({
            where: { id },
            data: { viewCount: { increment: 1 } },
        });
        return this.mapToBlogPostResponse(post);
    }
    async getBlogPostBySlug(slug) {
        const post = await this.prisma.blogPost.findUnique({
            where: { slug },
            include: {
                author: {
                    select: {
                        id: true,
                        username: true,
                        firstName: true,
                        lastName: true,
                    },
                },
                category: {
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                    },
                },
                tags: {
                    include: {
                        tag: {
                            select: {
                                id: true,
                                name: true,
                                slug: true,
                            },
                        },
                    },
                },
                _count: {
                    select: {
                        comments: true,
                    },
                },
            },
        });
        if (!post) {
            throw new common_1.NotFoundException(`Blog post with slug '${slug}' not found.`);
        }
        await this.prisma.blogPost.update({
            where: { slug },
            data: { viewCount: { increment: 1 } },
        });
        return this.mapToBlogPostResponse(post);
    }
    async updateBlogPost(id, updateBlogPostDto) {
        const existingPost = await this.prisma.blogPost.findUnique({
            where: { id },
        });
        if (!existingPost) {
            throw new common_1.NotFoundException(`Blog post with ID '${id}' not found.`);
        }
        if (updateBlogPostDto.slug && updateBlogPostDto.slug !== existingPost.slug) {
            const slugConflict = await this.prisma.blogPost.findUnique({
                where: { slug: updateBlogPostDto.slug },
            });
            if (slugConflict) {
                throw new common_1.ConflictException(`Blog post with slug '${updateBlogPostDto.slug}' already exists.`);
            }
        }
        if (updateBlogPostDto.categoryId) {
            const category = await this.prisma.blogCategory.findUnique({
                where: { id: updateBlogPostDto.categoryId },
            });
            if (!category) {
                throw new common_1.NotFoundException(`Blog category with ID '${updateBlogPostDto.categoryId}' not found.`);
            }
        }
        const updatedPost = await this.prisma.blogPost.update({
            where: { id },
            data: {
                title: updateBlogPostDto.title,
                slug: updateBlogPostDto.slug,
                content: updateBlogPostDto.content,
                excerpt: updateBlogPostDto.excerpt,
                status: updateBlogPostDto.status,
                featuredImage: updateBlogPostDto.featuredImage,
                metaTitle: updateBlogPostDto.metaTitle,
                metaDescription: updateBlogPostDto.metaDescription,
                keywords: updateBlogPostDto.keywords,
                isFeatured: updateBlogPostDto.isFeatured,
                publishedAt: updateBlogPostDto.publishedAt ? new Date(updateBlogPostDto.publishedAt) : undefined,
                categoryId: updateBlogPostDto.categoryId,
                viewCount: updateBlogPostDto.viewCount,
            },
            include: {
                author: {
                    select: {
                        id: true,
                        username: true,
                        firstName: true,
                        lastName: true,
                    },
                },
                category: {
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                    },
                },
                tags: {
                    include: {
                        tag: {
                            select: {
                                id: true,
                                name: true,
                                slug: true,
                            },
                        },
                    },
                },
                _count: {
                    select: {
                        comments: true,
                    },
                },
            },
        });
        return this.mapToBlogPostResponse(updatedPost);
    }
    async deleteBlogPost(id) {
        const existingPost = await this.prisma.blogPost.findUnique({
            where: { id },
        });
        if (!existingPost) {
            throw new common_1.NotFoundException(`Blog post with ID '${id}' not found.`);
        }
        await this.prisma.blogPost.delete({
            where: { id },
        });
        return { message: `Blog post '${existingPost.title}' deleted successfully.` };
    }
    async createBlogCategory(name, slug, description, parentId) {
        const existingCategory = await this.prisma.blogCategory.findUnique({
            where: { slug },
        });
        if (existingCategory) {
            throw new common_1.ConflictException(`Blog category with slug '${slug}' already exists.`);
        }
        if (parentId) {
            const parentCategory = await this.prisma.blogCategory.findUnique({
                where: { id: parentId },
            });
            if (!parentCategory) {
                throw new common_1.NotFoundException(`Parent category with ID '${parentId}' not found.`);
            }
        }
        return this.prisma.blogCategory.create({
            data: {
                name,
                slug,
                description,
                parentId,
            },
        });
    }
    async getBlogCategories() {
        return this.prisma.blogCategory.findMany({
            where: { isActive: true },
            orderBy: { order: 'asc' },
            include: {
                _count: {
                    select: {
                        posts: true,
                    },
                },
            },
        });
    }
    async createBlogTag(name, slug, description) {
        const existingTag = await this.prisma.blogTag.findUnique({
            where: { slug },
        });
        if (existingTag) {
            throw new common_1.ConflictException(`Blog tag with slug '${slug}' already exists.`);
        }
        return this.prisma.blogTag.create({
            data: {
                name,
                slug,
                description,
            },
        });
    }
    async getBlogTags() {
        return this.prisma.blogTag.findMany({
            orderBy: { name: 'asc' },
            include: {
                _count: {
                    select: {
                        posts: true,
                    },
                },
            },
        });
    }
    async createBlogComment(postId, userId, content, parentId) {
        const post = await this.prisma.blogPost.findUnique({
            where: { id: postId },
        });
        if (!post) {
            throw new common_1.NotFoundException(`Blog post with ID '${postId}' not found.`);
        }
        if (parentId) {
            const parentComment = await this.prisma.blogComment.findUnique({
                where: { id: parentId },
            });
            if (!parentComment) {
                throw new common_1.NotFoundException(`Parent comment with ID '${parentId}' not found.`);
            }
        }
        return this.prisma.blogComment.create({
            data: {
                content,
                postId,
                userId,
                parentId,
            },
            include: {
                user: {
                    select: {
                        id: true,
                        username: true,
                        firstName: true,
                        lastName: true,
                    },
                },
            },
        });
    }
    async getBlogComments(postId) {
        return this.prisma.blogComment.findMany({
            where: {
                postId,
                status: client_1.CommentStatus.APPROVED,
                parentId: null,
            },
            include: {
                user: {
                    select: {
                        id: true,
                        username: true,
                        firstName: true,
                        lastName: true,
                    },
                },
                replies: {
                    where: { status: client_1.CommentStatus.APPROVED },
                    include: {
                        user: {
                            select: {
                                id: true,
                                username: true,
                                firstName: true,
                                lastName: true,
                            },
                        },
                    },
                    orderBy: { createdAt: 'asc' },
                },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async getFeaturedPosts(limit = 5) {
        const posts = await this.prisma.blogPost.findMany({
            where: {
                isFeatured: true,
                status: client_1.BlogPostStatus.PUBLISHED,
            },
            take: limit,
            orderBy: { publishedAt: 'desc' },
            include: {
                author: {
                    select: {
                        id: true,
                        username: true,
                        firstName: true,
                        lastName: true,
                    },
                },
                category: {
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                    },
                },
                tags: {
                    include: {
                        tag: {
                            select: {
                                id: true,
                                name: true,
                                slug: true,
                            },
                        },
                    },
                },
                _count: {
                    select: {
                        comments: true,
                    },
                },
            },
        });
        return posts.map(post => this.mapToBlogPostResponse(post));
    }
    async getPopularPosts(limit = 5) {
        const posts = await this.prisma.blogPost.findMany({
            where: {
                status: client_1.BlogPostStatus.PUBLISHED,
            },
            take: limit,
            orderBy: { viewCount: 'desc' },
            include: {
                author: {
                    select: {
                        id: true,
                        username: true,
                        firstName: true,
                        lastName: true,
                    },
                },
                category: {
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                    },
                },
                tags: {
                    include: {
                        tag: {
                            select: {
                                id: true,
                                name: true,
                                slug: true,
                            },
                        },
                    },
                },
                _count: {
                    select: {
                        comments: true,
                    },
                },
            },
        });
        return posts.map(post => this.mapToBlogPostResponse(post));
    }
};
exports.BlogService = BlogService;
exports.BlogService = BlogService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BlogService);
//# sourceMappingURL=blog.service.js.map