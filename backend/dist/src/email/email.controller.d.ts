import { EmailService } from './email.service';
export declare class EmailController {
    private readonly emailService;
    constructor(emailService: EmailService);
    sendWelcomeEmail(body: {
        to: string;
        username: string;
    }): Promise<{
        message: string;
    }>;
    sendPasswordResetEmail(body: {
        to: string;
        resetToken: string;
    }): Promise<{
        message: string;
    }>;
    sendOrderConfirmationEmail(body: {
        to: string;
        orderData: any;
    }): Promise<{
        message: string;
    }>;
    sendAdminNotificationEmail(body: {
        orderData: any;
    }): Promise<{
        message: string;
    }>;
}
