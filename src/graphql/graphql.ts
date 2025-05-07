import { ApolloServer } from "@apollo/server";
import { graphQlResolvers } from "./resolvers/resolvers";
import { graphQlSchema } from "./schema";

export const connectGraphQL = () => {
  const server = new ApolloServer({
    typeDefs: graphQlSchema,
    resolvers: graphQlResolvers,
  });

  return server;
};
