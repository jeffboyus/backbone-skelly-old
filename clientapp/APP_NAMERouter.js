var // _ = require('underscore'),
    Backbone = require('backbone');

module.exports = Backbone.Router.extend({
	routes: {
		'': 'home',
		'home': 'home',
		'menu': 'menu',
		'something/:id': 'something',
		'*actions': 'defaultRoute' // matches http://example.com/#anything-here
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
		app.view.homeView.render();
	},

	menu: function () {
		console.log('Router: Menu');
		app.view.menuView.render();
	},
 
	something: function (id) {
		console.log('Router: Something with id:', id);
		$('section').removeClass('current');
		$('#something').addClass('current');
	},

	defaultRoute: function () {
		console.log('Router: Default');
		$('section').removeClass('current');
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