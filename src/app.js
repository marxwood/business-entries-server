const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');

const schema = require('./schema');
const root = require('./endpoints');

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}));

module.exports = app;
