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
exports.SendTemplateEmailDto = exports.SendEmailDto = exports.EmailType = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var EmailType;
(function (EmailType) {
    EmailType["WELCOME"] = "welcome";
    EmailType["PASSWORD_RESET"] = "password_reset";
    EmailType["ORDER_CONFIRMATION"] = "order_confirmation";
    EmailType["ORDER_STATUS_UPDATE"] = "order_status_update";
    EmailType["ADMIN_NOTIFICATION"] = "admin_notification";
})(EmailType || (exports.EmailType = EmailType = {}));
class SendEmailDto {
    to;
    subject;
    type;
    data;
}
exports.SendEmailDto = SendEmailDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Recipient email address' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], SendEmailDto.prototype, "to", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email subject' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SendEmailDto.prototype, "subject", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email type for template selection' }),
    (0, class_validator_1.IsEnum)(EmailType),
    __metadata("design:type", String)
], SendEmailDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email template data' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], SendEmailDto.prototype, "data", void 0);
class SendTemplateEmailDto {
    to;
    subject;
    template;
    data;
}
exports.SendTemplateEmailDto = SendTemplateEmailDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Recipient email address' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], SendTemplateEmailDto.prototype, "to", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email subject' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SendTemplateEmailDto.prototype, "subject", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Template name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SendTemplateEmailDto.prototype, "template", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Template data' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], SendTemplateEmailDto.prototype, "data", void 0);
//# sourceMappingURL=send-email.dto.js.map