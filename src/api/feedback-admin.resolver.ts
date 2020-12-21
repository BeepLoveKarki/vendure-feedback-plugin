import { Args, Parent, Query, Resolver, Mutation } from '@nestjs/graphql';
import { FeedbackService } from '../service/feedback.service';
import { RequestContext, Ctx, Allow, Permission, Transaction  } from '@vendure/core';

@Resolver()
export class FeedbackAdminResolver {
    constructor(private feedbackService: FeedbackService) {
    }

    @Query()
	@Allow(Permission.SuperAdmin)
    Feedbacks(@Ctx() ctx: RequestContext, @Args() args: any) {
		const {options} = args;
        return this.feedbackService.getAllFeedbacks(ctx,options || undefined);
    }
	
	@Query()
	@Allow(Permission.SuperAdmin)
    Feedback(@Ctx() ctx: RequestContext, @Args() args: any) {
		const {id} = args;
        return this.feedbackService.getFeedbackById(ctx,id);
    }
	
	@Transaction()
	@Mutation()
	@Allow(Permission.SuperAdmin)
	addFeedback(@Ctx() ctx: RequestContext, @Args() args: any){
	   const {input} = args;
	   return this.feedbackService.addSingleFeedback(ctx,input);
	}
	
	@Transaction()
	@Mutation()
	@Allow(Permission.SuperAdmin)
	updateFeedback(@Ctx() ctx: RequestContext, @Args() args: any){
	   const {input} = args;
	   return this.feedbackService.updateSingleFeedback(ctx,input);
	}
	
	@Transaction()
	@Mutation()
	@Allow(Permission.SuperAdmin)
	deleteFeedback(@Ctx() ctx: RequestContext, @Args() args: any){
	   return this.feedbackService.deleteSingleFeedback(ctx,args.id);
	}
	
	@Transaction()
	@Mutation()
	@Allow(Permission.SuperAdmin)
	deleteAllFeedbacks(@Ctx() ctx: RequestContext){
	   return this.feedbackService.deleteAllFeedbacks(ctx);
	}
	
}
