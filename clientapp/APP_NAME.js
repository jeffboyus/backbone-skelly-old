var Backbone = require('backbone'),
    // async = require('async'),
    MeModel = require('models/me'),
    MainView = require('views/main'),
    AppRouter = require('APP_NAMERouter');


module.exports = {
    startApp: function () {
        // create app global
        window.app = this;

        // create me global
        window.me = new MeModel();

        this.fetchStandardData(function (err) {
            if (err) {
                // handle errors;
                console.log(err);
            }

            app.view = new MainView({
                model: me,
                el: $('main')
            }).render();

            // start our router
            // init our URL handlers and the history tracker
            app.router = new AppRouter();
            app.history = Backbone.history;
            // we have what we need, we can now start our router and show the appropriate page
            app.history.start({pushState: false, root: '/'});
        });
    },

    fetchStandardData: function (mainCallback) {
        // var self = this;
        // async.parallel([
        //     function (cb) {
        //         // self.tasks.fetch({success: cb});
        //     },
        //     function (cb) {
        //         // me.fetch({success: cb});
        //     } 
        // ], mainCallback);
        mainCallback();
    }
};