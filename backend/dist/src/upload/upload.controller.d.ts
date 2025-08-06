import { UploadService } from './upload.service';
import { UploadFileDto } from './dto/upload-file.dto';
import { FileResponseDto } from './dto/file-response.dto';
export declare class UploadController {
    private readonly uploadService;
    constructor(uploadService: UploadService);
    uploadImage(file: Express.Multer.File, uploadFileDto: UploadFileDto): Promise<FileResponseDto>;
    uploadVideo(file: Express.Multer.File, uploadFileDto: UploadFileDto): Promise<FileResponseDto>;
    deleteFile(publicId: string): Promise<{
        message: string;
    }>;
    getFileUrl(publicId: string, transformation?: string): Promise<{
        url: string;
    }>;
    optimizeImage(publicId: string, options: any): Promise<FileResponseDto>;
}
