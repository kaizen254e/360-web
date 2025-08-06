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
exports.AnalyticsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AnalyticsService = class AnalyticsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getDashboardAnalytics(timeRange) { const endDate = new Date(); const startDate = new Date(); startDate.setDate(startDate.getDate() - timeRange); const previousEndDate = startDate; const previousStartDate = new Date(); previousStartDate.setDate(previousStartDate.getDate() - (timeRange * 2)); const [currentRevenue, currentOrders, currentUsers, currentProducts] = await Promise.all([this.getRevenueData(startDate, endDate), this.getOrderData(startDate, endDate), this.getUserData(startDate, endDate), this.getProductData(startDate, endDate)]); const [previousRevenue, previousOrders, previousUsers] = await Promise.all([this.getRevenueData(previousStartDate, previousEndDate), this.getOrderData(previousStartDate, previousEndDate), this.getUserData(previousStartDate, previousEndDate)]); return { revenue: { current: currentRevenue, previous: previousRevenue }, orders: { current: currentOrders, previous: previousOrders }, users: { current: currentUsers, previous: previousUsers }, products: currentProducts, topProducts: [], topCategories: [], orderStatusBreakdown: [], paymentMethodBreakdown: [], recentActivity: [], salesByDay: [], revenueByCategory: [], monthlyTrends: [], yearlyComparison: {}, customerSegments: [], inventoryAlerts: [], geographicData: [], deviceUsage: [{ device: "Desktop", percentage: 45 }, { device: "Mobile", percentage: 40 }, { device: "Tablet", percentage: 15 }], trafficSources: [{ source: "Direct", percentage: 30 }, { source: "Organic Search", percentage: 25 }, { source: "Social Media", percentage: 20 }, { source: "Referral", percentage: 15 }, { source: "Email", percentage: 10 }], socialMediaMetrics: { followers: 1250, engagement: 8.5, reach: 15000 }, emailMarketingMetrics: { opens: 2500, clicks: 500, clickRate: 20 }, seoMetrics: { ranking: "Top 10", keywords: 150, backlinks: 2500 }, securityMetrics: { failedLogins: 25, suspiciousActivity: 3, blockedIPs: 8, lastBackup: new Date().toISOString().split("T")[0] }, systemHealth: { storage: 65, memory: 45, cpu: 30 }, supportTickets: 15, resolvedTickets: 12, costs: 5000, refunds: 250, customerRetentionRate: 85.5, customerLifetimeValue: 1250.00, churnRate: 14.5, averageResponseTime: 2.5, customerSatisfactionScore: 8.7 }; }
    async getRevenueData(startDate, endDate) { const result = await this.prisma.order.aggregate({ where: { createdAt: { gte: startDate, lte: endDate }, status: { in: ["COMPLETED", "PAID"] } }, _sum: { totalAmount: true } }); return result._sum.totalAmount || 0; }
    async getOrderData(startDate, endDate) { return this.prisma.order.count({ where: { createdAt: { gte: startDate, lte: endDate } } }); }
    async getUserData(startDate, endDate) { return this.prisma.user.count({ where: { createdAt: { gte: startDate, lte: endDate } } }); }
    async getProductData(startDate, endDate) { return this.prisma.product.count({ where: { createdAt: { gte: startDate, lte: endDate } } }); }
    async exportAnalytics() { const analytics = await this.getDashboardAnalytics(30); const csvHeaders = ["Metric", "Current Value", "Previous Value", "Growth %", "Date"]; const csvRows = [["Total Revenue", analytics.revenue.current, analytics.revenue.previous, ((analytics.revenue.current - analytics.revenue.previous) / analytics.revenue.previous * 100).toFixed(2) + "%", new Date().toISOString().split("T")[0]], ["Total Orders", analytics.orders.current, analytics.orders.previous, ((analytics.orders.current - analytics.orders.previous) / analytics.orders.previous * 100).toFixed(2) + "%", new Date().toISOString().split("T")[0]], ["Total Users", analytics.users.current, analytics.users.previous, ((analytics.users.current - analytics.users.previous) / analytics.users.previous * 100).toFixed(2) + "%", new Date().toISOString().split("T")[0]]]; const csvContent = [csvHeaders.join(","), ...csvRows.map(row => row.join(","))].join("\n"); return csvContent; }
    async getRevenueAnalytics(timeRange) { return this.getDashboardAnalytics(timeRange); }
    async getOrderAnalytics(timeRange) { return this.getDashboardAnalytics(timeRange); }
    async getUserAnalytics(timeRange) { return this.getDashboardAnalytics(timeRange); }
    async getProductAnalytics(timeRange) { return this.getDashboardAnalytics(timeRange); }
    async getPerformanceMetrics() { return { systemHealth: { storage: 65, memory: 45, cpu: 30 }, securityMetrics: { failedLogins: 25, suspiciousActivity: 3, blockedIPs: 8, lastBackup: new Date().toISOString().split("T")[0] }, seoMetrics: { ranking: "Top 10", keywords: 150, backlinks: 2500 } }; }
};
exports.AnalyticsService = AnalyticsService;
exports.AnalyticsService = AnalyticsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AnalyticsService);
//# sourceMappingURL=analytics.service.js.map