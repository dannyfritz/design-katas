'use strict';
const Reactor = require('nuclear-js').Reactor;
const userStore = require('../stores/user.js');

module.exports = Reactor({
	stores: {
		user: userStore
	}
});
