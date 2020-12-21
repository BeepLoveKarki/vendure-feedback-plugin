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
exports.FeedbackAdminResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const feedback_service_1 = require("../service/feedback.service");
const core_1 = require("@vendure/core");
let FeedbackAdminResolver = class FeedbackAdminResolver {
    constructor(feedbackService) {
        this.feedbackService = feedbackService;
    }
    Feedbacks(ctx, args) {
        const { options } = args;
        return this.feedbackService.getAllFeedbacks(ctx, options || undefined);
    }
    Feedback(ctx, args) {
        const { id } = args;
        return this.feedbackService.getFeedbackById(ctx, id);
    }
    addFeedback(ctx, args) {
        const { input } = args;
        return this.feedbackService.addSingleFeedback(ctx, input);
    }
    updateFeedback(ctx, args) {
        const { input } = args;
        return this.feedbackService.updateSingleFeedback(ctx, input);
    }
    deleteFeedback(ctx, args) {
        return this.feedbackService.deleteSingleFeedback(ctx, args.id);
    }
    deleteAllFeedbacks(ctx) {
        return this.feedbackService.deleteAllFeedbacks(ctx);
    }
};
__decorate([
    graphql_1.Query(),
    core_1.Allow(core_1.Permission.SuperAdmin),
    __param(0, core_1.Ctx()), __param(1, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [core_1.RequestContext, Object]),
    __metadata("design:returntype", void 0)
], FeedbackAdminResolver.prototype, "Feedbacks", null);
__decorate([
    graphql_1.Query(),
    core_1.Allow(core_1.Permission.SuperAdmin),
    __param(0, core_1.Ctx()), __param(1, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [core_1.RequestContext, Object]),
    __metadata("design:returntype", void 0)
], FeedbackAdminResolver.prototype, "Feedback", null);
__decorate([
    core_1.Transaction(),
    graphql_1.Mutation(),
    core_1.Allow(core_1.Permission.SuperAdmin),
    __param(0, core_1.Ctx()), __param(1, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [core_1.RequestContext, Object]),
    __metadata("design:returntype", void 0)
], FeedbackAdminResolver.prototype, "addFeedback", null);
__decorate([
    core_1.Transaction(),
    graphql_1.Mutation(),
    core_1.Allow(core_1.Permission.SuperAdmin),
    __param(0, core_1.Ctx()), __param(1, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [core_1.RequestContext, Object]),
    __metadata("design:returntype", void 0)
], FeedbackAdminResolver.prototype, "updateFeedback", null);
__decorate([
    core_1.Transaction(),
    graphql_1.Mutation(),
    core_1.Allow(core_1.Permission.SuperAdmin),
    __param(0, core_1.Ctx()), __param(1, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [core_1.RequestContext, Object]),
    __metadata("design:returntype", void 0)
], FeedbackAdminResolver.prototype, "deleteFeedback", null);
__decorate([
    core_1.Transaction(),
    graphql_1.Mutation(),
    core_1.Allow(core_1.Permission.SuperAdmin),
    __param(0, core_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [core_1.RequestContext]),
    __metadata("design:returntype", void 0)
], FeedbackAdminResolver.prototype, "deleteAllFeedbacks", null);
FeedbackAdminResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [feedback_service_1.FeedbackService])
], FeedbackAdminResolver);
exports.FeedbackAdminResolver = FeedbackAdminResolver;
//# sourceMappingURL=feedback-admin.resolver.js.map