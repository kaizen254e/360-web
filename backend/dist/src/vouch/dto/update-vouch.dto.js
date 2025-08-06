"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVouchDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_vouch_dto_1 = require("./create-vouch.dto");
class UpdateVouchDto extends (0, swagger_1.PartialType)(create_vouch_dto_1.CreateVouchDto) {
}
exports.UpdateVouchDto = UpdateVouchDto;
//# sourceMappingURL=update-vouch.dto.js.map