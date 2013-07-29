var Backbone = require('backbone'),
    _ = require('underscore');


module.exports = Backbone.View.extend({
	basicRender: function(context) {
		var currentEl = this.el;
        this.setElement(this.template(context || {}));
        $(currentEl).replaceWith(this.el);
        this.handleBindings();
	},
    show: function () {
        $('section').removeClass('current');
        $(this.el).addClass('current');
    },
    handleBindings: function () {
        var self = this;
        if (this.contentBindings) {
            _.each(this.contentBindings, function (selector, key) {
                var func = function () {
                    var el = (selector.length > 0) ? self.$(selector) : $(self.el);
                    el.html(self.model.get(key));
                };
                self.listenTo(self.model, 'change:' + key, func);
                func();
            });
        }
        if (this.imageBindings) {
            _.each(this.imageBindings, function (selector, key) {
                var func = function () {
                    var el = (selector.length > 0) ? self.$(selector) : $(self.el);
                    el.attr('src', self.model.get(key));
                };
                self.listenTo(self.model, 'change:' + key, func);
                func();
            });
        }
        if (this.classBindings) {
            _.each(this.classBindings, function (selector, key) {
                var func = function () {
                    var newValue = self.model.get(key),
                        prev = self.model.previous(key),
                        el = (selector.length > 0) ? self.$(selector) : $(self.el);
                        
                    if (_.isBoolean(newValue)) {
                        if (newValue) {
                            el.addClass(key);
                        } else {
                            el.removeClass(key);
                        }
                    } else {
                        if (prev) el.removeClass(prev);
                        el.addClass(newValue);
                    }
                };
                self.listenTo(self.model, 'change:' + key, func);
                func();
            });
        }
        if (this.inputBindings) {
            _.each(this.inputBindings, function (selector, key) {
                var func = function () {
                    var el = (selector.length > 0) ? self.$(selector) : $(self.el);
                    el.val(self.model.get(key));
                };
                self.listenTo(self.model, 'change:' + key, func);
                func();
            });
        }
        return this;
    }
});
