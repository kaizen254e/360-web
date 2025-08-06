import { UserRole } from './create-user.dto';
export declare class UserResponseDto {
    id: string;
    username: string;
    email: string;
    role: UserRole;
    isActive: boolean;
    firstName?: string;
    lastName?: string;
    phone?: string;
    country?: string;
    createdAt: Date;
    updatedAt: Date;
    lastLogin?: Date;
}
