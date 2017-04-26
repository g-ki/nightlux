import express from 'express'
import graphqlHTTP from 'express-graphql'
import { buildSchema } from 'graphql'

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(3000);
console.log('Running a GraphQL API server at localhost:3000/graphql');
