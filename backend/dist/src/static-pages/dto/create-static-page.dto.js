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
exports.CreateStaticPageDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const client_1 = require("@prisma/client");
class CreateStaticPageDto {
    title;
    slug;
    content;
    metaTitle;
    metaDescription;
    status = client_1.StaticPageStatus.PUBLISHED;
}
exports.CreateStaticPageDto = CreateStaticPageDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Page title', example: 'Terms of Service' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateStaticPageDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Page slug (URL-friendly)', example: 'terms-of-service' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateStaticPageDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Page content (HTML)', example: '<h1>Terms of Service</h1><p>Welcome to our service...</p>' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateStaticPageDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Meta title for SEO', example: 'Terms of Service - 360LogzShop', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStaticPageDto.prototype, "metaTitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Meta description for SEO', example: 'Read our terms of service and conditions.', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStaticPageDto.prototype, "metaDescription", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Page status', enum: client_1.StaticPageStatus, example: client_1.StaticPageStatus.PUBLISHED, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(client_1.StaticPageStatus),
    __metadata("design:type", String)
], CreateStaticPageDto.prototype, "status", void 0);
//# sourceMappingURL=create-static-page.dto.js.map