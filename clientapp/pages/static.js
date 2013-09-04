var PageView = require('./base');


module.exports = PageView.extend({
    initialize: function (template) {
        this.template = template;
    },
    render: function () {
        this.renderAndBind();
    }
});
