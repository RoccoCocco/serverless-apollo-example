import { PostProvider } from './providers/post';

export interface Context {
  dataSources: {
    postProvider: PostProvider;
  };
}
