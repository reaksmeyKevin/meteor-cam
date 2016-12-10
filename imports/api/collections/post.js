export const Post = new Mongo.Collection('post');

Post.schema = new SimpleSchema({
    title: {
        type: String
    },
    description: {
        type: String,
        optional: true
    },
    authorId: {
        type: String,
        optional: true
    },
    comments: {
        type: [Object],
        optional: true
    },
    'comments.$.userId': {
        type: String,
        optional: true
    },
    'comments.$.msg': {
        type: String,
        optional: true
    }
});

Post.attachSchema(Post.schema);