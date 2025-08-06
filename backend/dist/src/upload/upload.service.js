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
exports.UploadService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const cloudinary_1 = require("cloudinary");
let UploadService = class UploadService {
    configService;
    constructor(configService) {
        this.configService = configService;
        cloudinary_1.v2.config({
            cloud_name: this.configService.get('CLOUDINARY_CLOUD_NAME'),
            api_key: this.configService.get('CLOUDINARY_API_KEY'),
            api_secret: this.configService.get('CLOUDINARY_API_SECRET'),
        });
    }
    async uploadImage(file, folder, transformation) {
        try {
            const uploadOptions = {
                resource_type: 'image',
                folder: folder || '360-web/images',
            };
            if (transformation) {
                uploadOptions.transformation = transformation;
            }
            const result = await cloudinary_1.v2.uploader.upload(file.path, uploadOptions);
            return {
                publicId: result.public_id,
                url: result.url,
                secureUrl: result.secure_url,
                format: result.format,
                bytes: result.bytes,
                width: result.width,
                height: result.height,
                createdAt: new Date(result.created_at),
            };
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to upload image: ' + error.message);
        }
    }
    async uploadVideo(file, folder, transformation) {
        try {
            const uploadOptions = {
                resource_type: 'video',
                folder: folder || '360-web/videos',
            };
            if (transformation) {
                uploadOptions.transformation = transformation;
            }
            const result = await cloudinary_1.v2.uploader.upload(file.path, uploadOptions);
            return {
                publicId: result.public_id,
                url: result.url,
                secureUrl: result.secure_url,
                format: result.format,
                bytes: result.bytes,
                width: result.width,
                height: result.height,
                duration: result.duration,
                createdAt: new Date(result.created_at),
            };
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to upload video: ' + error.message);
        }
    }
    async deleteFile(publicId, resourceType = 'image') {
        try {
            await cloudinary_1.v2.uploader.destroy(publicId, { resource_type: resourceType });
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to delete file: ' + error.message);
        }
    }
    async getFileUrl(publicId, transformation) {
        try {
            const url = cloudinary_1.v2.url(publicId, {
                secure: true,
                transformation: transformation,
            });
            return url;
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to get file URL: ' + error.message);
        }
    }
    async optimizeImage(publicId, options = {}) {
        try {
            const result = await cloudinary_1.v2.uploader.explicit(publicId, {
                type: 'upload',
                eager: [
                    { width: 800, height: 600, crop: 'fill', quality: 'auto' },
                    { width: 400, height: 300, crop: 'fill', quality: 'auto' },
                ],
                ...options,
            });
            return {
                publicId: result.public_id,
                url: result.url,
                secureUrl: result.secure_url,
                format: result.format,
                bytes: result.bytes,
                width: result.width,
                height: result.height,
                createdAt: new Date(result.created_at),
            };
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to optimize image: ' + error.message);
        }
    }
};
exports.UploadService = UploadService;
exports.UploadService = UploadService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], UploadService);
//# sourceMappingURL=upload.service.js.map