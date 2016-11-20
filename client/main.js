import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
//import collection
import {Todos} from '../imports/api/collections/todo'
Template.app.helpers({
  todos(){
    return Todos.find({}); //select * from todos
    /**
     * [{title: 'todo 1', todo: 'i love todo 1'},{title: 'todo2'}]
    */
  }
});
