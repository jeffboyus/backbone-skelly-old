var Backbone = require('backbone');


module.exports = Backbone.Model.extend({
    defaults: {
    },
    initialize: function () {
        // change for your API
        if (window.location.hostname === 'm.pnl.gov') {
            this.set('apiRoute', 'https://m.pnl.gov/api');
        }
    }
});
