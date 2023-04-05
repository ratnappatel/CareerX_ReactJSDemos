var graphql = require ('graphql');  

// Read In-Memory[FromArrayObject] data
var TODOs = [  
  {
    "id": 1446412739542,
    "title": "Read emails",
    "completed": false
  },
  {
    "id": 1446412740883,
    "title": "Buy orange",
    "completed": true
  }
];

//Definition of ToDo object
var TodoType = new graphql.GraphQLObjectType({  
    name: 'todo',
    fields: function () {
      return {
        id: {
          type: graphql.GraphQLID
        },
        title: {
          type: graphql.GraphQLString
        },
        completed: {
          type: graphql.GraphQLBoolean
        }
      }
    }
  });

  var queryType = new graphql.GraphQLObjectType({  
    name: 'Query',
    fields: function () {
      return {
        todos: {
          type: new graphql.GraphQLList(TodoType),
          resolve: function () {
            return TODOs;
          }
        }
      }
    }
  });

  module.exports = new graphql.GraphQLSchema({  
    query: queryType
  });