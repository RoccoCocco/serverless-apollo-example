import { MutationResolvers } from '../generated/graphql';

import { promisify } from 'util';

export const createPost: MutationResolvers['createPost'] = async () => {
  return promisify(setTimeout)(1000, {
    id: 'asdads',
    userId: 'asdad',
    body: 'Mine!',
    title: 'true',
    comments: [],
  });
};
