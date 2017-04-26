import graphqlHTTP from 'express-graphql'
import config from '../../config'
import schema from './schema'
import Root from './models/root'

/*
* Export a GraphQL middleware.
*/

export default graphqlHTTP(req => ({
  schema,
  rootValue: new Root(),
  context: req,
  graphiql: true,
}));
