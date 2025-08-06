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
exports.StaticPageResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
class StaticPageResponseDto {
    id;
    title;
    slug;
    content;
    metaTitle;
    metaDescription;
    status;
    createdAt;
    updatedAt;
}
exports.StaticPageResponseDto = StaticPageResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Page ID', example: 'clx1234567890abcdef' }),
    __metadata("design:type", String)
], StaticPageResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Page title', example: 'Terms of Service' }),
    __metadata("design:type", String)
], StaticPageResponseDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Page slug', example: 'terms-of-service' }),
    __metadata("design:type", String)
], StaticPageResponseDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Page content', example: '<h1>Terms of Service</h1><p>Welcome to our service...</p>' }),
    __metadata("design:type", String)
], StaticPageResponseDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Meta title', example: 'Terms of Service - 360LogzShop', required: false }),
    __metadata("design:type", String)
], StaticPageResponseDto.prototype, "metaTitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Meta description', example: 'Read our terms of service and conditions.', required: false }),
    __metadata("design:type", String)
], StaticPageResponseDto.prototype, "metaDescription", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Page status', enum: client_1.StaticPageStatus, example: client_1.StaticPageStatus.PUBLISHED }),
    __metadata("design:type", String)
], StaticPageResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation date', example: '2024-01-01T00:00:00.000Z' }),
    __metadata("design:type", Date)
], StaticPageResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update date', example: '2024-01-01T00:00:00.000Z' }),
    __metadata("design:type", Date)
], StaticPageResponseDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=static-page-response.dto.js.map