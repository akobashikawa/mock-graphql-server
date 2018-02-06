const express = require("express");
const bodyParser = require("body-parser");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { makeExecutableSchema, addMockFunctionsToSchema } = require("graphql-tools");
const { graphql } = require("graphql");

const app = express();

const typeDefs = `
  type Author {
    id: Int!
    firstName: String
    lastName: String
    posts: [Post] # the list of Posts by this author
  }

  type Post {
    id: Int!
    title: String
    author: Author
    votes: Int
  }

  type Query {
    posts: [Post]
    authors: [Author]
    author(id: Int!): Author
    post(id: Int!): Post
  }
`;

const schema = makeExecutableSchema({ typeDefs });

const mocks = {};

addMockFunctionsToSchema({ schema, mocks });

app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Mock GraphQL Server - http://localhost:${PORT}/graphiql to run queries!`);
});