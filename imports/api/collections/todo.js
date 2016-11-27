import { Mongo } from 'meteor/mongo'

export const Todos = new Mongo.Collection('todos')

Todos.schema = new SimpleSchema({
  // String,Boolean, Number, [''], [{}], Date
  title: {
    type: String
  },
  description: {
    type: String,
    optional: true
  }
})
Todos.attachSchema(Todos.schema);

// export default Posts = new Mongo.Colletion('posts')
