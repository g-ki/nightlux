import express from 'express';
import cors from 'cors'
import { graphql, graphiql } from './graph';
import mongoose from 'mongoose'
import * as config from '../config'

import bodyParser from 'body-parser';

mongoose.Promise = global.Promise;
mongoose.connect(config.db.MONGO_URL);

let app = express();

app.use('*', cors({ origin: 'http://localhost:3000' }));

app.use('/graphql', bodyParser.json(), graphql);
app.use('/graphiql', graphiql);

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
