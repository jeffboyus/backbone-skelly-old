var Backbone = require('backbone');
var MeModel = require('./models/me');
var MainView = require('./views/main');
var AppRouter = require('./router');
var PeopleCollection = require('./models/people');


module.exports = {
    startApp: function () {
        // create app global
        window.app = this;

        // create me global
        window.me = new MeModel();

        // a sample collection
        this.people = new PeopleCollection();

        this.fetchStandardData(function (err) {
            if (err) {
                // handle errors;
                console.log(err);
            }

            // waiting for document ready
            $(function () {
                // start our router
                // init our URL handlers and the history tracker
                app.router = new AppRouter();
                app.history = Backbone.history;

                app.view = new MainView({
                    model: me,
                    el: document.body
                }).render();

                // we have what we need, we can now start our router and show the appropriate page
                app.history.start({pushState: true, root: '/'});
            });
        });
    },

    fetchStandardData: function (mainCallback) {
        this.people.fetch({success: mainCallback});
        // some fake data

        // var self = this;
        // async.parallel([
        //     function (cb) {
        //         // self.tasks.fetch({success: cb});
        //     },
        //     function (cb) {
        //         // me.fetch({success: cb});
        //     }
        // ], mainCallback);
    },

    // This is how you navigate around the app.
    // this gets called by a global click handler that handles
    // all the <a> tags in the app.
    // it expects an absolute local url.
    // for example: "/costello/settings".
    navigate: function (page) {
        var url = (page.charAt(0) === '/') ? page.slice(1) : page;
        app.history.navigate(url, true);
    },

    // this is what handles all the page rendering and
    // setting the correct page indicator etc.
    // It's done at this so that views don't have to worry
    // about their page position.
    // It simply matches urls to figure out which item should
    // be 'active'.
    renderPage: function (view) {
        var container = $('#pages');

        if (app.currentPage) {
            app.currentPage.hide();
        }

        // store reference to current page
        app.currentPage = view;

        // we call show
        container.append(view.show().el);
    }
};

module.exports.startApp();
