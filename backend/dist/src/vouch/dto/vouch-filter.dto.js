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
exports.VouchFilterDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const client_1 = require("@prisma/client");
class VouchFilterDto {
    page = 1;
    limit = 10;
    username;
    rating;
    isVerified;
    status;
    search;
}
exports.VouchFilterDto = VouchFilterDto;
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Page number', default: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value, 10)),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], VouchFilterDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Items per page', default: 10, maximum: 100 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value, 10)),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], VouchFilterDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Filter by username' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VouchFilterDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Filter by rating' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value, 10)),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(5),
    __metadata("design:type", Number)
], VouchFilterDto.prototype, "rating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Filter by verification status' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => value === 'true'),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], VouchFilterDto.prototype, "isVerified", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Filter by status', enum: client_1.VouchStatus }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(client_1.VouchStatus),
    __metadata("design:type", String)
], VouchFilterDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Search in review text' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VouchFilterDto.prototype, "search", void 0);
//# sourceMappingURL=vouch-filter.dto.js.map