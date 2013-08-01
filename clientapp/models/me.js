var // _ = require('underscore'),
    Backbone = require('backbone');

module.exports = Backbone.Model.extend({
    defaults: {
    },
    initialize: function () {
        // change for your API
        if(window.location.hostname === 'm.pnl.gov') {
            this.set('apiRoute', 'https://m.pnl.gov/api')
        }

        this.handleOrientationValueChange();
        window.addEventListener('orientationchange', function () {
            me.handleOrientationValueChange();
        });

        window.FastClick.attach(document.body);
    },
    handleOrientationValueChange: function () {
        this.set('orientation', this.getWindowOrientation());
    },
    getWindowOrientation: function () {
        if (window.orientation == 90 || window.orientation == -90) { 
            return 'landscape';
        }
        return 'portrait';
    }
});
