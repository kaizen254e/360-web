import { ConfigService } from '@nestjs/config';
import { FileResponseDto } from './dto/file-response.dto';
export declare class UploadService {
    private configService;
    constructor(configService: ConfigService);
    uploadImage(file: Express.Multer.File, folder?: string, transformation?: string): Promise<FileResponseDto>;
    uploadVideo(file: Express.Multer.File, folder?: string, transformation?: string): Promise<FileResponseDto>;
    deleteFile(publicId: string, resourceType?: 'image' | 'video'): Promise<void>;
    getFileUrl(publicId: string, transformation?: string): Promise<string>;
    optimizeImage(publicId: string, options?: any): Promise<FileResponseDto>;
}
