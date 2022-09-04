import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { buildSubgraphSchema } from '@apollo/subgraph';
import typeDefs from "./schema/typedefs.js";
import resolvers from "./resolvers/resolvers.js";

//TODO import typedefs as a .graphql file, im using that to generate supergraph w/ rover
//rover supergraph compose --config ./supergraph.yaml > supergraph.graphql

const server = new ApolloServer({ 
    schema: buildSubgraphSchema({ typeDefs, resolvers }),
    plugins: [
        ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
});

server.listen({
    port: 4001,
  }).then( ({url}) => {
    console.log(`gql running @${url}`);
});