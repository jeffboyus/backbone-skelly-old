var // _ = require('underscore'),
    Backbone = require('backbone'),
    // templates = require('templates'),
    HomePageView = require('pages/home'),
    MenuPageView = require('pages/menu');


module.exports = Backbone.View.extend({
    events: {
        'click a.back': 'clickBackNavigation',
        'click a.navigate': 'clickLinkNavigation'
    },
    render: function () {
        // Only need to attach the .render() if we want to render those pages on load
        // otherwise you should wait until they are called and have the data they need

        console.log('### Main View Render ###');

        // set up page container for home page and render it
        this.homeView = new HomePageView({
            el: this.$('#home').get(0)
        });

        // set up page container for menu page and render it
        this.menuView = new MenuPageView({
            el: this.$('#menu').get(0)
        });

        return this;
    },
    clickBackNavigation: function (e) {
        e.preventDefault();
        app.router.back();
    },
    clickLinkNavigation: function (e) {
        e.preventDefault();
        var route = $(e.currentTarget).attr('href');
        app.router.navigate(route, {trigger: true});
    }
});
