import './postComponent.html';

let postComponent = Template._postComponent;

postComponent.events({
    'click .removePost'(event,instance){
        Meteor.call('removePost', {id: this._id});
    },
    'click .editPost'(event,instance){
        FlowRouter.go(`/post/${this._id}/edit`)
    }
});