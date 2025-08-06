import { VouchStatus } from '@prisma/client';
export declare class VouchResponseDto {
    id: string;
    username: string;
    avatarSeed: string;
    avatarUrl: string;
    rating: number;
    reviewText: string;
    reviewImage?: string;
    isVerified: boolean;
    status: VouchStatus;
    createdAt: Date;
    updatedAt: Date;
    timeAgo: string;
}
