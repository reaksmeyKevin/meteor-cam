import './post.html'
import { Post } from '../api/collections/post'
import { AutoForm } from 'meteor/aldeed:autoform'
Template.post.helpers({
  collection() {
    return Post
  }
})

AutoForm.hooks({
  postForm: {
    before: {
        insert(doc){
           doc._id = idGenerator.gen(Post,3);
           return doc;
        }
    },
    onSuccess(formType, result) {
      alertify.success('Successful');
    },
    onError(formType, err) {
      alertify.error(`${err.message}`)
    }
  }
})
