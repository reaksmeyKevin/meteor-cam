import {Meteor} from 'meteor/meteor';
import {Post} from '../imports/api/collections/post';
Meteor.publish('_post', function({params, options}){
    Meteor._sleepForMs(2000);
    return Post.find(params,options); //sort, limit records
    //Post.find({}, {limit: 50});
});