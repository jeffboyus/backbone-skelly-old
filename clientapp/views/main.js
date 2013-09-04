var _ = require('underscore');
var HumanView = require('human-view');
var templates = require('../templates');


module.exports = HumanView.extend({
    template: templates.body,
    events: {
        'click a.back': 'clickBackNavigation',
        'click a[href]': 'handleLinkClick'
    },
    initialize: function () {
        // this marks the correct nav item selected
        app.history.on('route', this.updateActiveNav, this);
    },
    render: function () {
        console.log('### Main View Render ###');

        // some additional stuff we want to add to the document head
        $('head').append(templates.head());

        // render contents of the <body> tag
        this.renderAndBind({me: me});

        console.log('calling delegate');
        _.defer(_.bind(this.delegateEvents, this));

        $(window).on('orientationchange', _.bind(this.handleOrientationChange, this));
        this.handleOrientationChange();

        //window.FastClick.attach(document.body);

        return this;
    },
    handleLinkClick: function (e) {
        // handle case where <a> is wrapping some other content
        var target = $(e.target);
        var aEl = target.is('a') ? target[0] : target.closest('a')[0];

        // check if it's local (this way external links still work)
        if (window.location.host === aEl.host) {
            app.navigate(aEl.pathname);
            return false;
        }
    },
    clickBackNavigation: function (e) {
        e.preventDefault();
        app.router.back();
    },
    handleOrientationChange: function () {
        if (window.orientation === 90 || window.orientation === -90) {
            me.set('orientation', 'landscape');
        } else {
            me.set('orientation', 'portrait');
        }
    },
    updateActiveNav: function () {
        var pathname = window.location.pathname;
        $('.nav a').each(function () {
            var navArray = _.compact($(this).attr('href').split('/')).join('/').toLowerCase(),
                pathArray = _.compact(pathname.split('/')).join('/').toLowerCase();

            if (pathArray === navArray) {
                $(this).parent().addClass('active');
            } else {
                $(this).parent().removeClass('active');
            }
        });
    }
});
