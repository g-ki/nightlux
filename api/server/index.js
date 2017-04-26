import express from 'express';
import graph from './graph';
import mongoose from 'mongoose'
import * as config from '../config'

mongoose.Promise = global.Promise;
mongoose.connect(config.db.MONGO_URL);

let app = express();

app.use('/graphql', graph);

app.listen(3000);
console.log('Running a GraphQL API server at localhost:3000/graphql');
