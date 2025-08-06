import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
export declare class AuthService {
    private prisma;
    private jwtService;
    private configService;
    constructor(prisma: PrismaService, jwtService: JwtService, configService: ConfigService);
    validateUser(email: string, password: string): Promise<any>;
    login(loginDto: LoginDto): Promise<{
        user: {
            id: any;
            username: any;
            email: any;
            role: any;
            firstName: any;
            lastName: any;
        };
        access_token: string;
        refresh_token: string;
    }>;
    register(registerDto: RegisterDto): Promise<{
        id: string;
        username: string;
        email: string | null;
        role: import(".prisma/client").$Enums.UserRole;
        isActive: boolean;
        firstName: string | null;
        lastName: string | null;
        phone: string | null;
        country: string | null;
        createdAt: Date;
        updatedAt: Date;
        lastLogin: Date | null;
    }>;
    refreshToken(userId: string): Promise<{
        access_token: string;
    }>;
    logout(userId: string): Promise<{
        message: string;
    }>;
}
