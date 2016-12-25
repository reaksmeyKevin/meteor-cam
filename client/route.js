import '../imports/component/home.js';
import '../imports/container/post.js';
import '../imports/container/author';
FlowRouter.route('/', {
    name: 'home',
    action: function (params) {
        BlazeLayout.render("mainLayout", {area: "home"});
    }
});
FlowRouter.route('/post', {
    name: 'post',
    action: function (params) {
        BlazeLayout.render("mainLayout", {area: "post"});
    }
});
FlowRouter.route('/post/:postId/edit', {
    name: 'editPost',
    action: function (params) {
        BlazeLayout.render("mainLayout", {area: 'editPost'})
    }
});

FlowRouter.route('/author', {
    name: 'author',
    action: function (params) {
        BlazeLayout.render("mainLayout", {area: "author"});
    }
});

