var _ = require('underscore'),
    templates = require('templates'),
    PageView = require('pages/base');


module.exports = PageView.extend({
    template: templates.pages.menu,
    events: {
    },
    render: function () {
        console.log('-- Menu Page being rendered');
        this.basicRender();
        this.show();
        return this;
    }
});
