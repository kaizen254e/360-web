import { VouchStatus } from '@prisma/client';
export declare class VouchFilterDto {
    page?: number;
    limit?: number;
    username?: string;
    rating?: number;
    isVerified?: boolean;
    status?: VouchStatus;
    search?: string;
}
