var _ = require('underscore'),
    Backbone = require('backbone');

module.exports = Backbone.Model.extend({
    defaults: {
    },
    initialize: function () {
        if(window.location.hostname === 'm.pnl.gov') {
            this.set('apiRoute', 'https://m.pnl.gov/connect/api')
        }

        this.handleOrientationValueChange();
        window.addEventListener('orientationchange', function () {
            me.handleOrientationValueChange();
        });

        FastClick.attach(document.body);
    },
    handleOrientationValueChange: function () {
        this.set('orientation', this.getWindowOrientation());
    },
    getWindowOrientation: function () {
        if(window.orientation == 90 || window.orientation == -90) { 
            return "landscape";
        }
        return "portrait";
    }
});
