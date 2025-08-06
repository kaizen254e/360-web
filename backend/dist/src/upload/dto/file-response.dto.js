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
exports.FileResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class FileResponseDto {
    publicId;
    url;
    secureUrl;
    format;
    bytes;
    width;
    height;
    duration;
    createdAt;
}
exports.FileResponseDto = FileResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cloudinary public ID' }),
    __metadata("design:type", String)
], FileResponseDto.prototype, "publicId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'File URL' }),
    __metadata("design:type", String)
], FileResponseDto.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'File secure URL' }),
    __metadata("design:type", String)
], FileResponseDto.prototype, "secureUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'File format' }),
    __metadata("design:type", String)
], FileResponseDto.prototype, "format", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'File size in bytes' }),
    __metadata("design:type", Number)
], FileResponseDto.prototype, "bytes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Image width (for images)' }),
    __metadata("design:type", Number)
], FileResponseDto.prototype, "width", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Image height (for images)' }),
    __metadata("design:type", Number)
], FileResponseDto.prototype, "height", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Duration in seconds (for videos)' }),
    __metadata("design:type", Number)
], FileResponseDto.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Upload timestamp' }),
    __metadata("design:type", Date)
], FileResponseDto.prototype, "createdAt", void 0);
//# sourceMappingURL=file-response.dto.js.map