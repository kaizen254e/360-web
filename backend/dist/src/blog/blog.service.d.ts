import { PrismaService } from '../prisma/prisma.service';
import { CreateBlogPostDto } from './dto/create-blog-post.dto';
import { UpdateBlogPostDto } from './dto/update-blog-post.dto';
import { BlogFilterDto } from './dto/blog-filter.dto';
import { BlogPostResponseDto } from './dto/blog-post-response.dto';
export declare class BlogService {
    private prisma;
    constructor(prisma: PrismaService);
    private mapToBlogPostResponse;
    createBlogPost(createBlogPostDto: CreateBlogPostDto, authorId: string): Promise<BlogPostResponseDto>;
    getBlogPosts(filterDto: BlogFilterDto): Promise<{
        posts: BlogPostResponseDto[];
        total: number;
        page: number;
        limit: number;
    }>;
    getBlogPostById(id: string): Promise<BlogPostResponseDto>;
    getBlogPostBySlug(slug: string): Promise<BlogPostResponseDto>;
    updateBlogPost(id: string, updateBlogPostDto: UpdateBlogPostDto): Promise<BlogPostResponseDto>;
    deleteBlogPost(id: string): Promise<{
        message: string;
    }>;
    createBlogCategory(name: string, slug: string, description?: string, parentId?: string): Promise<any>;
    getBlogCategories(): Promise<any[]>;
    createBlogTag(name: string, slug: string, description?: string): Promise<any>;
    getBlogTags(): Promise<any[]>;
    createBlogComment(postId: string, userId: string, content: string, parentId?: string): Promise<any>;
    getBlogComments(postId: string): Promise<any[]>;
    getFeaturedPosts(limit?: number): Promise<BlogPostResponseDto[]>;
    getPopularPosts(limit?: number): Promise<BlogPostResponseDto[]>;
}
