var HumanView = require('human-view');
var templates = require('../templates');


module.exports = HumanView.extend({
    template: templates.includes.person,
    srcBindings: {
        'avatar': '.avatar'
    },
    events: {
        'click .delete': 'handleRemoveClick'
    },
    render: function () {
        this.renderAndBind({person: this.model});
    },
    handleRemoveClick: function () {
        this.model.destroy();
    }
});
