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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@vendure/core");
const feedback_entity_1 = require("../entities/feedback.entity");
const constants_1 = require("../constants");
let FeedbackService = class FeedbackService {
    constructor(connection, options, listQueryBuilder) {
        this.connection = connection;
        this.options = options;
        this.listQueryBuilder = listQueryBuilder;
    }
    async getAllFeedbacks(ctx, options) {
        return this.listQueryBuilder
            .build(feedback_entity_1.FeedbackEntity, options)
            .getManyAndCount()
            .then(([feedbacks, totalItems]) => {
            return {
                items: feedbacks,
                totalItems
            };
        });
    }
    async getFeedbackById(ctx, data) {
        return this.connection.getEntityOrThrow(ctx, feedback_entity_1.FeedbackEntity, data);
    }
    async addSingleFeedback(ctx, data) {
        const createdVariant = await this.connection.getRepository(ctx, feedback_entity_1.FeedbackEntity).create(data);
        const savedVariant = await this.connection.getRepository(ctx, feedback_entity_1.FeedbackEntity).save(createdVariant);
        return savedVariant;
    }
    async updateSingleFeedback(ctx, data) {
        const createdVariant = await this.connection.getRepository(ctx, feedback_entity_1.FeedbackEntity).update(data.id, {
            name: data.name || "Anonymous",
            email: data.email || "Anonymous",
            phone: data.phone || "Anonymous",
            feedback: data.feedback
        });
        return this.connection.getEntityOrThrow(ctx, feedback_entity_1.FeedbackEntity, data.id);
    }
    async deleteSingleFeedback(ctx, ids) {
        const Variants = await this.connection.getEntityOrThrow(ctx, feedback_entity_1.FeedbackEntity, ids);
        this.connection.getRepository(ctx, feedback_entity_1.FeedbackEntity).delete(ids);
        return Variants;
    }
    deleteAllFeedbacks(ctx) {
        this.connection.getRepository(ctx, feedback_entity_1.FeedbackEntity).clear();
        return true;
    }
};
FeedbackService = __decorate([
    common_1.Injectable(),
    __param(1, common_1.Inject(constants_1.PLUGIN_INIT_OPTIONS)),
    __metadata("design:paramtypes", [core_1.TransactionalConnection, Object, core_1.ListQueryBuilder])
], FeedbackService);
exports.FeedbackService = FeedbackService;
//# sourceMappingURL=feedback.service.js.map