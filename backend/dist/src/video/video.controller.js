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
exports.VideoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const video_service_1 = require("./video.service");
const create_video_dto_1 = require("./dto/create-video.dto");
const update_video_dto_1 = require("./dto/update-video.dto");
const video_response_dto_1 = require("./dto/video-response.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const admin_guard_1 = require("../auth/guards/admin.guard");
let VideoController = class VideoController {
    videoService;
    constructor(videoService) {
        this.videoService = videoService;
    }
    async createVideo(createVideoDto) {
        return this.videoService.createVideo(createVideoDto);
    }
    async findAll(query) {
        return this.videoService.findAll(query);
    }
    async findOne(id) {
        return this.videoService.findOne(id);
    }
    async updateVideo(id, updateVideoDto) {
        return this.videoService.updateVideo(id, updateVideoDto);
    }
    async toggleStatus(id, body) {
        return this.videoService.updateVideo(id, { isActive: body.isActive });
    }
    async incrementViews(id) {
        return this.videoService.incrementViews(id);
    }
    async deleteVideo(id) {
        return this.videoService.deleteVideo(id);
    }
};
exports.VideoController = VideoController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new video (Admin only)' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Video created successfully', type: video_response_dto_1.VideoResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Admin access required' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_video_dto_1.CreateVideoDto]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "createVideo", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all videos' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Videos retrieved successfully' }),
    (0, swagger_1.ApiQuery)({ name: 'category', required: false, type: String, description: 'Filter by category' }),
    (0, swagger_1.ApiQuery)({ name: 'platform', required: false, type: String, description: 'Filter by platform' }),
    (0, swagger_1.ApiQuery)({ name: 'isActive', required: false, type: Boolean, description: 'Filter by active status' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a specific video' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Video retrieved successfully', type: video_response_dto_1.VideoResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Video not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Update a video (Admin only)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Video updated successfully', type: video_response_dto_1.VideoResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Admin access required' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Video not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_video_dto_1.UpdateVideoDto]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "updateVideo", null);
__decorate([
    (0, common_1.Patch)(':id/status'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Toggle video status (Admin only)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Video status updated successfully', type: video_response_dto_1.VideoResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Admin access required' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Video not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "toggleStatus", null);
__decorate([
    (0, common_1.Patch)(':id/views'),
    (0, swagger_1.ApiOperation)({ summary: 'Increment video views' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Views incremented successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Video not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "incrementViews", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a video (Admin only)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Video deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Admin access required' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Video not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "deleteVideo", null);
exports.VideoController = VideoController = __decorate([
    (0, swagger_1.ApiTags)('videos'),
    (0, common_1.Controller)('videos'),
    __metadata("design:paramtypes", [video_service_1.VideoService])
], VideoController);
//# sourceMappingURL=video.controller.js.map