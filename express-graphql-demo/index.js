var express = require('express');
var graphqlHTTP = require('express-graphql').graphqlHTTP;
var { buildSchema } = require('graphql');

var app=express();

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = {
  hello: () => "World"
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }));

app.listen(4000);
console.log('Server Started on Port : 4000');