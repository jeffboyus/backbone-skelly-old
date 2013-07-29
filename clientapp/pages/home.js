var _ = require('underscore'),
    templates = require('templates'),
    PageView = require('pages/base');


module.exports = PageView.extend({
    template: templates.pages.home,
    events: {
    },
    render: function () {
        console.log('-- Home Page being rendered');
        this.basicRender();
        this.show();
        return this;
    }
});
