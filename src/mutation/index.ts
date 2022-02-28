import { createPost } from './createPost';

import { Resolvers } from '../generated/graphql';

export const Mutation: Resolvers['Mutation'] = {
  createPost,
};
