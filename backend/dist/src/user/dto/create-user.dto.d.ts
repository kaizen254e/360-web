export declare enum UserRole {
    USER = "USER",
    ADMIN = "ADMIN",
    SUPER_ADMIN = "SUPER_ADMIN"
}
export declare class CreateUserDto {
    username: string;
    email: string;
    password: string;
    role?: UserRole;
    firstName?: string;
    lastName?: string;
    phone?: string;
    country?: string;
}
