import './post.html'
import '../../imports/component/postComponent'
import {Post} from '../api/collections/post';
import {AutoForm} from 'meteor/aldeed:autoform';
let indexTmpl = Template.post,
    editTmpl = Template.editPost;
indexTmpl.onCreated(function () {
    this.notReady = new ReactiveVar(true)
    this.autorun(() => {
        this.subscription = Meteor.subscribe('_post', {params: {}, options: {limit: 50}})
    })
});
indexTmpl.onRendered(function () {
    this.autorun(() => {
        if (this.subscription.ready()) {
            this.notReady.set(false);
        }
    });
});
indexTmpl.helpers({
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
});
//stuff for edit post

editTmpl.onCreated(function () {
    this.autorun(function () {
        let postId = FlowRouter.getParam('postId');
        if (postId) {
            Meteor.subscribe('_postEdit', {params: {_id: postId}});
        }
    });
});

editTmpl.helpers({
    collection(){
        return Post;
    },
    postDoc(){
        let postId = FlowRouter.getParam('postId');
        return Post.findOne({_id: postId});
    }
});


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
    },
    postEditForm: {
        onSuccess(formType,result){
            alertify.success('Updated!');
            FlowRouter.go('/post');
        },
        onError(formType,err){
            alertify.error(`${err.message}`)
        }
    }
});
