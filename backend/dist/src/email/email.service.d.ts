import { ConfigService } from '@nestjs/config';
export declare class EmailService {
    private configService;
    private transporter;
    constructor(configService: ConfigService);
    sendWelcomeEmail(to: string, username: string): Promise<void>;
    sendPasswordResetEmail(to: string, resetToken: string): Promise<void>;
    sendOrderConfirmationEmail(to: string, orderData: any): Promise<void>;
    sendAdminNotificationEmail(orderData: any): Promise<void>;
}
