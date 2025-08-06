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
exports.CategorySeederService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CategorySeederService = class CategorySeederService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    categoryData = {
        MAIN: [
            {
                name: 'Bank Logs',
                slug: 'bank-logs',
                description: 'High-quality bank logs from various banks',
                order: 1,
            },
            {
                name: 'Bitcoin Log',
                slug: 'bitcoin-log',
                description: 'Bitcoin wallet logs and transactions',
                order: 2,
            },
            {
                name: 'Carded',
                slug: 'carded',
                description: 'Carded products and services',
                order: 3,
            },
            {
                name: 'Carded Products',
                slug: 'carded-products',
                description: 'Premium carded products',
                order: 4,
            },
            {
                name: 'CashApp Log',
                slug: 'cashapp-log',
                description: 'CashApp account logs',
                order: 5,
            },
            {
                name: 'CC CVV',
                slug: 'cc-cvv',
                description: 'Credit card CVV data',
                order: 6,
            },
            {
                name: 'Clips',
                slug: 'clips',
                description: 'Video clips and tutorials',
                order: 7,
            },
            {
                name: 'Clone',
                slug: 'clone',
                description: 'Clone card services',
                order: 8,
            },
            {
                name: 'Deposit Check',
                slug: 'deposit-check',
                description: 'Deposit check services',
                order: 9,
            },
            {
                name: 'E-Gift Cards',
                slug: 'e-gift-cards',
                description: 'Electronic gift cards',
                order: 10,
            },
            {
                name: 'Fraud Cards',
                slug: 'fraud-cards',
                description: 'Fraud card services',
                order: 11,
            },
            {
                name: 'Fullz',
                slug: 'fullz',
                description: 'Complete personal information packages',
                order: 12,
            },
            {
                name: 'Linkable',
                slug: 'linkable',
                description: 'Linkable account services',
                order: 13,
            },
            {
                name: 'PayPal Log',
                slug: 'paypal-log',
                description: 'PayPal account logs',
                order: 14,
            },
            {
                name: 'Shake',
                slug: 'shake',
                description: 'Shake services and tools',
                order: 15,
            },
            {
                name: 'Stealth Accounts',
                slug: 'stealth-accounts',
                description: 'Stealth account services',
                order: 16,
            },
            {
                name: 'Tools',
                slug: 'tools',
                description: 'Various tools and utilities',
                order: 17,
            },
            {
                name: 'Transfers',
                slug: 'transfers',
                description: 'Money transfer services',
                order: 18,
            },
        ],
        MORE_LOGS: [
            {
                name: 'USA Banks',
                slug: 'usa-banks',
                description: 'US bank logs and accounts',
                order: 1,
            },
            {
                name: 'USA Cards',
                slug: 'usa-cards',
                description: 'US credit and debit cards',
                order: 2,
            },
            {
                name: 'UK Banks',
                slug: 'uk-banks',
                description: 'UK bank logs and accounts',
                order: 3,
            },
            {
                name: 'UK Cards',
                slug: 'uk-cards',
                description: 'UK credit and debit cards',
                order: 4,
            },
            {
                name: 'Europe Cards',
                slug: 'europe-cards',
                description: 'European credit and debit cards',
                order: 5,
            },
            {
                name: 'Canada Banks',
                slug: 'canada-banks',
                description: 'Canadian bank logs and accounts',
                order: 6,
            },
            {
                name: 'Canada Cards',
                slug: 'canada-cards',
                description: 'Canadian credit and debit cards',
                order: 7,
            },
            {
                name: 'Africa Cards',
                slug: 'africa-cards',
                description: 'African credit and debit cards',
                order: 8,
            },
            {
                name: 'Australia Cards',
                slug: 'australia-cards',
                description: 'Australian credit and debit cards',
                order: 9,
            },
            {
                name: 'Credit Unions',
                slug: 'credit-unions',
                description: 'Credit union accounts and logs',
                order: 10,
            },
            {
                name: 'Crypto Logs',
                slug: 'crypto-logs',
                description: 'Cryptocurrency wallet logs',
                order: 11,
            },
        ],
        LINKABLES: [
            {
                name: 'Apple Pay',
                slug: 'linkable-applepay',
                description: 'Apple Pay linkable accounts',
                order: 1,
            },
            {
                name: 'CashApp',
                slug: 'linkable-cashapp',
                description: 'CashApp linkable accounts',
                order: 2,
            },
            {
                name: 'Google Pay',
                slug: 'linkable-googlepay',
                description: 'Google Pay linkable accounts',
                order: 3,
            },
            {
                name: 'PayPal',
                slug: 'linkable-paypal',
                description: 'PayPal linkable accounts',
                order: 4,
            },
            {
                name: 'Venmo',
                slug: 'linkable-venmo',
                description: 'Venmo linkable accounts',
                order: 5,
            },
        ],
        TRANSFERS: [
            {
                name: 'Apple Pay',
                slug: 'transfer-applepay',
                description: 'Apple Pay transfer services',
                order: 1,
            },
            {
                name: 'CashApp',
                slug: 'transfer-cashapp',
                description: 'CashApp transfer services',
                order: 2,
            },
            {
                name: 'Google Pay',
                slug: 'transfer-googlepay',
                description: 'Google Pay transfer services',
                order: 3,
            },
            {
                name: 'PayPal',
                slug: 'transfer-paypal',
                description: 'PayPal transfer services',
                order: 4,
            },
            {
                name: 'Venmo',
                slug: 'transfer-venmo',
                description: 'Venmo transfer services',
                order: 5,
            },
            {
                name: 'Zelle',
                slug: 'transfer-zelle',
                description: 'Zelle transfer services',
                order: 6,
            },
        ],
    };
    async seedAllCategories() {
        let created = 0;
        let updated = 0;
        for (const [type, categories] of Object.entries(this.categoryData)) {
            for (const categoryData of categories) {
                const existing = await this.prisma.category.findUnique({
                    where: { slug: categoryData.slug },
                });
                if (existing) {
                    await this.prisma.category.update({
                        where: { id: existing.id },
                        data: {
                            name: categoryData.name,
                            description: categoryData.description,
                            type: type,
                            order: categoryData.order,
                            isActive: true,
                        },
                    });
                    updated++;
                }
                else {
                    await this.prisma.category.create({
                        data: {
                            name: categoryData.name,
                            slug: categoryData.slug,
                            description: categoryData.description,
                            type: type,
                            order: categoryData.order,
                            isActive: true,
                        },
                    });
                    created++;
                }
            }
        }
        return {
            message: `Categories seeded successfully. Created: ${created}, Updated: ${updated}`,
            created,
            updated,
        };
    }
    async seedCategoriesByType(type) {
        const categories = this.categoryData[type] || [];
        let created = 0;
        let updated = 0;
        for (const categoryData of categories) {
            const existing = await this.prisma.category.findUnique({
                where: { slug: categoryData.slug },
            });
            if (existing) {
                await this.prisma.category.update({
                    where: { id: existing.id },
                    data: {
                        name: categoryData.name,
                        description: categoryData.description,
                        type,
                        order: categoryData.order,
                        isActive: true,
                    },
                });
                updated++;
            }
            else {
                await this.prisma.category.create({
                    data: {
                        name: categoryData.name,
                        slug: categoryData.slug,
                        description: categoryData.description,
                        type,
                        order: categoryData.order,
                        isActive: true,
                    },
                });
                created++;
            }
        }
        return {
            message: `${type} categories seeded successfully. Created: ${created}, Updated: ${updated}`,
            created,
            updated,
        };
    }
    async getCategoryStructure() {
        const categories = await this.prisma.category.findMany({
            orderBy: [{ type: 'asc' }, { order: 'asc' }],
        });
        const structure = {
            MAIN: [],
            MORE_LOGS: [],
            LINKABLES: [],
            TRANSFERS: [],
        };
        categories.forEach((category) => {
            structure[category.type].push({
                id: category.id,
                name: category.name,
                slug: category.slug,
                description: category.description,
                order: category.order,
                isActive: category.isActive,
            });
        });
        return structure;
    }
};
exports.CategorySeederService = CategorySeederService;
exports.CategorySeederService = CategorySeederService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CategorySeederService);
//# sourceMappingURL=category-seeder.service.js.map