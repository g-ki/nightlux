import fs from 'fs';
import { join } from 'path';
import { buildSchema } from 'graphql';

/*
* Public GraphQL schema.
*/

export default buildSchema(
  fs.readFileSync(join(__dirname, 'index.graphql'), 'utf-8')
);
