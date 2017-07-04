import fs from 'fs';
import { join } from 'path';
import resolvers from '../resolvers'
import {
  makeExecutableSchema,
} from 'graphql-tools';

/*
* Public GraphQL schema.
*/

const typeDefs = fs.readFileSync(join(__dirname, 'index.graphql'), 'utf-8');

const schema = makeExecutableSchema({ typeDefs, resolvers });
export default schema;
