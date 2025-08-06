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
exports.CreateProductDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const client_1 = require("@prisma/client");
class CreateProductDto {
    name;
    description;
    price;
    categoryId;
    productType;
    stockQuantity = 0;
    images = [];
    isActive = true;
    isFeatured = false;
    sku;
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
}
exports.CreateProductDto = CreateProductDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product name', example: 'Premium Bank Log' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product description', example: 'High-quality bank log with full access' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product price', example: 299.99 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Category ID', example: 'clx1234567890abcdef' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "categoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product type', enum: client_1.ProductType, example: client_1.ProductType.BANK_LOG }),
    (0, class_validator_1.IsEnum)(client_1.ProductType),
    __metadata("design:type", String)
], CreateProductDto.prototype, "productType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Stock quantity', example: 10 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "stockQuantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product images URLs', type: [String], example: ['https://example.com/image1.jpg'] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsUrl)({}, { each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateProductDto.prototype, "images", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Whether the product is active',
        required: false,
        example: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateProductDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Whether the product is featured',
        required: false,
        example: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateProductDto.prototype, "isFeatured", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product SKU',
        required: false,
        example: 'PROD-001',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "sku", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Bank name', example: 'Chase Bank', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "bankName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Account balance', example: 5000.00, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "balance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Country', example: 'USA', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Verification status', example: 'Verified', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "verification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Card type', example: 'Visa', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "cardType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Bank name for card', example: 'Bank of America', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "bank", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'CVV included', example: true, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateProductDto.prototype, "cvv", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Platform name', example: 'PayPal', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "platform", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Linkable balance', example: 1000.00, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "linkableBalance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Transfer amount', example: 500.00, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Transfer speed', example: 'Instant', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "speed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Transfer platform', example: 'CashApp', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "transferPlatform", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Account type', example: 'Savings', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "accountType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last activity date', example: '2024-01-01', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "lastActivity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Transfer type', example: 'P2P', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "transferType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Transfer fees', example: 5.00, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "fees", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tool type', example: 'Carding Tool', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "toolType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tool features', example: 'Auto-fill, BIN Check', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "features", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Compatibility', example: 'Windows, Mac', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "compatibility", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Video duration in seconds', example: 300, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Video format', example: 'MP4', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "format", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Video quality', example: 'HD', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "quality", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Wallet address', example: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "walletAddress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Transaction count', example: 50, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "transactionCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Risk level', example: 'High', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "riskLevel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check amount', example: 2500.00, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "checkAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Gift card value', example: 100.00, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "giftCardValue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Gift card code', example: 'GC123456789', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "giftCardCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Personal info included', example: true, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateProductDto.prototype, "personalInfo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Financial info included', example: true, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateProductDto.prototype, "financialInfo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Contact info included', example: true, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateProductDto.prototype, "contactInfo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Security features', example: '2FA, VPN', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "securityFeatures", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Shake type', example: 'Money Transfer', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "shakeType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Shake amount', example: 1000.00, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "shakeAmount", void 0);
//# sourceMappingURL=create-product.dto.js.map