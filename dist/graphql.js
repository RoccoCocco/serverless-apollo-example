"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_lambda_1 = require("apollo-server-lambda");
const apollo_server_core_1 = require("apollo-server-core");
const load_1 = require("@graphql-tools/load");
const graphql_file_loader_1 = require("@graphql-tools/graphql-file-loader");
const queries_1 = require("./src/queries");
const typeDefs = (0, load_1.loadSchemaSync)('./src/**/*.graphql', {
    loaders: [new graphql_file_loader_1.GraphQLFileLoader()],
});
// Provide resolver functions for your schema fields
const resolvers = {
    Query: queries_1.Query,
};
const server = new apollo_server_lambda_1.ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
        (0, apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground)({
            endpoint: '/dev/graphql',
        }),
    ],
});
exports.graphqlHandler = server.createHandler();
