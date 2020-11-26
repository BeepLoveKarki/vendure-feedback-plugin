import { Args, Parent, Query, Resolver, Mutation } from '@nestjs/graphql';
import { FeedbackService } from '../service/feedback.service';
import { RequestContext, Ctx, Transaction } from '@vendure/core';

@Resolver()
export class FeedbackShopResolver {
    constructor(private feedbackService: FeedbackService) {
    }
	
    @Transaction()
	@Mutation()
	addFeedback(@Ctx() ctx: RequestContext, @Args() args: any){
	   const {input} = args;
	   return this.feedbackService.addSingleFeedback(ctx,input);
	}
	
}
