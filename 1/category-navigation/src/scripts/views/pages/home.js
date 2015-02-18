'use strict';
const Vue = require('Vue');
const template = require('../templates/home.vue');

module.exports = Vue.extend({
	template: template,
	el: () => document.createElement('div'),
	data: function () {
		return {
			categories: []
		};
	}
});
