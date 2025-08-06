import { PrismaService } from "../prisma/prisma.service";
export declare class AnalyticsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getDashboardAnalytics(timeRange: number): Promise<{
        revenue: {
            current: number;
            previous: number;
        };
        orders: {
            current: number;
            previous: number;
        };
        users: {
            current: number;
            previous: number;
        };
        products: number;
        topProducts: never[];
        topCategories: never[];
        orderStatusBreakdown: never[];
        paymentMethodBreakdown: never[];
        recentActivity: never[];
        salesByDay: never[];
        revenueByCategory: never[];
        monthlyTrends: never[];
        yearlyComparison: {};
        customerSegments: never[];
        inventoryAlerts: never[];
        geographicData: never[];
        deviceUsage: {
            device: string;
            percentage: number;
        }[];
        trafficSources: {
            source: string;
            percentage: number;
        }[];
        socialMediaMetrics: {
            followers: number;
            engagement: number;
            reach: number;
        };
        emailMarketingMetrics: {
            opens: number;
            clicks: number;
            clickRate: number;
        };
        seoMetrics: {
            ranking: string;
            keywords: number;
            backlinks: number;
        };
        securityMetrics: {
            failedLogins: number;
            suspiciousActivity: number;
            blockedIPs: number;
            lastBackup: string;
        };
        systemHealth: {
            storage: number;
            memory: number;
            cpu: number;
        };
        supportTickets: number;
        resolvedTickets: number;
        costs: number;
        refunds: number;
        customerRetentionRate: number;
        customerLifetimeValue: number;
        churnRate: number;
        averageResponseTime: number;
        customerSatisfactionScore: number;
    }>;
    private getRevenueData;
    private getOrderData;
    private getUserData;
    private getProductData;
    exportAnalytics(): Promise<string>;
    getRevenueAnalytics(timeRange: number): Promise<{
        revenue: {
            current: number;
            previous: number;
        };
        orders: {
            current: number;
            previous: number;
        };
        users: {
            current: number;
            previous: number;
        };
        products: number;
        topProducts: never[];
        topCategories: never[];
        orderStatusBreakdown: never[];
        paymentMethodBreakdown: never[];
        recentActivity: never[];
        salesByDay: never[];
        revenueByCategory: never[];
        monthlyTrends: never[];
        yearlyComparison: {};
        customerSegments: never[];
        inventoryAlerts: never[];
        geographicData: never[];
        deviceUsage: {
            device: string;
            percentage: number;
        }[];
        trafficSources: {
            source: string;
            percentage: number;
        }[];
        socialMediaMetrics: {
            followers: number;
            engagement: number;
            reach: number;
        };
        emailMarketingMetrics: {
            opens: number;
            clicks: number;
            clickRate: number;
        };
        seoMetrics: {
            ranking: string;
            keywords: number;
            backlinks: number;
        };
        securityMetrics: {
            failedLogins: number;
            suspiciousActivity: number;
            blockedIPs: number;
            lastBackup: string;
        };
        systemHealth: {
            storage: number;
            memory: number;
            cpu: number;
        };
        supportTickets: number;
        resolvedTickets: number;
        costs: number;
        refunds: number;
        customerRetentionRate: number;
        customerLifetimeValue: number;
        churnRate: number;
        averageResponseTime: number;
        customerSatisfactionScore: number;
    }>;
    getOrderAnalytics(timeRange: number): Promise<{
        revenue: {
            current: number;
            previous: number;
        };
        orders: {
            current: number;
            previous: number;
        };
        users: {
            current: number;
            previous: number;
        };
        products: number;
        topProducts: never[];
        topCategories: never[];
        orderStatusBreakdown: never[];
        paymentMethodBreakdown: never[];
        recentActivity: never[];
        salesByDay: never[];
        revenueByCategory: never[];
        monthlyTrends: never[];
        yearlyComparison: {};
        customerSegments: never[];
        inventoryAlerts: never[];
        geographicData: never[];
        deviceUsage: {
            device: string;
            percentage: number;
        }[];
        trafficSources: {
            source: string;
            percentage: number;
        }[];
        socialMediaMetrics: {
            followers: number;
            engagement: number;
            reach: number;
        };
        emailMarketingMetrics: {
            opens: number;
            clicks: number;
            clickRate: number;
        };
        seoMetrics: {
            ranking: string;
            keywords: number;
            backlinks: number;
        };
        securityMetrics: {
            failedLogins: number;
            suspiciousActivity: number;
            blockedIPs: number;
            lastBackup: string;
        };
        systemHealth: {
            storage: number;
            memory: number;
            cpu: number;
        };
        supportTickets: number;
        resolvedTickets: number;
        costs: number;
        refunds: number;
        customerRetentionRate: number;
        customerLifetimeValue: number;
        churnRate: number;
        averageResponseTime: number;
        customerSatisfactionScore: number;
    }>;
    getUserAnalytics(timeRange: number): Promise<{
        revenue: {
            current: number;
            previous: number;
        };
        orders: {
            current: number;
            previous: number;
        };
        users: {
            current: number;
            previous: number;
        };
        products: number;
        topProducts: never[];
        topCategories: never[];
        orderStatusBreakdown: never[];
        paymentMethodBreakdown: never[];
        recentActivity: never[];
        salesByDay: never[];
        revenueByCategory: never[];
        monthlyTrends: never[];
        yearlyComparison: {};
        customerSegments: never[];
        inventoryAlerts: never[];
        geographicData: never[];
        deviceUsage: {
            device: string;
            percentage: number;
        }[];
        trafficSources: {
            source: string;
            percentage: number;
        }[];
        socialMediaMetrics: {
            followers: number;
            engagement: number;
            reach: number;
        };
        emailMarketingMetrics: {
            opens: number;
            clicks: number;
            clickRate: number;
        };
        seoMetrics: {
            ranking: string;
            keywords: number;
            backlinks: number;
        };
        securityMetrics: {
            failedLogins: number;
            suspiciousActivity: number;
            blockedIPs: number;
            lastBackup: string;
        };
        systemHealth: {
            storage: number;
            memory: number;
            cpu: number;
        };
        supportTickets: number;
        resolvedTickets: number;
        costs: number;
        refunds: number;
        customerRetentionRate: number;
        customerLifetimeValue: number;
        churnRate: number;
        averageResponseTime: number;
        customerSatisfactionScore: number;
    }>;
    getProductAnalytics(timeRange: number): Promise<{
        revenue: {
            current: number;
            previous: number;
        };
        orders: {
            current: number;
            previous: number;
        };
        users: {
            current: number;
            previous: number;
        };
        products: number;
        topProducts: never[];
        topCategories: never[];
        orderStatusBreakdown: never[];
        paymentMethodBreakdown: never[];
        recentActivity: never[];
        salesByDay: never[];
        revenueByCategory: never[];
        monthlyTrends: never[];
        yearlyComparison: {};
        customerSegments: never[];
        inventoryAlerts: never[];
        geographicData: never[];
        deviceUsage: {
            device: string;
            percentage: number;
        }[];
        trafficSources: {
            source: string;
            percentage: number;
        }[];
        socialMediaMetrics: {
            followers: number;
            engagement: number;
            reach: number;
        };
        emailMarketingMetrics: {
            opens: number;
            clicks: number;
            clickRate: number;
        };
        seoMetrics: {
            ranking: string;
            keywords: number;
            backlinks: number;
        };
        securityMetrics: {
            failedLogins: number;
            suspiciousActivity: number;
            blockedIPs: number;
            lastBackup: string;
        };
        systemHealth: {
            storage: number;
            memory: number;
            cpu: number;
        };
        supportTickets: number;
        resolvedTickets: number;
        costs: number;
        refunds: number;
        customerRetentionRate: number;
        customerLifetimeValue: number;
        churnRate: number;
        averageResponseTime: number;
        customerSatisfactionScore: number;
    }>;
    getPerformanceMetrics(): Promise<{
        systemHealth: {
            storage: number;
            memory: number;
            cpu: number;
        };
        securityMetrics: {
            failedLogins: number;
            suspiciousActivity: number;
            blockedIPs: number;
            lastBackup: string;
        };
        seoMetrics: {
            ranking: string;
            keywords: number;
            backlinks: number;
        };
    }>;
}
