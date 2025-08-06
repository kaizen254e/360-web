export declare enum EmailType {
    WELCOME = "welcome",
    PASSWORD_RESET = "password_reset",
    ORDER_CONFIRMATION = "order_confirmation",
    ORDER_STATUS_UPDATE = "order_status_update",
    ADMIN_NOTIFICATION = "admin_notification"
}
export declare class SendEmailDto {
    to: string;
    subject: string;
    type: EmailType;
    data?: Record<string, any>;
}
export declare class SendTemplateEmailDto {
    to: string;
    subject: string;
    template: string;
    data?: Record<string, any>;
}
