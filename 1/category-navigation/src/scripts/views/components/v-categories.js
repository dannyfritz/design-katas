'use strict';
const Vue = require('Vue');
const template = require('../templates/v-categories.vue');

Vue.component('v-categories', {
	template: template,
	data: function () {
		return {
			categories: []
		};
	}
});
