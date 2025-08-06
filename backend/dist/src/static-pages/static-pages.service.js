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
exports.StaticPagesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let StaticPagesService = class StaticPagesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    mapToStaticPageResponse(page) {
        return {
            id: page.id,
            title: page.title,
            slug: page.slug,
            content: page.content,
            metaTitle: page.metaTitle || undefined,
            metaDescription: page.metaDescription || undefined,
            status: page.status,
            createdAt: page.createdAt,
            updatedAt: page.updatedAt,
        };
    }
    async createStaticPage(createStaticPageDto) {
        const existingPage = await this.prisma.staticPage.findUnique({
            where: { slug: createStaticPageDto.slug },
        });
        if (existingPage) {
            throw new common_1.ConflictException(`Static page with slug '${createStaticPageDto.slug}' already exists.`);
        }
        const page = await this.prisma.staticPage.create({
            data: {
                title: createStaticPageDto.title,
                slug: createStaticPageDto.slug,
                content: createStaticPageDto.content,
                metaTitle: createStaticPageDto.metaTitle,
                metaDescription: createStaticPageDto.metaDescription,
                status: createStaticPageDto.status,
            },
        });
        return this.mapToStaticPageResponse(page);
    }
    async getAllStaticPages() {
        const pages = await this.prisma.staticPage.findMany({
            where: { status: client_1.StaticPageStatus.PUBLISHED },
            orderBy: { createdAt: 'desc' },
        });
        return pages.map(page => this.mapToStaticPageResponse(page));
    }
    async getStaticPageById(id) {
        const page = await this.prisma.staticPage.findUnique({
            where: { id },
        });
        if (!page) {
            throw new common_1.NotFoundException(`Static page with ID '${id}' not found.`);
        }
        return this.mapToStaticPageResponse(page);
    }
    async getStaticPageBySlug(slug) {
        const page = await this.prisma.staticPage.findUnique({
            where: { slug },
        });
        if (!page) {
            throw new common_1.NotFoundException(`Static page with slug '${slug}' not found.`);
        }
        return this.mapToStaticPageResponse(page);
    }
    async updateStaticPage(id, updateStaticPageDto) {
        const existingPage = await this.prisma.staticPage.findUnique({
            where: { id },
        });
        if (!existingPage) {
            throw new common_1.NotFoundException(`Static page with ID '${id}' not found.`);
        }
        if (updateStaticPageDto.slug && updateStaticPageDto.slug !== existingPage.slug) {
            const slugConflict = await this.prisma.staticPage.findUnique({
                where: { slug: updateStaticPageDto.slug },
            });
            if (slugConflict) {
                throw new common_1.ConflictException(`Static page with slug '${updateStaticPageDto.slug}' already exists.`);
            }
        }
        const updatedPage = await this.prisma.staticPage.update({
            where: { id },
            data: {
                title: updateStaticPageDto.title,
                slug: updateStaticPageDto.slug,
                content: updateStaticPageDto.content,
                metaTitle: updateStaticPageDto.metaTitle,
                metaDescription: updateStaticPageDto.metaDescription,
                status: updateStaticPageDto.status,
            },
        });
        return this.mapToStaticPageResponse(updatedPage);
    }
    async deleteStaticPage(id) {
        const existingPage = await this.prisma.staticPage.findUnique({
            where: { id },
        });
        if (!existingPage) {
            throw new common_1.NotFoundException(`Static page with ID '${id}' not found.`);
        }
        await this.prisma.staticPage.delete({
            where: { id },
        });
        return { message: `Static page '${existingPage.title}' deleted successfully.` };
    }
};
exports.StaticPagesService = StaticPagesService;
exports.StaticPagesService = StaticPagesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StaticPagesService);
//# sourceMappingURL=static-pages.service.js.map