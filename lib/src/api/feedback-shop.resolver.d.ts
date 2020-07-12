import { FeedbackService } from '../service/feedback.service';
import { RequestContext } from '@vendure/core';
export declare class FeedbackShopResolver {
    private feedbackService;
    constructor(feedbackService: FeedbackService);
    addFeedback(ctx: RequestContext, args: any): Promise<import("../entities/feedback.entity").FeedbackEntity[]>;
}
