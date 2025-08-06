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
exports.VouchService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let VouchService = class VouchService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createVouchDto) {
        const vouch = await this.prisma.vouch.create({
            data: createVouchDto,
        });
        return this.mapToVouchResponse(vouch);
    }
    async findAll(filterDto) {
        const { page = 1, limit = 10, username, rating, isVerified, status, search, } = filterDto;
        const skip = (page - 1) * limit;
        const where = {};
        if (username) {
            where.username = { contains: username, mode: 'insensitive' };
        }
        if (rating) {
            where.rating = rating;
        }
        if (isVerified !== undefined) {
            where.isVerified = isVerified;
        }
        if (status) {
            where.status = status;
        }
        if (search) {
            where.OR = [
                { username: { contains: search, mode: 'insensitive' } },
                { reviewText: { contains: search, mode: 'insensitive' } },
            ];
        }
        const [vouches, total] = await Promise.all([
            this.prisma.vouch.findMany({
                where,
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
            }),
            this.prisma.vouch.count({ where }),
        ]);
        const totalPages = Math.ceil(total / limit);
        return {
            vouches: vouches.map((vouch) => this.mapToVouchResponse(vouch)),
            pagination: {
                page,
                limit,
                total,
                totalPages,
                hasNext: page < totalPages,
                hasPrev: page > 1,
            },
        };
    }
    async findOne(id) {
        const vouch = await this.prisma.vouch.findUnique({
            where: { id },
        });
        if (!vouch) {
            throw new common_1.NotFoundException(`Vouch with ID ${id} not found`);
        }
        return this.mapToVouchResponse(vouch);
    }
    async update(id, updateVouchDto) {
        const existingVouch = await this.prisma.vouch.findUnique({
            where: { id },
        });
        if (!existingVouch) {
            throw new common_1.NotFoundException(`Vouch with ID ${id} not found`);
        }
        const vouch = await this.prisma.vouch.update({
            where: { id },
            data: updateVouchDto,
        });
        return this.mapToVouchResponse(vouch);
    }
    async remove(id) {
        const existingVouch = await this.prisma.vouch.findUnique({
            where: { id },
        });
        if (!existingVouch) {
            throw new common_1.NotFoundException(`Vouch with ID ${id} not found`);
        }
        await this.prisma.vouch.delete({
            where: { id },
        });
    }
    async getStats() {
        const [totalVouches, approvedVouches, verifiedVouches, averageRating, ratingDistribution,] = await Promise.all([
            this.prisma.vouch.count(),
            this.prisma.vouch.count({ where: { status: client_1.VouchStatus.APPROVED } }),
            this.prisma.vouch.count({ where: { isVerified: true } }),
            this.prisma.vouch.aggregate({
                _avg: { rating: true },
            }),
            this.prisma.vouch.groupBy({
                by: ['rating'],
                _count: { rating: true },
            }),
        ]);
        return {
            totalVouches,
            approvedVouches,
            verifiedVouches,
            averageRating: averageRating._avg.rating || 0,
            ratingDistribution: ratingDistribution.reduce((acc, item) => {
                acc[item.rating] = item._count.rating;
                return acc;
            }, {}),
        };
    }
    async approveVouch(id) {
        return this.update(id, { status: client_1.VouchStatus.APPROVED });
    }
    async rejectVouch(id) {
        return this.update(id, { status: client_1.VouchStatus.REJECTED });
    }
    async toggleVerification(id) {
        const vouch = await this.prisma.vouch.findUnique({
            where: { id },
        });
        if (!vouch) {
            throw new common_1.NotFoundException(`Vouch with ID ${id} not found`);
        }
        return this.update(id, { isVerified: !vouch.isVerified });
    }
    mapToVouchResponse(vouch) {
        return {
            id: vouch.id,
            username: vouch.username,
            avatarSeed: vouch.avatarSeed,
            avatarUrl: `https://api.dicebear.com/7.x/thumbs/svg?seed=${vouch.avatarSeed}.svg`,
            rating: vouch.rating,
            reviewText: vouch.reviewText,
            reviewImage: vouch.reviewImage || undefined,
            isVerified: vouch.isVerified,
            status: vouch.status,
            createdAt: vouch.createdAt,
            updatedAt: vouch.updatedAt,
            timeAgo: this.calculateTimeAgo(vouch.createdAt),
        };
    }
    calculateTimeAgo(date) {
        const now = new Date();
        const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
        if (diffInSeconds < 60) {
            return 'just now';
        }
        const diffInMinutes = Math.floor(diffInSeconds / 60);
        if (diffInMinutes < 60) {
            return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
        }
        const diffInHours = Math.floor(diffInMinutes / 60);
        if (diffInHours < 24) {
            return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
        }
        const diffInDays = Math.floor(diffInHours / 24);
        if (diffInDays < 30) {
            return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
        }
        const diffInMonths = Math.floor(diffInDays / 30);
        if (diffInMonths < 12) {
            return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
        }
        const diffInYears = Math.floor(diffInMonths / 12);
        return `${diffInYears} year${diffInYears > 1 ? 's' : ''} ago`;
    }
};
exports.VouchService = VouchService;
exports.VouchService = VouchService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VouchService);
//# sourceMappingURL=vouch.service.js.map