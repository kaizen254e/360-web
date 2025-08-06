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
exports.UploadController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const multer_1 = require("multer");
const path_1 = require("path");
const upload_service_1 = require("./upload.service");
const upload_file_dto_1 = require("./dto/upload-file.dto");
const file_response_dto_1 = require("./dto/file-response.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const admin_guard_1 = require("../auth/guards/admin.guard");
let UploadController = class UploadController {
    uploadService;
    constructor(uploadService) {
        this.uploadService = uploadService;
    }
    async uploadImage(file, uploadFileDto) {
        if (!file) {
            throw new Error('No file uploaded');
        }
        uploadFileDto.type = upload_file_dto_1.FileType.IMAGE;
        return this.uploadService.uploadImage(file, uploadFileDto.folder, uploadFileDto.transformation);
    }
    async uploadVideo(file, uploadFileDto) {
        if (!file) {
            throw new Error('No file uploaded');
        }
        uploadFileDto.type = upload_file_dto_1.FileType.VIDEO;
        return this.uploadService.uploadVideo(file, uploadFileDto.folder, uploadFileDto.transformation);
    }
    async deleteFile(publicId) {
        await this.uploadService.deleteFile(publicId);
        return { message: 'File deleted successfully' };
    }
    async getFileUrl(publicId, transformation) {
        const url = await this.uploadService.getFileUrl(publicId, transformation);
        return { url };
    }
    async optimizeImage(publicId, options) {
        return this.uploadService.optimizeImage(publicId, options);
    }
};
exports.UploadController = UploadController;
__decorate([
    (0, common_1.Post)('image'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload image to Cloudinary' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Image uploaded successfully', type: file_response_dto_1.FileResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid file or upload failed' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Admin access required' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, cb) => {
                const randomName = Array(32)
                    .fill(null)
                    .map(() => Math.round(Math.random() * 16).toString(16))
                    .join('');
                return cb(null, `${randomName}${(0, path_1.extname)(file.originalname)}`);
            },
        }),
        fileFilter: (req, file, cb) => {
            if (!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/)) {
                return cb(new Error('Only image files are allowed!'), false);
            }
            cb(null, true);
        },
        limits: {
            fileSize: 5 * 1024 * 1024,
        },
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, upload_file_dto_1.UploadFileDto]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "uploadImage", null);
__decorate([
    (0, common_1.Post)('video'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload video to Cloudinary' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Video uploaded successfully', type: file_response_dto_1.FileResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid file or upload failed' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Admin access required' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, cb) => {
                const randomName = Array(32)
                    .fill(null)
                    .map(() => Math.round(Math.random() * 16).toString(16))
                    .join('');
                return cb(null, `${randomName}${(0, path_1.extname)(file.originalname)}`);
            },
        }),
        fileFilter: (req, file, cb) => {
            if (!file.originalname.match(/\.(mp4|avi|mov|wmv|flv|webm)$/)) {
                return cb(new Error('Only video files are allowed!'), false);
            }
            cb(null, true);
        },
        limits: {
            fileSize: 100 * 1024 * 1024,
        },
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, upload_file_dto_1.UploadFileDto]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "uploadVideo", null);
__decorate([
    (0, common_1.Delete)(':publicId'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete file from Cloudinary' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'File deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Failed to delete file' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Admin access required' }),
    __param(0, (0, common_1.Param)('publicId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "deleteFile", null);
__decorate([
    (0, common_1.Get)(':publicId/url'),
    (0, swagger_1.ApiOperation)({ summary: 'Get file URL from Cloudinary' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'File URL retrieved successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Failed to get file URL' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Admin access required' }),
    __param(0, (0, common_1.Param)('publicId')),
    __param(1, (0, common_1.Query)('transformation')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "getFileUrl", null);
__decorate([
    (0, common_1.Post)(':publicId/optimize'),
    (0, swagger_1.ApiOperation)({ summary: 'Optimize image in Cloudinary' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Image optimized successfully', type: file_response_dto_1.FileResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Failed to optimize image' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Admin access required' }),
    __param(0, (0, common_1.Param)('publicId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "optimizeImage", null);
exports.UploadController = UploadController = __decorate([
    (0, swagger_1.ApiTags)('upload'),
    (0, common_1.Controller)('upload'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [upload_service_1.UploadService])
], UploadController);
//# sourceMappingURL=upload.controller.js.map