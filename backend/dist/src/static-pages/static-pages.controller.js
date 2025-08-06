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
exports.StaticPagesController = void 0;
const common_1 = require("@nestjs/common");
const static_pages_service_1 = require("./static-pages.service");
const create_static_page_dto_1 = require("./dto/create-static-page.dto");
const update_static_page_dto_1 = require("./dto/update-static-page.dto");
const static_page_response_dto_1 = require("./dto/static-page-response.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const admin_guard_1 = require("../auth/guards/admin.guard");
let StaticPagesController = class StaticPagesController {
    staticPagesService;
    constructor(staticPagesService) {
        this.staticPagesService = staticPagesService;
    }
    async createStaticPage(createStaticPageDto) {
        return this.staticPagesService.createStaticPage(createStaticPageDto);
    }
    async getAllStaticPages() {
        return this.staticPagesService.getAllStaticPages();
    }
    async getStaticPageById(id) {
        return this.staticPagesService.getStaticPageById(id);
    }
    async getStaticPageBySlug(slug) {
        return this.staticPagesService.getStaticPageBySlug(slug);
    }
    async updateStaticPage(id, updateStaticPageDto) {
        return this.staticPagesService.updateStaticPage(id, updateStaticPageDto);
    }
    async deleteStaticPage(id) {
        return this.staticPagesService.deleteStaticPage(id);
    }
};
exports.StaticPagesController = StaticPagesController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new static page (Admin only)' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Static page created successfully',
        type: static_page_response_dto_1.StaticPageResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Page slug already exists' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_static_page_dto_1.CreateStaticPageDto]),
    __metadata("design:returntype", Promise)
], StaticPagesController.prototype, "createStaticPage", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all published static pages' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Static pages retrieved successfully',
        type: [static_page_response_dto_1.StaticPageResponseDto],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StaticPagesController.prototype, "getAllStaticPages", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get static page by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Static page retrieved successfully',
        type: static_page_response_dto_1.StaticPageResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Static page not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StaticPagesController.prototype, "getStaticPageById", null);
__decorate([
    (0, common_1.Get)('slug/:slug'),
    (0, swagger_1.ApiOperation)({ summary: 'Get static page by slug' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Static page retrieved successfully',
        type: static_page_response_dto_1.StaticPageResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Static page not found' }),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StaticPagesController.prototype, "getStaticPageBySlug", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Update static page (Admin only)' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Static page updated successfully',
        type: static_page_response_dto_1.StaticPageResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Static page not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_static_page_dto_1.UpdateStaticPageDto]),
    __metadata("design:returntype", Promise)
], StaticPagesController.prototype, "updateStaticPage", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Delete static page (Admin only)' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Static page deleted successfully',
        schema: {
            type: 'object',
            properties: {
                message: { type: 'string' },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Static page not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StaticPagesController.prototype, "deleteStaticPage", null);
exports.StaticPagesController = StaticPagesController = __decorate([
    (0, swagger_1.ApiTags)('Static Pages'),
    (0, common_1.Controller)('pages'),
    __metadata("design:paramtypes", [static_pages_service_1.StaticPagesService])
], StaticPagesController);
//# sourceMappingURL=static-pages.controller.js.map