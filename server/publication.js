import {Meteor} from 'meteor/meteor';
import {Post} from '../imports/api/collections/post';
Meteor.publish('_post', function({params, options}){
    return Post.find(params,options); //sort, limit records
    //Post.find({}, {limit: 50});
});

Meteor.publish('_postEdit', function _postEdit({params}) {
    return Post.find(params);
});