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
exports.UpdateBlogPostDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_blog_post_dto_1 = require("./create-blog-post.dto");
class UpdateBlogPostDto extends (0, swagger_1.PartialType)(create_blog_post_dto_1.CreateBlogPostDto) {
    isFeatured;
    viewCount;
}
exports.UpdateBlogPostDto = UpdateBlogPostDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether the post is featured', required: false }),
    __metadata("design:type", Boolean)
], UpdateBlogPostDto.prototype, "isFeatured", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'View count', required: false }),
    __metadata("design:type", Number)
], UpdateBlogPostDto.prototype, "viewCount", void 0);
//# sourceMappingURL=update-blog-post.dto.js.map