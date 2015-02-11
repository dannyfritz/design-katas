'use strict';
const Vue = require('vue');
const numberTemplate = require('../../templates/name.vue');

const Component = Vue.extend({
  template: numberTemplate,
	data: function () {
		return {
			first: '',
			last: ''
		};
	}
});

Vue.component('v-name', Component);

module.exports = Component;
