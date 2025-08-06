import { VideoService } from './video.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { VideoResponseDto } from './dto/video-response.dto';
export declare class VideoController {
    private readonly videoService;
    constructor(videoService: VideoService);
    createVideo(createVideoDto: CreateVideoDto): Promise<VideoResponseDto>;
    findAll(query: any): Promise<{
        videos: VideoResponseDto[];
        total: number;
    }>;
    findOne(id: string): Promise<VideoResponseDto>;
    updateVideo(id: string, updateVideoDto: UpdateVideoDto): Promise<VideoResponseDto>;
    toggleStatus(id: string, body: {
        isActive: boolean;
    }): Promise<VideoResponseDto>;
    incrementViews(id: string): Promise<{
        message: string;
    }>;
    deleteVideo(id: string): Promise<{
        message: string;
    }>;
}
