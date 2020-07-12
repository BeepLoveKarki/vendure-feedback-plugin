"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminApiExtensions = exports.shopApiExtensions = void 0;
const apollo_server_core_1 = require("apollo-server-core");
const commonExtensions = apollo_server_core_1.gql `
  type Feedback implements Node {
        id: ID!
		name:String
		email:String
		phone:String
		feedback: String!
        createdAt: DateTime!
        updatedAt: DateTime!
    }
  input FeedbackAddInput{
	  name:String
	  email:String
      phone:String
	  feedback: String!
  }
`;
exports.shopApiExtensions = apollo_server_core_1.gql `
    ${commonExtensions}
	
	extend type Mutation {
        addFeedback(input:FeedbackAddInput!): Feedback!
    }
	
`;
exports.adminApiExtensions = apollo_server_core_1.gql `
	${commonExtensions}
    
	input FeedbackUpdateInput{
	  id: ID!
	  name:String
	  email:String
      phone:String
	  feedback: String!
	}
	
	type FeedbackList implements PaginatedList {
     items: [Feedback!]!
     totalItems: Int!
    }
	
    extend type Query {
        Feedbacks(options: FeedbackListOptions): FeedbackList!
		Feedback(id:ID!):Feedback
    }
	
	extend type Mutation {
        addFeedback(input:FeedbackAddInput!): Feedback!
		updateFeedback(input:FeedbackUpdateInput!): Feedback!
		deleteFeedback(id:ID!): Feedback!
		deleteAllFeedbacks: Boolean!
    }
	input FeedbackListOptions
`;
//# sourceMappingURL=api-extensions.js.map