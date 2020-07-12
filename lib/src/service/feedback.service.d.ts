import { Connection } from 'typeorm';
import { ListQueryBuilder } from '@vendure/core';
import { ListQueryOptions } from '@vendure/core/dist/common/types/common-types';
import { FeedbackEntity } from '../entities/feedback.entity';
import { PluginInitOptions } from '../types';
export declare class FeedbackService {
    private connection;
    private options;
    private listQueryBuilder;
    constructor(connection: Connection, options: PluginInitOptions, listQueryBuilder: ListQueryBuilder);
    getAllFeedbacks(ctx: any, options?: ListQueryOptions<FeedbackEntity>): Promise<{
        items: FeedbackEntity[];
        totalItems: number;
    }>;
    getFeedbackById(ctx: any, data: any): Promise<FeedbackEntity>;
    addSingleFeedback(ctx: any, data: any): Promise<FeedbackEntity[]>;
    updateSingleFeedback(ctx: any, data: any): Promise<FeedbackEntity>;
    deleteSingleFeedback(ctx: any, ids: any): Promise<FeedbackEntity>;
    deleteAllFeedbacks(ctx: any): boolean;
}
