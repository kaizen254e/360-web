"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const throttler_1 = require("@nestjs/throttler");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const user_module_1 = require("./user/user.module");
const category_module_1 = require("./category/category.module");
const product_module_1 = require("./product/product.module");
const blog_module_1 = require("./blog/blog.module");
const static_pages_module_1 = require("./static-pages/static-pages.module");
const vouch_module_1 = require("./vouch/vouch.module");
const cart_module_1 = require("./cart/cart.module");
const order_module_1 = require("./order/order.module");
const payment_module_1 = require("./payment/payment.module");
const analytics_module_1 = require("./analytics/analytics.module");
const upload_module_1 = require("./upload/upload.module");
const email_module_1 = require("./email/email.module");
const video_module_1 = require("./video/video.module");
const prisma_module_1 = require("./prisma/prisma.module");
const app_config_1 = require("./config/app.config");
const jwt_config_1 = require("./config/jwt.config");
const database_config_1 = require("./config/database.config");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [app_config_1.default, jwt_config_1.default, database_config_1.default],
            }),
            throttler_1.ThrottlerModule.forRoot([
                {
                    ttl: 60000,
                    limit: 100,
                },
            ]),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'uploads'),
                serveRoot: '/uploads',
            }),
            prisma_module_1.PrismaModule,
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            category_module_1.CategoryModule,
            product_module_1.ProductModule,
            blog_module_1.BlogModule,
            static_pages_module_1.StaticPagesModule,
            vouch_module_1.VouchModule,
            cart_module_1.CartModule,
            order_module_1.OrderModule,
            payment_module_1.PaymentModule,
            analytics_module_1.AnalyticsModule,
            upload_module_1.UploadModule,
            email_module_1.EmailModule,
            video_module_1.VideoModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map