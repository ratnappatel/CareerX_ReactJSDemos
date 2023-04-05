var graphql = require ('graphql');  
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todo',{useNewUrlParser:true})
.then(()=>{
    console.log('DB Connected Successfully.')
})
.catch(()=>{
    console.log('Could not Connect to DB..');
    process.exit();
})


var TODO = mongoose.model('Todo', {  
  id: mongoose.Schema.Types.ObjectId,
  title: String,
  completed: Boolean
})

var TodoType = new graphql.GraphQLObjectType({  
    name: 'TODO',
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

  var QueryType = new graphql.GraphQLObjectType({  
    name: 'Query',
    fields: () => ({
      todos: {
        type: new graphql.GraphQLList(TodoType),
        resolve:function () {
          return TODO.find();
        }
       
      }
    })
  })



  

  const mutation = new graphql.GraphQLObjectType({
    name: 'MutationType',
    fields: {
      addTodo: {
        type: new graphql.GraphQLList(TodoType),
        args: {
          title: { type: graphql.GraphQLString }
        },
        resolve(parentValue, { title }) {
          return (new TODO({ title })).save()
        }
      },
      deleteTodo: {
        type: TodoType,
        args: { id: { type: graphql.GraphQLID } },
        resolve(parentValue, { id }) {
          return TODO.remove({ _id: id });
        }
      },
      updateTodo: {
        type: TodoType,
        args: { id: { type: graphql.GraphQLID }, title: { type: graphql.GraphQLString }  },
        resolve(parentValue, { id, title }) {
          return TODO.update({ _id: id }, { title });
        }
      },
    }
  });
    
  module.exports = new graphql.GraphQLSchema({  
    query: QueryType,
    mutation: mutation
  });