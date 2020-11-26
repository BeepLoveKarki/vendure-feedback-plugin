import { Injectable, Inject } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { ListQueryBuilder,getEntityOrThrow, TransactionalConnection } from '@vendure/core';

import { ListQueryOptions } from '@vendure/core/dist/common/types/common-types';

import { FeedbackEntity } from '../entities/feedback.entity';
import { PLUGIN_INIT_OPTIONS } from '../constants';
import { PluginInitOptions } from '../types';

@Injectable()
export class FeedbackService {

    constructor(private connection: TransactionalConnection,
                @Inject(PLUGIN_INIT_OPTIONS) private options: PluginInitOptions,
				private listQueryBuilder: ListQueryBuilder) {}

    async getAllFeedbacks(ctx,options?: ListQueryOptions<FeedbackEntity>) {
        return this.listQueryBuilder
		.build(FeedbackEntity, options)
		.getManyAndCount()
		.then(([feedbacks, totalItems]) => {
			return {
				items: feedbacks,
				totalItems
			 };
		 });
    }
	
	async getFeedbackById(ctx,data){
	   return this.connection.getEntityOrThrow(ctx, FeedbackEntity, data);
	}
	
	async addSingleFeedback(ctx,data){
	   const createdVariant = await this.connection.getRepository(ctx,FeedbackEntity).create(data);
	   const savedVariant = await this.connection.getRepository(ctx,FeedbackEntity).save(createdVariant);
	   return savedVariant;
	}
	
	async updateSingleFeedback(ctx,data){
	   const createdVariant = await this.connection.getRepository(ctx,FeedbackEntity).update(data.id,{
		   name: data.name || "Anonymous",
		   email: data.email || "Anonymous",
		   phone: data.phone || "Anonymous",
		   feedback: data.feedback
	   });
	   return this.connection.getEntityOrThrow(ctx, FeedbackEntity, data.id);
	}
	
	async deleteSingleFeedback(ctx,ids){
	   const Variants = await this.connection.getEntityOrThrow(ctx, FeedbackEntity, ids);
	   this.connection.getRepository(ctx,FeedbackEntity).delete(ids);
	   return Variants;
	}
	
	deleteAllFeedbacks(ctx){
	   this.connection.getRepository(ctx,FeedbackEntity).clear();
	   return true;
	}
	
}
