const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        listings: [Listing]
    }

    type Listing {
        _id: ID
        description: String
        createdAt: String
        username: String
        recommendationCount: Int
        recommendations: [Recommendation]
    }

    type Recommendation {
        _id: ID
        recommendationBody: String
        createdAt: String
        username: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        listings(username: String): [Listing]
        listing(_id: ID!): Listing
        
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addListing(description: String!): Listing
        addRecommendation(listingId: ID!, recommendationBody: String!): Listing
    }
`;

module.exports = typeDefs;