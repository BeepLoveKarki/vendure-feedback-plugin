import { FeedbackService } from '../service/feedback.service';
import { RequestContext } from '@vendure/core';
export declare class FeedbackAdminResolver {
    private feedbackService;
    constructor(feedbackService: FeedbackService);
    Feedbacks(ctx: RequestContext, args: any): Promise<{
        items: import("../entities/feedback.entity").FeedbackEntity[];
        totalItems: number;
    }>;
    Feedback(ctx: RequestContext, args: any): Promise<import("../entities/feedback.entity").FeedbackEntity>;
    addFeedback(ctx: RequestContext, args: any): Promise<import("../entities/feedback.entity").FeedbackEntity[]>;
    updateFeedback(ctx: RequestContext, args: any): Promise<import("../entities/feedback.entity").FeedbackEntity>;
    deleteFeedback(ctx: RequestContext, args: any): Promise<import("../entities/feedback.entity").FeedbackEntity>;
    deleteAllFeedbacks(ctx: RequestContext): boolean;
}
