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
exports.FeedbackEntity = void 0;
const typeorm_1 = require("typeorm");
const core_1 = require("@vendure/core");
/**
 * Here we define a new database entity. Passing this in to the plugin's `entities` array
 * will instruct TypeORM to create the new database table and make the entity available
 * to query in your plugin code.
 */
let FeedbackEntity = class FeedbackEntity extends core_1.VendureEntity {
    constructor(input) {
        super(input);
    }
};
__decorate([
    typeorm_1.Column({ default: "Anonymous" }),
    __metadata("design:type", String)
], FeedbackEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ default: "Anonymous" }),
    __metadata("design:type", String)
], FeedbackEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ default: "Anonymous" }),
    __metadata("design:type", String)
], FeedbackEntity.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], FeedbackEntity.prototype, "feedback", void 0);
FeedbackEntity = __decorate([
    typeorm_1.Entity(),
    __metadata("design:paramtypes", [Object])
], FeedbackEntity);
exports.FeedbackEntity = FeedbackEntity;
//# sourceMappingURL=feedback.entity.js.map