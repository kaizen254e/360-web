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
exports.VouchController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const vouch_service_1 = require("./vouch.service");
const vouch_seeder_service_1 = require("./vouch-seeder.service");
const create_vouch_dto_1 = require("./dto/create-vouch.dto");
const update_vouch_dto_1 = require("./dto/update-vouch.dto");
const vouch_filter_dto_1 = require("./dto/vouch-filter.dto");
const vouch_response_dto_1 = require("./dto/vouch-response.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const admin_guard_1 = require("../auth/guards/admin.guard");
let VouchController = class VouchController {
    vouchService;
    vouchSeederService;
    constructor(vouchService, vouchSeederService) {
        this.vouchService = vouchService;
        this.vouchSeederService = vouchSeederService;
    }
    async seedVouches() {
        return this.vouchSeederService.seedVouches();
    }
    async clearVouches() {
        return this.vouchSeederService.clearVouches();
    }
    async getSeedStats() {
        return this.vouchSeederService.getVouchStats();
    }
    async create(createVouchDto) {
        return this.vouchService.create(createVouchDto);
    }
    async findAll(filterDto) {
        return this.vouchService.findAll(filterDto);
    }
    async getStats() {
        return this.vouchService.getStats();
    }
    async findOne(id) {
        return this.vouchService.findOne(id);
    }
    async update(id, updateVouchDto) {
        return this.vouchService.update(id, updateVouchDto);
    }
    async approveVouch(id) {
        return this.vouchService.approveVouch(id);
    }
    async rejectVouch(id) {
        return this.vouchService.rejectVouch(id);
    }
    async toggleVerification(id) {
        return this.vouchService.toggleVerification(id);
    }
    async remove(id) {
        return this.vouchService.remove(id);
    }
};
exports.VouchController = VouchController;
__decorate([
    (0, common_1.Post)('seed'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Seed vouches with sample data (Admin only)' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Vouches seeded successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Admin access required' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VouchController.prototype, "seedVouches", null);
__decorate([
    (0, common_1.Delete)('seed/clear'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Clear all vouches (Admin only)' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'All vouches cleared successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Admin access required' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VouchController.prototype, "clearVouches", null);
__decorate([
    (0, common_1.Get)('seed/stats'),
    (0, swagger_1.ApiOperation)({ summary: 'Get vouch seeding statistics' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Statistics retrieved successfully' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VouchController.prototype, "getSeedStats", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new vouch (Admin only)' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Vouch created successfully', type: vouch_response_dto_1.VouchResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Admin access required' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_vouch_dto_1.CreateVouchDto]),
    __metadata("design:returntype", Promise)
], VouchController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all vouches with pagination and filtering' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Vouches retrieved successfully' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number, description: 'Page number' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number, description: 'Items per page' }),
    (0, swagger_1.ApiQuery)({ name: 'username', required: false, type: String, description: 'Filter by username' }),
    (0, swagger_1.ApiQuery)({ name: 'rating', required: false, type: Number, description: 'Filter by rating' }),
    (0, swagger_1.ApiQuery)({ name: 'isVerified', required: false, type: Boolean, description: 'Filter by verification status' }),
    (0, swagger_1.ApiQuery)({ name: 'status', required: false, enum: ['PENDING', 'APPROVED', 'REJECTED'], description: 'Filter by status' }),
    (0, swagger_1.ApiQuery)({ name: 'search', required: false, type: String, description: 'Search in username and review text' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [vouch_filter_dto_1.VouchFilterDto]),
    __metadata("design:returntype", Promise)
], VouchController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('stats'),
    (0, swagger_1.ApiOperation)({ summary: 'Get vouch statistics' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Statistics retrieved successfully' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VouchController.prototype, "getStats", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a specific vouch by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Vouch retrieved successfully', type: vouch_response_dto_1.VouchResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Vouch not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VouchController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Update a vouch (Admin only)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Vouch updated successfully', type: vouch_response_dto_1.VouchResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Admin access required' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Vouch not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_vouch_dto_1.UpdateVouchDto]),
    __metadata("design:returntype", Promise)
], VouchController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id/approve'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Approve a vouch (Admin only)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Vouch approved successfully', type: vouch_response_dto_1.VouchResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Admin access required' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Vouch not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VouchController.prototype, "approveVouch", null);
__decorate([
    (0, common_1.Patch)(':id/reject'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Reject a vouch (Admin only)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Vouch rejected successfully', type: vouch_response_dto_1.VouchResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Admin access required' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Vouch not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VouchController.prototype, "rejectVouch", null);
__decorate([
    (0, common_1.Patch)(':id/toggle-verification'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Toggle verification status of a vouch (Admin only)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Verification status toggled successfully', type: vouch_response_dto_1.VouchResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Admin access required' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Vouch not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VouchController.prototype, "toggleVerification", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a vouch (Admin only)' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Vouch deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Admin access required' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Vouch not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VouchController.prototype, "remove", null);
exports.VouchController = VouchController = __decorate([
    (0, swagger_1.ApiTags)('vouches'),
    (0, common_1.Controller)('vouches'),
    __metadata("design:paramtypes", [vouch_service_1.VouchService,
        vouch_seeder_service_1.VouchSeederService])
], VouchController);
//# sourceMappingURL=vouch.controller.js.map