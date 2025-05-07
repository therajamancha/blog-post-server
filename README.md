# Blog Post Backend Application

This is the backend application for the **Full Stack Developer Assignment**. It is built using **Node.js**, **GraphQL**, and **MongoDB** to serve as the backend for a blog post web application. The backend provides APIs to fetch and add blog posts.

## Objective

The objective of this project is to create a backend that supports the following features:

- Fetching a list of blog posts.
- Adding new blog posts to the database.

## Features

- **GraphQL API**: Provides endpoints to query and mutate blog posts.
- **MongoDB Integration**: Stores blog posts in a MongoDB database.
- **Node.js Server**: Handles requests and serves the GraphQL API.

## Setup Instructions

Follow these steps to set up and run the backend application:

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:therajamancha/blog-post-server.git
   cd blog-post-server
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ```env
   MONGO_URI=<your-mongodb-connection-string>
   PORT=8080
   ```

4. Start the server:

   ```bash
   pnpm run dev
   ```

5. The server will run on `http://localhost:8080`.

### GraphQL Endpoints

- **Query**: Fetch all blog posts.
- **Mutation**: Add a new blog post.

You can test the GraphQL API using tools like [GraphQL Playground](https://www.apollographql.com/docs/apollo-server/testing/graphql-playground/) or [Postman](https://www.postman.com/).

## Folder Structure

```
/server
├── src
│   ├── models       # MongoDB models
│   ├── resolvers    # GraphQL resolvers
│   ├── schema       # GraphQL schema
│   └── index.js     # Entry point of the application
├── .env             # Environment variables
├── package.json     # Project dependencies
└── README.md        # Project documentation
```

## Approach

1. **GraphQL API**: Designed a schema with queries and mutations to handle blog post operations.
2. **MongoDB**: Used Mongoose to define the schema and interact with the database.
3. **Node.js**: Set up an Express server integrated with Apollo Server for GraphQL.

## License

This project is licensed under the MIT License.
