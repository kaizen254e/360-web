import { PrismaService } from '../prisma/prisma.service';
import { CreateVouchDto } from './dto/create-vouch.dto';
import { UpdateVouchDto } from './dto/update-vouch.dto';
import { VouchFilterDto } from './dto/vouch-filter.dto';
import { VouchResponseDto } from './dto/vouch-response.dto';
export declare class VouchService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createVouchDto: CreateVouchDto): Promise<VouchResponseDto>;
    findAll(filterDto: VouchFilterDto): Promise<{
        vouches: VouchResponseDto[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
            hasNext: boolean;
            hasPrev: boolean;
        };
    }>;
    findOne(id: string): Promise<VouchResponseDto>;
    update(id: string, updateVouchDto: UpdateVouchDto): Promise<VouchResponseDto>;
    remove(id: string): Promise<void>;
    getStats(): Promise<{
        totalVouches: number;
        approvedVouches: number;
        verifiedVouches: number;
        averageRating: number;
        ratingDistribution: Record<number, number>;
    }>;
    approveVouch(id: string): Promise<VouchResponseDto>;
    rejectVouch(id: string): Promise<VouchResponseDto>;
    toggleVerification(id: string): Promise<VouchResponseDto>;
    private mapToVouchResponse;
    private calculateTimeAgo;
}
