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
exports.EmailController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const email_service_1 = require("./email.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const admin_guard_1 = require("../auth/guards/admin.guard");
let EmailController = class EmailController {
    emailService;
    constructor(emailService) {
        this.emailService = emailService;
    }
    async sendWelcomeEmail(body) {
        await this.emailService.sendWelcomeEmail(body.to, body.username);
        return { message: 'Welcome email sent successfully' };
    }
    async sendPasswordResetEmail(body) {
        await this.emailService.sendPasswordResetEmail(body.to, body.resetToken);
        return { message: 'Password reset email sent successfully' };
    }
    async sendOrderConfirmationEmail(body) {
        await this.emailService.sendOrderConfirmationEmail(body.to, body.orderData);
        return { message: 'Order confirmation email sent successfully' };
    }
    async sendAdminNotificationEmail(body) {
        await this.emailService.sendAdminNotificationEmail(body.orderData);
        return { message: 'Admin notification email sent successfully' };
    }
};
exports.EmailController = EmailController;
__decorate([
    (0, common_1.Post)('welcome'),
    (0, swagger_1.ApiOperation)({ summary: 'Send welcome email to new user' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Welcome email sent successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Admin access required' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmailController.prototype, "sendWelcomeEmail", null);
__decorate([
    (0, common_1.Post)('password-reset'),
    (0, swagger_1.ApiOperation)({ summary: 'Send password reset email' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Password reset email sent successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Admin access required' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmailController.prototype, "sendPasswordResetEmail", null);
__decorate([
    (0, common_1.Post)('order-confirmation'),
    (0, swagger_1.ApiOperation)({ summary: 'Send order confirmation email' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Order confirmation email sent successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Admin access required' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmailController.prototype, "sendOrderConfirmationEmail", null);
__decorate([
    (0, common_1.Post)('admin-notification'),
    (0, swagger_1.ApiOperation)({ summary: 'Send admin notification for new order' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Admin notification email sent successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Admin access required' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmailController.prototype, "sendAdminNotificationEmail", null);
exports.EmailController = EmailController = __decorate([
    (0, swagger_1.ApiTags)('email'),
    (0, common_1.Controller)('email'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [email_service_1.EmailService])
], EmailController);
//# sourceMappingURL=email.controller.js.map