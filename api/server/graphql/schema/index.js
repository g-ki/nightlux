import fs from 'fs';
import { join } from 'path';
import {
  makeExecutableSchema,
} from 'graphql-tools';

import * as Mutation from '../mutations';
import * as Query from '../queries';
import * as Types from '../types';

const resolvers = {
  Query,
  Mutation,
  ...Types,
}

/*
* Public GraphQL schema.
*/

const typeDefs = fs.readFileSync(join(__dirname, 'index.graphql'), 'utf-8');

const schema = makeExecutableSchema({ typeDefs, resolvers });
export default schema;
