import { VouchStatus } from '@prisma/client';
export declare class CreateVouchDto {
    username: string;
    avatarSeed: string;
    rating: number;
    reviewText: string;
    reviewImage?: string;
    isVerified: boolean;
    status?: VouchStatus;
}
