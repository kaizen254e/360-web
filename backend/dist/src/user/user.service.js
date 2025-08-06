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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcryptjs");
const config_1 = require("@nestjs/config");
let UserService = class UserService {
    prisma;
    configService;
    constructor(prisma, configService) {
        this.prisma = prisma;
        this.configService = configService;
    }
    async createUser(createUserDto) {
        const existingUser = await this.prisma.user.findFirst({
            where: {
                OR: [
                    { username: createUserDto.username },
                    { email: createUserDto.email },
                ],
            },
        });
        if (existingUser) {
            throw new common_1.ConflictException('Username or email already exists');
        }
        const bcryptRounds = this.configService.get('app.bcryptRounds') || 12;
        const hashedPassword = await bcrypt.hash(createUserDto.password, bcryptRounds);
        const user = await this.prisma.user.create({
            data: {
                username: createUserDto.username,
                email: createUserDto.email,
                password: hashedPassword,
                role: createUserDto.role || 'USER',
                firstName: createUserDto.firstName,
                lastName: createUserDto.lastName,
                phone: createUserDto.phone,
                country: createUserDto.country,
            },
        });
        return this.mapToUserResponse(user);
    }
    async getUsers(filterDto) {
        const { search, role, isActive, page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'desc', } = filterDto;
        const where = {};
        if (search) {
            where.OR = [
                { username: { contains: search, mode: 'insensitive' } },
                { email: { contains: search, mode: 'insensitive' } },
                { firstName: { contains: search, mode: 'insensitive' } },
                { lastName: { contains: search, mode: 'insensitive' } },
            ];
        }
        if (role) {
            where.role = role;
        }
        if (isActive !== undefined) {
            where.isActive = isActive;
        }
        const skip = (page - 1) * limit;
        const [users, total] = await Promise.all([
            this.prisma.user.findMany({
                where,
                skip,
                take: limit,
                orderBy: { [sortBy]: sortOrder },
            }),
            this.prisma.user.count({ where }),
        ]);
        return {
            users: users.map((user) => this.mapToUserResponse(user)),
            total,
            page,
            limit,
        };
    }
    async getUserById(id) {
        const user = await this.prisma.user.findUnique({
            where: { id },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return this.mapToUserResponse(user);
    }
    async updateUser(id, updateUserDto) {
        const existingUser = await this.prisma.user.findUnique({
            where: { id },
        });
        if (!existingUser) {
            throw new common_1.NotFoundException('User not found');
        }
        if (updateUserDto.username || updateUserDto.email) {
            const conflictUser = await this.prisma.user.findFirst({
                where: {
                    OR: [
                        ...(updateUserDto.username
                            ? [{ username: updateUserDto.username }]
                            : []),
                        ...(updateUserDto.email ? [{ email: updateUserDto.email }] : []),
                    ],
                    NOT: { id },
                },
            });
            if (conflictUser) {
                throw new common_1.ConflictException('Username or email already exists');
            }
        }
        const updatedUser = await this.prisma.user.update({
            where: { id },
            data: updateUserDto,
        });
        return this.mapToUserResponse(updatedUser);
    }
    async deleteUser(id) {
        const user = await this.prisma.user.findUnique({
            where: { id },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        if (user.role === 'SUPER_ADMIN') {
            throw new common_1.BadRequestException('Cannot delete super admin user');
        }
        await this.prisma.user.delete({
            where: { id },
        });
        return { message: 'User deleted successfully' };
    }
    async changePassword(userId, changePasswordDto) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const isCurrentPasswordValid = await bcrypt.compare(changePasswordDto.currentPassword, user.password);
        if (!isCurrentPasswordValid) {
            throw new common_1.BadRequestException('Current password is incorrect');
        }
        if (changePasswordDto.newPassword !== changePasswordDto.confirmPassword) {
            throw new common_1.BadRequestException('New passwords do not match');
        }
        const bcryptRounds = this.configService.get('app.bcryptRounds') || 12;
        const hashedNewPassword = await bcrypt.hash(changePasswordDto.newPassword, bcryptRounds);
        await this.prisma.user.update({
            where: { id: userId },
            data: { password: hashedNewPassword },
        });
        return { message: 'Password changed successfully' };
    }
    async requestPasswordReset(requestResetDto) {
        const user = await this.prisma.user.findUnique({
            where: { email: requestResetDto.email },
        });
        if (!user) {
            return {
                message: 'If the email exists, a password reset link has been sent',
            };
        }
        const resetToken = this.generateResetToken();
        return {
            message: 'If the email exists, a password reset link has been sent',
        };
    }
    async resetPassword(resetPasswordDto) {
        if (resetPasswordDto.newPassword !== resetPasswordDto.confirmPassword) {
            throw new common_1.BadRequestException('Passwords do not match');
        }
        return { message: 'Password reset successfully' };
    }
    mapToUserResponse(user) {
        return {
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role,
            isActive: user.isActive,
            firstName: user.firstName,
            lastName: user.lastName,
            phone: user.phone,
            country: user.country,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
            lastLogin: user.lastLogin,
        };
    }
    generateResetToken() {
        return (Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15));
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        config_1.ConfigService])
], UserService);
//# sourceMappingURL=user.service.js.map