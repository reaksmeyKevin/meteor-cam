import './post.html'
import { Post } from '../api/collections/post';
import { AutoForm } from 'meteor/aldeed:autoform';
import '../component/postComponent';

Template.post.onCreated(function () {
  this.notReady = new ReactiveVar(true)
  this.autorun(() => {
    this.subscription = Meteor.subscribe('_post', {params: {}, options: {limit: 50}})
  })
});
Template.post.onRendered(function(){
  this.autorun(()=>{
    if(this.subscription.ready()){
      this.notReady.set(false);
    }
  });
});
Template.post.helpers({
  collection() {
    return Post
  },
  dataIsNotReady(){
    let instance = Template.instance();
    return instance.notReady.get();
  },
  posts(){
    return Post.find({}); //[{}, {}]
  }
})

AutoForm.hooks({
  postForm: {
    before: {
      insert(doc) {
        doc._id = idGenerator.gen(Post, 3)
        return doc
      }
    },
    onSuccess(formType, result) {
      alertify.success('Successful')
    },
    onError(formType, err) {
      alertify.error(`${err.message}`)
    }
  }
})
