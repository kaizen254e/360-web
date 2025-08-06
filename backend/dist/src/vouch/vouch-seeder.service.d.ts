import { PrismaService } from '../prisma/prisma.service';
export declare class VouchSeederService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    getVouchStats(): Promise<{
        totalVouches: number;
        approvedVouches: number;
        verifiedVouches: number;
        averageRating: number;
    }>;
}
