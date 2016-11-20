import { Meteor } from 'meteor/meteor'
import { Todos } from '../imports/api/collections/todo'
// collection = table in sql
// es6
Meteor.startup(() => {
  if (Todos.find().count() <= 0) {
    for (let i = 0; i < 10; i++) {
      Todos.insert({
        title: `Todo ${i}`,
        todo: `loving todo ${i}`
      })
    }
  }
})
