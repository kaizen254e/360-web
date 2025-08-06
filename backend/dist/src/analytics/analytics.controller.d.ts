import { AnalyticsService } from './analytics.service';
import { Response } from 'express';
export declare class AnalyticsController {
    private readonly analyticsService;
    constructor(analyticsService: AnalyticsService);
    getDashboardAnalytics(timeRange?: string): Promise<{
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
    exportAnalytics(res: Response): Promise<void>;
    getRevenueAnalytics(timeRange?: string): Promise<{
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
    getOrderAnalytics(timeRange?: string): Promise<{
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
    getUserAnalytics(timeRange?: string): Promise<{
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
    getProductAnalytics(timeRange?: string): Promise<{
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
