var templates = require('../templates');
var PageView = require('./base');


module.exports = PageView.extend({
    template: templates.pages.home,
    events: {
    },
    render: function () {
        console.log('-- Home Page being rendered');
        this.renderAndBind();
    }
});
