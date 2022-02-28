import { QueryResolvers } from '../generated/graphql';

export const getPost: QueryResolvers['getPost'] = async (
  _,
  { id },
  context
) => {
  return context.dataSources.postProvider.getPost(id);
};
