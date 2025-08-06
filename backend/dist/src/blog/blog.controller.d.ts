import { BlogService } from './blog.service';
import { CreateBlogPostDto } from './dto/create-blog-post.dto';
import { UpdateBlogPostDto } from './dto/update-blog-post.dto';
import { BlogFilterDto } from './dto/blog-filter.dto';
import { BlogPostResponseDto } from './dto/blog-post-response.dto';
export declare class BlogController {
    private readonly blogService;
    constructor(blogService: BlogService);
    createBlogPost(createBlogPostDto: CreateBlogPostDto, req: any): Promise<BlogPostResponseDto>;
    updateBlogPost(id: string, updateBlogPostDto: UpdateBlogPostDto): Promise<BlogPostResponseDto>;
    deleteBlogPost(id: string): Promise<{
        message: string;
    }>;
    getBlogPosts(filterDto: BlogFilterDto): Promise<{
        posts: BlogPostResponseDto[];
        total: number;
        page: number;
        limit: number;
    }>;
    getBlogPostById(id: string): Promise<BlogPostResponseDto>;
    getBlogPostBySlug(slug: string): Promise<BlogPostResponseDto>;
    createBlogCategory(body: {
        name: string;
        slug: string;
        description?: string;
        parentId?: string;
    }): Promise<any>;
    getBlogCategories(): Promise<any[]>;
    createBlogTag(body: {
        name: string;
        slug: string;
        description?: string;
    }): Promise<any>;
    getBlogTags(): Promise<any[]>;
    createBlogComment(postId: string, body: {
        content: string;
        parentId?: string;
    }, req: any): Promise<any>;
    getBlogComments(postId: string): Promise<any[]>;
    getFeaturedPosts(limit?: number): Promise<BlogPostResponseDto[]>;
    getPopularPosts(limit?: number): Promise<BlogPostResponseDto[]>;
    searchBlogPosts(query: string, page?: number, limit?: number): Promise<{
        posts: BlogPostResponseDto[];
        total: number;
        page: number;
        limit: number;
    }>;
    getBlogPostsByCategory(slug: string, page?: number, limit?: number): Promise<{
        posts: BlogPostResponseDto[];
        total: number;
        page: number;
        limit: number;
    }>;
    getBlogPostsByTag(slug: string, page?: number, limit?: number): Promise<{
        posts: BlogPostResponseDto[];
        total: number;
        page: number;
        limit: number;
    }>;
}
