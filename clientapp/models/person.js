var Backbone = require('backbone');


module.exports = Backbone.Model.extend({
    fullName: function () {
        return this.get('firstName') + ' ' + this.get('lastName');
    },
    avatar: function (size) {
        return 'http://robohash.org/' + encodeURIComponent(this.fullName()) + '?size=' + size + 'x' + size;
    },
    appUrl: function () {
        return '/people/' + this.id;
    }
});
