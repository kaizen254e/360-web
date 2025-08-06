import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserFilterDto } from './dto/user-filter.dto';
import { UserResponseDto } from './dto/user-response.dto';
import { RequestPasswordResetDto, ResetPasswordDto, ChangePasswordDto } from './dto/password-reset.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    requestPasswordReset(requestResetDto: RequestPasswordResetDto): Promise<{
        message: string;
    }>;
    resetPassword(resetPasswordDto: ResetPasswordDto): Promise<{
        message: string;
    }>;
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
    getProfile(req: any): Promise<UserResponseDto>;
    updateProfile(req: any, updateUserDto: UpdateUserDto): Promise<UserResponseDto>;
    changePassword(req: any, changePasswordDto: ChangePasswordDto): Promise<{
        message: string;
    }>;
}
