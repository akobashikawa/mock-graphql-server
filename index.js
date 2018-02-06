const express = require("express");
const bodyParser = require("body-parser");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { makeExecutableSchema, addMockFunctionsToSchema } = require("graphql-tools");
const { graphql } = require("graphql");

const schemaString = require('./schema');
const mocks = require("./mocks");

const app = express();

const typeDefs = schemaString;

const schema = makeExecutableSchema({ typeDefs });

addMockFunctionsToSchema({ schema, mocks });

app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Mock GraphQL Server - http://localhost:${PORT}/graphiql to run queries!`);
});