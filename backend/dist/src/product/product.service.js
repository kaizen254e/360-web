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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let ProductService = class ProductService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    mapToProductResponse(product) {
        return {
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            categoryId: product.categoryId,
            productType: product.productType,
            stockQuantity: product.stockQuantity,
            isActive: product.isActive,
            isFeatured: product.isFeatured,
            images: product.images,
            thumbnail: product.thumbnail,
            sku: product.sku,
            barcode: product.barcode,
            createdAt: product.createdAt,
            updatedAt: product.updatedAt,
            category: product.category ? {
                id: product.category.id,
                name: product.category.name,
                slug: product.category.slug,
                type: product.category.type,
            } : undefined,
            bankName: product.bankName,
            balance: product.balance,
            country: product.country,
            verification: product.verification,
            cardType: product.cardType,
            bank: product.bank,
            cvv: product.cvv,
            platform: product.platform,
            linkableBalance: product.linkableBalance,
            amount: product.amount,
            speed: product.speed,
            transferPlatform: product.transferPlatform,
            accountType: product.accountType,
            lastActivity: product.lastActivity,
            transferType: product.transferType,
            fees: product.fees,
            toolType: product.toolType,
            features: product.features,
            compatibility: product.compatibility,
            duration: product.duration,
            format: product.format,
            quality: product.quality,
            walletAddress: product.walletAddress,
            transactionCount: product.transactionCount,
            riskLevel: product.riskLevel,
            checkAmount: product.checkAmount,
            giftCardValue: product.giftCardValue,
            giftCardCode: product.giftCardCode,
            personalInfo: product.personalInfo,
            financialInfo: product.financialInfo,
            contactInfo: product.contactInfo,
            securityFeatures: product.securityFeatures,
            shakeType: product.shakeType,
            shakeAmount: product.shakeAmount,
        };
    }
    async createProduct(createProductDto) {
        const category = await this.prisma.category.findUnique({
            where: { id: createProductDto.categoryId },
        });
        if (!category) {
            throw new common_1.NotFoundException(`Category with ID '${createProductDto.categoryId}' not found.`);
        }
        this.validateProductTypeForCategory(createProductDto.productType, category.type);
        const product = await this.prisma.product.create({
            data: {
                name: createProductDto.name,
                description: createProductDto.description,
                price: createProductDto.price,
                categoryId: createProductDto.categoryId,
                productType: createProductDto.productType,
                stockQuantity: createProductDto.stockQuantity,
                isActive: createProductDto.isActive,
                images: createProductDto.images,
                bankName: createProductDto.bankName,
                balance: createProductDto.balance,
                country: createProductDto.country,
                verification: createProductDto.verification,
                cardType: createProductDto.cardType,
                bank: createProductDto.bank,
                cvv: createProductDto.cvv,
                platform: createProductDto.platform,
                linkableBalance: createProductDto.linkableBalance,
                amount: createProductDto.amount,
                speed: createProductDto.speed,
                transferPlatform: createProductDto.transferPlatform,
                accountType: createProductDto.accountType,
                lastActivity: createProductDto.lastActivity,
                transferType: createProductDto.transferType,
                fees: createProductDto.fees,
                toolType: createProductDto.toolType,
                features: createProductDto.features,
                compatibility: createProductDto.compatibility,
                duration: createProductDto.duration,
                format: createProductDto.format,
                quality: createProductDto.quality,
                walletAddress: createProductDto.walletAddress,
                transactionCount: createProductDto.transactionCount,
                riskLevel: createProductDto.riskLevel,
                checkAmount: createProductDto.checkAmount,
                giftCardValue: createProductDto.giftCardValue,
                giftCardCode: createProductDto.giftCardCode,
                personalInfo: createProductDto.personalInfo,
                financialInfo: createProductDto.financialInfo,
                contactInfo: createProductDto.contactInfo,
                securityFeatures: createProductDto.securityFeatures,
                shakeType: createProductDto.shakeType,
                shakeAmount: createProductDto.shakeAmount,
            },
            include: {
                category: true,
            },
        });
        return this.mapToProductResponse(product);
    }
    async getProducts(filterDto) {
        const { search, productType, categoryId, categorySlug, categoryType, isActive, inStock, minPrice, maxPrice, bankName, country, platform, cardType, speed, page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'desc', } = filterDto;
        const where = {};
        if (search) {
            where.OR = [
                { name: { contains: search, mode: 'insensitive' } },
                { description: { contains: search, mode: 'insensitive' } },
            ];
        }
        if (productType) {
            where.productType = productType;
        }
        if (categoryId) {
            where.categoryId = categoryId;
        }
        if (categorySlug || categoryType) {
            where.category = {};
            if (categorySlug) {
                where.category.slug = categorySlug;
            }
            if (categoryType) {
                where.category.type = categoryType;
            }
        }
        if (isActive !== undefined) {
            where.isActive = isActive;
        }
        if (inStock !== undefined) {
            if (inStock) {
                where.stockQuantity = { gt: 0 };
            }
            else {
                where.stockQuantity = { lte: 0 };
            }
        }
        if (minPrice !== undefined || maxPrice !== undefined) {
            where.price = {};
            if (minPrice !== undefined) {
                where.price.gte = minPrice;
            }
            if (maxPrice !== undefined) {
                where.price.lte = maxPrice;
            }
        }
        if (bankName) {
            where.bankName = { contains: bankName, mode: 'insensitive' };
        }
        if (country) {
            where.country = { contains: country, mode: 'insensitive' };
        }
        if (platform) {
            where.platform = { contains: platform, mode: 'insensitive' };
        }
        if (cardType) {
            where.cardType = { contains: cardType, mode: 'insensitive' };
        }
        if (speed) {
            where.speed = { contains: speed, mode: 'insensitive' };
        }
        const skip = (page - 1) * limit;
        const [products, total] = await Promise.all([
            this.prisma.product.findMany({
                where,
                skip,
                take: limit,
                orderBy: { [sortBy]: sortOrder },
                include: {
                    category: true,
                },
            }),
            this.prisma.product.count({ where }),
        ]);
        return {
            products: products.map(product => this.mapToProductResponse(product)),
            total,
            page,
            limit,
        };
    }
    async getProductById(id) {
        const product = await this.prisma.product.findUnique({
            where: { id },
            include: {
                category: true,
            },
        });
        if (!product) {
            throw new common_1.NotFoundException(`Product with ID '${id}' not found.`);
        }
        return this.mapToProductResponse(product);
    }
    async updateProduct(id, updateProductDto) {
        const existingProduct = await this.prisma.product.findUnique({
            where: { id },
        });
        if (!existingProduct) {
            throw new common_1.NotFoundException(`Product with ID '${id}' not found.`);
        }
        if (updateProductDto.categoryId) {
            const category = await this.prisma.category.findUnique({
                where: { id: updateProductDto.categoryId },
            });
            if (!category) {
                throw new common_1.NotFoundException(`Category with ID '${updateProductDto.categoryId}' not found.`);
            }
            this.validateProductTypeForCategory(updateProductDto.productType || existingProduct.productType, category.type);
        }
        const updatedProduct = await this.prisma.product.update({
            where: { id },
            data: updateProductDto,
            include: {
                category: true,
            },
        });
        return this.mapToProductResponse(updatedProduct);
    }
    async deleteProduct(id) {
        const existingProduct = await this.prisma.product.findUnique({
            where: { id },
            include: {
                orderItems: true,
            },
        });
        if (!existingProduct) {
            throw new common_1.NotFoundException(`Product with ID '${id}' not found.`);
        }
        if (existingProduct.orderItems && existingProduct.orderItems.length > 0) {
            throw new common_1.BadRequestException(`Product '${existingProduct.name}' has associated orders and cannot be deleted.`);
        }
        await this.prisma.product.delete({
            where: { id },
        });
        return { message: `Product '${existingProduct.name}' deleted successfully.` };
    }
    async getProductsByCategory(categorySlug, limit = 10) {
        const products = await this.prisma.product.findMany({
            where: {
                category: {
                    slug: categorySlug,
                },
                isActive: true,
            },
            take: limit,
            orderBy: { createdAt: 'desc' },
            include: {
                category: true,
            },
        });
        return products.map(product => this.mapToProductResponse(product));
    }
    async getProductsByType(productType, limit = 10) {
        const products = await this.prisma.product.findMany({
            where: {
                productType,
                isActive: true,
            },
            take: limit,
            orderBy: { createdAt: 'desc' },
            include: {
                category: true,
            },
        });
        return products.map(product => this.mapToProductResponse(product));
    }
    async searchProducts(query, limit = 10) {
        const products = await this.prisma.product.findMany({
            where: {
                OR: [
                    { name: { contains: query, mode: 'insensitive' } },
                    { description: { contains: query, mode: 'insensitive' } },
                ],
                isActive: true,
            },
            take: limit,
            orderBy: { createdAt: 'desc' },
            include: {
                category: true,
            },
        });
        return products.map(product => this.mapToProductResponse(product));
    }
    async getFeaturedProducts(limit = 10) {
        const products = await this.prisma.product.findMany({
            where: {
                isActive: true,
                isFeatured: true,
            },
            take: limit,
            orderBy: { createdAt: 'desc' },
            include: {
                category: {
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                    },
                },
            },
        });
        return products.map(product => this.mapToProductResponse(product));
    }
    async getPopularProducts(limit = 10) {
        const products = await this.prisma.product.findMany({
            where: {
                isActive: true,
            },
            take: limit,
            orderBy: { createdAt: 'desc' },
            include: {
                category: {
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                    },
                },
            },
        });
        return products.map(product => this.mapToProductResponse(product));
    }
    async updateStockQuantity(id, quantity) {
        const product = await this.prisma.product.update({
            where: { id },
            data: { stockQuantity: quantity },
            include: {
                category: true,
            },
        });
        return this.mapToProductResponse(product);
    }
    validateProductTypeForCategory(productType, categoryType) {
        const validProductTypes = {
            MAIN: [
                client_1.ProductType.BANK_LOG, client_1.ProductType.BITCOIN_LOG, client_1.ProductType.CARDED, client_1.ProductType.CARDED_PRODUCT,
                client_1.ProductType.CASHAPP_LOG, client_1.ProductType.CC_CVV, client_1.ProductType.CLIP, client_1.ProductType.CLONE,
                client_1.ProductType.DEPOSIT_CHECK, client_1.ProductType.E_GIFT_CARD, client_1.ProductType.FRAUD_CARD, client_1.ProductType.FULLZ,
                client_1.ProductType.LINKABLE, client_1.ProductType.PAYPAL_LOG, client_1.ProductType.SHAKE, client_1.ProductType.STEALTH_ACCOUNT,
                client_1.ProductType.TOOL, client_1.ProductType.TRANSFER,
            ],
            MORE_LOGS: [
                client_1.ProductType.USA_BANK, client_1.ProductType.USA_CARD, client_1.ProductType.UK_BANK, client_1.ProductType.UK_CARD,
                client_1.ProductType.EUROPE_CARD, client_1.ProductType.CANADA_BANK, client_1.ProductType.CANADA_CARD, client_1.ProductType.AFRICA_CARD,
                client_1.ProductType.AUSTRALIA_CARD, client_1.ProductType.CREDIT_UNION, client_1.ProductType.CRYPTO_LOG,
            ],
            LINKABLES: [client_1.ProductType.LINKABLE],
            TRANSFERS: [client_1.ProductType.TRANSFER],
        };
        const allowedTypes = validProductTypes[categoryType] || [];
        if (!allowedTypes.includes(productType)) {
            throw new common_1.BadRequestException(`Product type '${productType}' is not valid for category type '${categoryType}'.`);
        }
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductService);
//# sourceMappingURL=product.service.js.map