import { PrismaService } from '../prisma/prisma.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { VideoResponseDto } from './dto/video-response.dto';
export declare class VideoService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createVideo(createVideoDto: CreateVideoDto): Promise<VideoResponseDto>;
    findAll(query: any): Promise<{
        videos: VideoResponseDto[];
        total: number;
    }>;
    findOne(id: string): Promise<VideoResponseDto>;
    updateVideo(id: string, updateVideoDto: UpdateVideoDto): Promise<VideoResponseDto>;
    deleteVideo(id: string): Promise<{
        message: string;
    }>;
    incrementViews(id: string): Promise<{
        message: string;
    }>;
    private mapToVideoResponse;
}
