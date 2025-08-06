declare const _default: (() => {
    port: number;
    nodeEnv: string;
    apiPrefix: string;
    corsOrigin: string;
    jwtSecret: string | undefined;
    jwtExpiresIn: string;
    refreshTokenExpiresIn: string;
    bcryptRounds: number;
    uploadMaxSize: number;
    uploadPath: string;
    cloudinary: {
        cloudName: string | undefined;
        apiKey: string | undefined;
        apiSecret: string | undefined;
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    port: number;
    nodeEnv: string;
    apiPrefix: string;
    corsOrigin: string;
    jwtSecret: string | undefined;
    jwtExpiresIn: string;
    refreshTokenExpiresIn: string;
    bcryptRounds: number;
    uploadMaxSize: number;
    uploadPath: string;
    cloudinary: {
        cloudName: string | undefined;
        apiKey: string | undefined;
        apiSecret: string | undefined;
    };
}>;
export default _default;
