"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
class ProductResponseDto {
    id;
    name;
    description;
    price;
    categoryId;
    productType;
    stockQuantity;
    isActive;
    isFeatured;
    images;
    thumbnail;
    sku;
    barcode;
    bankName;
    balance;
    country;
    verification;
    cardType;
    bank;
    cvv;
    platform;
    linkableBalance;
    amount;
    speed;
    transferPlatform;
    accountType;
    lastActivity;
    transferType;
    fees;
    toolType;
    features;
    compatibility;
    duration;
    format;
    quality;
    walletAddress;
    transactionCount;
    riskLevel;
    checkAmount;
    giftCardValue;
    giftCardCode;
    personalInfo;
    financialInfo;
    contactInfo;
    securityFeatures;
    shakeType;
    shakeAmount;
    createdAt;
    updatedAt;
    category;
}
exports.ProductResponseDto = ProductResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product ID', example: 'clx1234567890abcdef' }),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product name', example: 'Premium Bank Log' }),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product description',
        example: 'High-quality bank log with full access',
    }),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product price', example: 299.99 }),
    __metadata("design:type", Number)
], ProductResponseDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Category ID', example: 'clx1234567890abcdef' }),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "categoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product type',
        enum: client_1.ProductType,
        example: client_1.ProductType.BANK_LOG,
    }),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "productType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Stock quantity', example: 10 }),
    __metadata("design:type", Number)
], ProductResponseDto.prototype, "stockQuantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Whether the product is active',
        example: true,
    }),
    __metadata("design:type", Boolean)
], ProductResponseDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Whether the product is featured',
        example: false,
    }),
    __metadata("design:type", Boolean)
], ProductResponseDto.prototype, "isFeatured", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product images',
        type: [String],
        example: [
            'https://example.com/image1.jpg',
            'https://example.com/image2.jpg',
        ],
    }),
    __metadata("design:type", Array)
], ProductResponseDto.prototype, "images", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product thumbnail image',
        example: 'https://example.com/thumbnail.jpg',
        required: false,
    }),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "thumbnail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product SKU',
        example: 'PROD-001',
        required: false,
    }),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "sku", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product barcode',
        example: '1234567890123',
        required: false,
    }),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "barcode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Bank name',
        example: 'Chase Bank',
        required: false,
    }),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "bankName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Account balance',
        example: 5000.0,
        required: false,
    }),
    __metadata("design:type", Number)
], ProductResponseDto.prototype, "balance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Country', example: 'USA', required: false }),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Verification status',
        example: 'Verified',
        required: false,
    }),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "verification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Card type', example: 'Visa', required: false }),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "cardType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Bank name for card',
        example: 'Bank of America',
        required: false,
    }),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "bank", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'CVV included', example: true, required: false }),
    __metadata("design:type", Boolean)
], ProductResponseDto.prototype, "cvv", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Platform name',
        example: 'PayPal',
        required: false,
    }),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "platform", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Linkable balance',
        example: 1000.0,
        required: false,
    }),
    __metadata("design:type", Number)
], ProductResponseDto.prototype, "linkableBalance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Transfer amount',
        example: 500.0,
        required: false,
    }),
    __metadata("design:type", Number)
], ProductResponseDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Transfer speed',
        example: 'Instant',
        required: false,
    }),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "speed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Transfer platform',
        example: 'CashApp',
        required: false,
    }),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "transferPlatform", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Account type',
        example: 'Savings',
        required: false,
    }),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "accountType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Last activity date',
        example: '2024-01-01',
        required: false,
    }),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "lastActivity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Transfer type',
        example: 'P2P',
        required: false,
    }),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "transferType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Transfer fees', example: 5.0, required: false }),
    __metadata("design:type", Number)
], ProductResponseDto.prototype, "fees", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tool type',
        example: 'Carding Tool',
        required: false,
    }),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "toolType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tool features',
        example: 'Auto-fill, BIN Check',
        required: false,
    }),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "features", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Compatibility',
        example: 'Windows, Mac',
        required: false,
    }),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "compatibility", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Video duration in seconds',
        example: 300,
        required: false,
    }),
    __metadata("design:type", Number)
], ProductResponseDto.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Video format', example: 'MP4', required: false }),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "format", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Video quality', example: 'HD', required: false }),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "quality", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Wallet address',
        example: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
        required: false,
    }),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "walletAddress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Transaction count',
        example: 50,
        required: false,
    }),
    __metadata("design:type", Number)
], ProductResponseDto.prototype, "transactionCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Risk level', example: 'High', required: false }),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "riskLevel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Check amount',
        example: 2500.0,
        required: false,
    }),
    __metadata("design:type", Number)
], ProductResponseDto.prototype, "checkAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Gift card value',
        example: 100.0,
        required: false,
    }),
    __metadata("design:type", Number)
], ProductResponseDto.prototype, "giftCardValue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Gift card code',
        example: 'GC123456789',
        required: false,
    }),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "giftCardCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Personal info included',
        example: true,
        required: false,
    }),
    __metadata("design:type", Boolean)
], ProductResponseDto.prototype, "personalInfo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Financial info included',
        example: true,
        required: false,
    }),
    __metadata("design:type", Boolean)
], ProductResponseDto.prototype, "financialInfo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Contact info included',
        example: true,
        required: false,
    }),
    __metadata("design:type", Boolean)
], ProductResponseDto.prototype, "contactInfo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Security features',
        example: '2FA, VPN',
        required: false,
    }),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "securityFeatures", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Shake type',
        example: 'Money Transfer',
        required: false,
    }),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "shakeType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Shake amount',
        example: 1000.0,
        required: false,
    }),
    __metadata("design:type", Number)
], ProductResponseDto.prototype, "shakeAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Creation date',
        example: '2024-01-01T00:00:00.000Z',
    }),
    __metadata("design:type", Date)
], ProductResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Last update date',
        example: '2024-01-01T00:00:00.000Z',
    }),
    __metadata("design:type", Date)
], ProductResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Category information', required: false }),
    __metadata("design:type", Object)
], ProductResponseDto.prototype, "category", void 0);
//# sourceMappingURL=product-response.dto.js.map