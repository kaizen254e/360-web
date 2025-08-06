"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStaticPageDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_static_page_dto_1 = require("./create-static-page.dto");
class UpdateStaticPageDto extends (0, swagger_1.PartialType)(create_static_page_dto_1.CreateStaticPageDto) {
}
exports.UpdateStaticPageDto = UpdateStaticPageDto;
//# sourceMappingURL=update-static-page.dto.js.map