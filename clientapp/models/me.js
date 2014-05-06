var HumanModel = require('human-model'); // Human Model Docs: https://www.npmjs.org/package/human-model

// enable strict mode
'use strict';

module.exports  = HumanModel.define({
	// Strict mode in JS is pretty great and is fairly well supported in modern browsers.
	// If you want to be really hardcore about not letting you set properties that aren't defined, 
	// you can specify seal: true when defining your model.
	seal: true,

	// also throw errors for properties not defined
	// when set via `set`.
	extraProperties: 'reject',

	// props are for properties that exist on the server
	// Property names can be defined two different ways, either an array with [type, required, default], 
	// or an object: { type: 'string', required: true, default: '' , allowNull: false}
	props: {
		// id: {
		//     type: 'number',
		//     setOnce: true
		// },
		// firstName: ['string', true],
		// lastName: ['string', true]
	},

	// derived properties and their dependencies. If any dependency changes
	// that will also trigger a 'change' event on the derived property so
	// we know to re-render the template
	derived: {
		//fullName: {
		//	deps: ['firstName', 'lastName'],
		//		fn: function () {
		//			return this.get('firstName') + ' ' + this.get('lastName');
		//	}
		//},
	},

	// Session properties are browser state for a model
	// these trigger 'change' events when set, but are not
	// included when serializing or saving to server.
	session: {
		// selectedTasks: ['array', true, []],
		// lastPage: ['string', true, 'tasks'],
		// unread: ['boolean', true, false],
		// active: ['boolean', true, false]
		apiRoute: ['string', true, 'https://mdev.pnl.gov/api'],
		orientation: ['string', true, 'portrait'],

		// animation variables
		showLoadingScreen: ['boolean', true, false],
		loaderScreenMessage: ['string', true, 'Loading']
	},

	// child collections that will be initted. They will
	// be created at as a property of the same name as the
	// key. The child collection will also be given a reference
	// to its parent.
	collections: {
		// messages: Messages
	},
	initialize: function () {
		// change for your API
		if (window.location.hostname === 'm.pnl.gov') {
			this.set('apiRoute', 'https://m.pnl.gov/api');
		}
	}
});
