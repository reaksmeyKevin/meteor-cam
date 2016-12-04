import '../imports/component/home.js';
FlowRouter.route('/', {
    name: 'home',
    action: function (params) {
        BlazeLayout.render("mainLayout", {area: "home"});
    }
});

import '../imports/container/post.js'
FlowRouter.route('/post', {
    name: 'post',
    action: function (params) {
        BlazeLayout.render("mainLayout", {area: "post"});
    }
});

import '../imports/container/author';
FlowRouter.route('/author', {
    name: 'author',
    action: function (params) {
        BlazeLayout.render("mainLayout", {area: "author"});
    }
});

