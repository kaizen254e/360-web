import { UserRole } from './create-user.dto';
export declare class UpdateUserDto {
    username?: string;
    email?: string;
    role?: UserRole;
    firstName?: string;
    lastName?: string;
    phone?: string;
    country?: string;
    isActive?: boolean;
}
