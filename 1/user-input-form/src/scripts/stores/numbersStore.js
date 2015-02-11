'use strict';
const Store = require('nuclear-js').Store;
const map = require('immutable').Map;

module.exports = Store({
	getInitialState: function () {
		return [];
	},
	initialize: function () {
		this.on('addNumber',
			function (state, payload) {
				return state.push(map(
					{
						number: payload
					}
				));
			}
		);
	}
});
