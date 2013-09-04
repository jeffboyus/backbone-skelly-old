var templates = require('../templates');
var PageView = require('./base');


module.exports = PageView.extend({
    template: templates.pages.person,
    render: function () {
        console.log('-- person detail page being rendered');
        this.renderAndBind({person: this.model});
    }
});
