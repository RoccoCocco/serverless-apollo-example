import { getPost } from './getPost';

import { QueryResolvers } from '../generated/graphql';

export const Query: Required<QueryResolvers> = { getPost };
