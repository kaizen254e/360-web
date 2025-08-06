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
exports.VideoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let VideoService = class VideoService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createVideo(createVideoDto) {
        const video = await this.prisma.video.create({
            data: {
                title: createVideoDto.title,
                description: createVideoDto.description,
                videoUrl: createVideoDto.videoUrl,
                thumbnailUrl: createVideoDto.thumbnailUrl,
                duration: createVideoDto.duration,
                category: createVideoDto.category,
                platform: createVideoDto.platform,
                productId: createVideoDto.productId,
                isActive: createVideoDto.isActive,
            },
        });
        return this.mapToVideoResponse(video);
    }
    async findAll(query) {
        const { category, platform, isActive } = query;
        const where = {};
        if (category) {
            where.category = category;
        }
        if (platform) {
            where.platform = platform;
        }
        if (isActive !== undefined) {
            where.isActive = isActive === 'true';
        }
        const videos = await this.prisma.video.findMany({
            where,
            orderBy: { createdAt: 'desc' },
        });
        return {
            videos: videos.map(video => this.mapToVideoResponse(video)),
            total: videos.length,
        };
    }
    async findOne(id) {
        const video = await this.prisma.video.findUnique({
            where: { id },
        });
        if (!video) {
            throw new common_1.NotFoundException(`Video with ID ${id} not found`);
        }
        return this.mapToVideoResponse(video);
    }
    async updateVideo(id, updateVideoDto) {
        const video = await this.prisma.video.findUnique({
            where: { id },
        });
        if (!video) {
            throw new common_1.NotFoundException(`Video with ID ${id} not found`);
        }
        const updatedVideo = await this.prisma.video.update({
            where: { id },
            data: updateVideoDto,
        });
        return this.mapToVideoResponse(updatedVideo);
    }
    async deleteVideo(id) {
        const video = await this.prisma.video.findUnique({
            where: { id },
        });
        if (!video) {
            throw new common_1.NotFoundException(`Video with ID ${id} not found`);
        }
        await this.prisma.video.delete({
            where: { id },
        });
        return { message: 'Video deleted successfully' };
    }
    async incrementViews(id) {
        const video = await this.prisma.video.findUnique({
            where: { id },
        });
        if (!video) {
            throw new common_1.NotFoundException(`Video with ID ${id} not found`);
        }
        await this.prisma.video.update({
            where: { id },
            data: {
                views: {
                    increment: 1,
                },
            },
        });
        return { message: 'Views incremented successfully' };
    }
    mapToVideoResponse(video) {
        return {
            id: video.id,
            title: video.title,
            description: video.description,
            videoUrl: video.videoUrl,
            thumbnailUrl: video.thumbnailUrl,
            duration: video.duration,
            category: video.category,
            platform: video.platform,
            productId: video.productId,
            isActive: video.isActive,
            views: video.views,
            createdAt: video.createdAt,
            updatedAt: video.updatedAt,
        };
    }
};
exports.VideoService = VideoService;
exports.VideoService = VideoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VideoService);
//# sourceMappingURL=video.service.js.map