import {
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express';
import schema from './schema'

/*
* Export a GraphQL middleware.
*/

export const graphql = graphqlExpress({
  schema
});

export const graphiql = graphiqlExpress({
  endpointURL: '/graphql'
});
