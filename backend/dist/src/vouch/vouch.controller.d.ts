import { VouchService } from './vouch.service';
import { VouchSeederService } from './vouch-seeder.service';
import { CreateVouchDto } from './dto/create-vouch.dto';
import { UpdateVouchDto } from './dto/update-vouch.dto';
import { VouchFilterDto } from './dto/vouch-filter.dto';
import { VouchResponseDto } from './dto/vouch-response.dto';
export declare class VouchController {
    private readonly vouchService;
    private readonly vouchSeederService;
    constructor(vouchService: VouchService, vouchSeederService: VouchSeederService);
    seedVouches(): Promise<{
        message: string;
        results: {
            action: string;
            vouch: string;
        }[];
        total: number;
    }>;
    clearVouches(): Promise<{
        message: string;
        deletedCount: number;
    }>;
    getSeedStats(): Promise<{
        totalVouches: number;
        approvedVouches: number;
        verifiedVouches: number;
        averageRating: number;
    }>;
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
    getStats(): Promise<{
        totalVouches: number;
        approvedVouches: number;
        verifiedVouches: number;
        averageRating: number;
        ratingDistribution: Record<number, number>;
    }>;
    findOne(id: string): Promise<VouchResponseDto>;
    update(id: string, updateVouchDto: UpdateVouchDto): Promise<VouchResponseDto>;
    approveVouch(id: string): Promise<VouchResponseDto>;
    rejectVouch(id: string): Promise<VouchResponseDto>;
    toggleVerification(id: string): Promise<VouchResponseDto>;
    remove(id: string): Promise<void>;
}
