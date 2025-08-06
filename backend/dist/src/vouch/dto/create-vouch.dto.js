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
exports.CreateVouchDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const client_1 = require("@prisma/client");
class CreateVouchDto {
    username;
    avatarSeed;
    rating;
    reviewText;
    reviewImage;
    isVerified;
    status;
}
exports.CreateVouchDto = CreateVouchDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Username of the person giving the vouch' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVouchDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Seed for avatar generation (usually same as username)',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVouchDto.prototype, "avatarSeed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Rating from 1 to 5 stars',
        minimum: 1,
        maximum: 5,
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(5),
    __metadata("design:type", Number)
], CreateVouchDto.prototype, "rating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Review text content' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVouchDto.prototype, "reviewText", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Review image path (optional)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVouchDto.prototype, "reviewImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether this is a verified purchase' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateVouchDto.prototype, "isVerified", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status of the vouch', enum: client_1.VouchStatus }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(client_1.VouchStatus),
    __metadata("design:type", String)
], CreateVouchDto.prototype, "status", void 0);
//# sourceMappingURL=create-vouch.dto.js.map