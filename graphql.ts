import { ApolloServer } from 'apollo-server-lambda';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';

import { Resolvers } from './src/generated/graphql';
import { Query } from './src/queries';
import { Mutation } from './src/mutation';
import { Context } from './src';
import { PostProvider } from './src/providers/post';

const typeDefs = loadSchemaSync('./src/**/*.graphql', {
  loaders: [new GraphQLFileLoader()],
});

const resolvers: Partial<Resolvers> = {
  Mutation,
  Query,
};

const dataSources = (): Context['dataSources'] => {
  return {
    postProvider: new PostProvider(),
  };
};

const server = new ApolloServer({
  dataSources,
  typeDefs,
  resolvers,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground({
      endpoint: '/dev/graphql',
      settings: {
        'schema.polling.enable': false,
      },
    }),
  ],
});

exports.graphqlHandler = server.createHandler();
