import {Meteor} from 'meteor/meteor';
import {Post} from '../../imports/api/collections/post';
Meteor.methods({
    removePost({id}){
        Post.remove(id);
    }
});