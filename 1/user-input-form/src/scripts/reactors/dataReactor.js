'use strict';
const Reactor = require('nuclear-js').Reactor;
const numbersStore = require('../stores/numbersStore.js');

module.exports = Reactor({
	stores: {
		numbers: numbersStore
	}
});
