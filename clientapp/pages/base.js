var _ = require('underscore');
var HumanView = require('human-view');


module.exports = HumanView.extend({
	show: function () {
        var title = _.result(this, 'title');

        // scroll page to top
        $('body').scrollTop(0);

        // call render
        this.render();

        // set the class so it comes into view
        this.$el.addClass('active');

        // set the document title
        document.title = title ? title + ' • PNNL' : 'PNNL';

        // trigger an event to the page model in case we want to respond
        this.trigger('pageloaded');

        return this;
    },
    hide: function () {
        // remove the headerClass
        $('header').removeClass(_.result(this, 'headerClass'));

        // hide the page
        this.$el.removeClass('active');

        // tell the model we're bailing
        this.trigger('pageunloaded');

        // unbind all events bound for this view
        this.animateRemove();

        return this;
    }
});
