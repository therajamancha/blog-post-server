export const graphQlSchema = `#graphql
    type Blog {
        _id: ID!
        title: String!
        content: String!
        createdAt: String!
        updatedAt: String!
    }

    type Query {
        getBlogPosts: [Blog!]!
        getBlogPost(id: ID!): Blog

    }

    type Mutation {
        createBlogPost(
            title: String!
            content: String!
        ): Blog!
        updateBlogPost(
            _id: ID!
            title: String
            content: String
        ): Blog
        deleteBlogPost(id: ID!): Blog
    }
`;
