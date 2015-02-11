'use strict';
const Vue = require('vue');
const numberTemplate = require('../../templates/address.vue');

const Component = Vue.extend({
  template: numberTemplate,
	data: function () {
		return {
			line1: '',
			line2: '',
			city: '',
			zip: '',
			state: ''
		};
	}
});

Vue.component('v-address', Component);

module.exports = Component;
