import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserFilterDto } from './dto/user-filter.dto';
import { UserResponseDto } from './dto/user-response.dto';
import { RequestPasswordResetDto, ResetPasswordDto, ChangePasswordDto } from './dto/password-reset.dto';
import { ConfigService } from '@nestjs/config';
export declare class UserService {
    private prisma;
    private configService;
    constructor(prisma: PrismaService, configService: ConfigService);
    createUser(createUserDto: CreateUserDto): Promise<UserResponseDto>;
    getUsers(filterDto: UserFilterDto): Promise<{
        users: UserResponseDto[];
        total: number;
        page: number;
        limit: number;
    }>;
    getUserById(id: string): Promise<UserResponseDto>;
    updateUser(id: string, updateUserDto: UpdateUserDto): Promise<UserResponseDto>;
    deleteUser(id: string): Promise<{
        message: string;
    }>;
    changePassword(userId: string, changePasswordDto: ChangePasswordDto): Promise<{
        message: string;
    }>;
    requestPasswordReset(requestResetDto: RequestPasswordResetDto): Promise<{
        message: string;
    }>;
    resetPassword(resetPasswordDto: ResetPasswordDto): Promise<{
        message: string;
    }>;
    private mapToUserResponse;
    private generateResetToken;
}
