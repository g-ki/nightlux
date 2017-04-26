import express from 'express';
import graph from './graph';

let app = express();

app.use('/graphql', graph);

app.listen(3000);
console.log('Running a GraphQL API server at localhost:3000/graphql');
