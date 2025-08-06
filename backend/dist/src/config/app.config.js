"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('app', () => ({
    port: parseInt(process.env.PORT || '3000', 10),
    nodeEnv: process.env.NODE_ENV || 'development',
    apiPrefix: process.env.API_PREFIX || 'api',
    corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:4200',
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
    refreshTokenExpiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN || '30d',
    bcryptRounds: parseInt(process.env.BCRYPT_ROUNDS || '12', 10),
    uploadMaxSize: parseInt(process.env.UPLOAD_MAX_SIZE || '10485760', 10),
    uploadPath: process.env.UPLOAD_PATH || 'uploads',
    cloudinary: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
    },
}));
//# sourceMappingURL=app.config.js.map