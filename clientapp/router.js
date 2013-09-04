var Backbone = require('backbone');
var HomePage = require('./pages/home');
var DetailPage = require('./pages/person');
var StaticPage = require('./pages/static');
var PeoplePage = require('./pages/people');
var templates = require('./templates');


module.exports = Backbone.Router.extend({
    routes: {
        '': 'home',
        'links': 'links',
        'people': 'peopleList',
        'people/:id': 'personDetail',
        '*actions': 'notFound' // matches http://example.com/#anything-here
    },

    initialize: function () {
        console.log('### Application Router Started ###');
        this.routesHit = 0;
        //keep count of number of routes handled by your application
        Backbone.history.on('route', function () { this.routesHit++; }, this);
    },

    // ------- ROUTE HANDLERS ---------

    home: function () {
        console.log('Router: Home');
        app.renderPage(new HomePage({
            model: me
        }));
    },

    personDetail: function (id) {
        console.log('Router: Something with id:', id);
        var model = app.people.get(id + '');
        if (model) {
            app.renderPage(new DetailPage({
                model: model,
                collection: app.people
            }));
        } else {
            this.notFound();
        }
    },

    peopleList: function () {
        app.renderPage(new PeoplePage({
            model: me,
            collection: app.people
        }));
    },

    links: function () {
        app.renderPage(new StaticPage(templates.pages.links));
    },

    notFound: function () {
        app.renderPage(new StaticPage(templates.pages.notFound));
    },

    // use by saying 'app.router.back();' from a 'back' action/link
    back: function () {
        if (this.routesHit > 1) {
            //more than one route hit -> user did not land to current page directly
            window.history.back();
        } else {
            //otherwise go to the home page. Use replaceState if available so
            //the navigation doesn't create an extra history entry
            this.navigate('/#/home', {trigger: true, replace: true});
        }
    }
});
