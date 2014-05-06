var HumanModel = require('human-model');

// enable strict mode
'use strict';

module.exports = HumanModel.define({
	seal: true,
	extraProperties: 'reject',
	props: {
		id: {
			type: 'number',
			setOnce: true
		},
		firstName: ['string', true],
		lastName: ['string', true],
		coolnessFactor: {
			type: 'number',
            // you can optionally provide your own test function
            test: function (val) {
                if (val < 0 || val > 15) {
                    return 'Invalid coolness factor: ' +  val;
                }
            }
        }
	},
	derived: {
		appUrl: {
			deps: ['id'],
			fn: function () {
				return '/people/' + this.id;
			}
		},
		fullName: {
			deps: ['firstName', 'lastName'],
			fn: function () {
				return this.get('firstName') + ' ' + this.get('lastName');
			}
		}
	},
	avatar: function (name, size) {
		return 'http://robohash.org/' + encodeURIComponent(name) + '?size=' + size + 'x' + size;
	}
});
