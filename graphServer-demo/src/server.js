var graphql = require ('graphql').graphql  
var express = require('express')  
var graphQLHTTP = require('express-graphql').graphqlHTTP 
var Schema = require('./Schema1')  

// This is just an internal test
var query = 'query { todos { id, title, completed } }'  
graphql(Schema, query).then( function(result) {  
  console.log(JSON.stringify(result,null," "));

});

var app = express()  
  .use('/', graphQLHTTP({ schema: Schema, 
    pretty: true, graphiql:true }))
  .listen(4000, function (err) {
    console.log('GraphQL Server is now running on localhost:4000');
  });