var _ = require('underscore'),
    Backbone = require('backbone');

module.exports = Backbone.Router.extend({
	routes: {
		'home': 'home',
		'menu': 'menu',
		'something/:id': 'something',
		'*actions': 'defaultRoute' // matches http://example.com/#anything-here
	},

	initialize: function () {
		console.log('### Application Router Started ###');
	},

	// ------- ROUTE HANDLERS ---------

	home: function () {
		console.log('Router: Home');
		app.view.homeView.render();
	},

	menu: function(){
		console.log('Router: Menu');
		app.view.menuView.render();
	},
 
	something: function(id){
		console.log('Router: Something with id:', id);
		$('section').removeClass('current');
		$('#something').addClass('current');
	},

	defaultRoute: function () {
		console.log('Router: Default');
		$('section').removeClass('current');
	}
});