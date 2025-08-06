export declare class RequestPasswordResetDto {
    email: string;
}
export declare class ResetPasswordDto {
    token: string;
    newPassword: string;
    confirmPassword: string;
}
export declare class ChangePasswordDto {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}
