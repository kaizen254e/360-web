"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VouchModule = void 0;
const common_1 = require("@nestjs/common");
const vouch_service_1 = require("./vouch.service");
const vouch_controller_1 = require("./vouch.controller");
const vouch_seeder_service_1 = require("./vouch-seeder.service");
const prisma_module_1 = require("../prisma/prisma.module");
let VouchModule = class VouchModule {
};
exports.VouchModule = VouchModule;
exports.VouchModule = VouchModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [vouch_controller_1.VouchController],
        providers: [vouch_service_1.VouchService, vouch_seeder_service_1.VouchSeederService],
        exports: [vouch_service_1.VouchService, vouch_seeder_service_1.VouchSeederService],
    })
], VouchModule);
//# sourceMappingURL=vouch.module.js.map