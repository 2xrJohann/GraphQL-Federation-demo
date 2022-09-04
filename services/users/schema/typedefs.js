import { gql } from "apollo-server";

const typeDefs = gql`
    
    """
    Types
    """
    type User {
        id: ID!
        username: String!
        attendanceRating: Int!
        chatScore: Int!
    }

    """
    Inputs
    """
    input createUserInput {
        username: String!
        chatScore: Int!
        attendanceRating: Int!
    }

    """
    Queries
    """
    type Query {
        getUsers: [User!]!
        getUser(name: String!): User!
    }

    """
    Mutations
    """
    type Mutation {
        createUser(input: createUserInput!): User
        deleteUser(input: ID!): User!
    }
`;

export default typeDefs;