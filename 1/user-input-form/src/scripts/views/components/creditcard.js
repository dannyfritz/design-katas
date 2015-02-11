'use strict';
const Vue = require('vue');
const numberTemplate = require('../../templates/creditcard.vue');

const Component = Vue.extend({
  template: numberTemplate,
	data: function () {
		return {
			number: '',
			expiration: '',
			security: ''
		};
	}
});

Vue.component('v-creditcard', Component);

module.exports = Component;
