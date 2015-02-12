'use strict';
const Store = require('nuclear-js').Store;

module.exports = Store({
	getInitialState: function () {
		return {
			name: '',
			age: null,
			bio: '',
			interests: []
		};
	},
	initialize: function () {
		this.on('setName', function (state, name) {
			return state.set('name', name);
		});
		this.on('setAge', function (state, age) {
			return state.set('age', age);
		});
		this.on('setBio', function (state, bio) {
			return state.set('bio', bio);
		});
		// this.on('addInterest', function (state, interest) {
		//
		// });
		// this.on('removeInterest', function (state, interest) {
		//
		// });
	}
});
