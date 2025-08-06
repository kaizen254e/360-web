export declare class CreateOrderDto {
    paymentMethod: string;
    shippingAddress?: {
        firstName: string;
        lastName: string;
        address: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
        phone: string;
    };
}
