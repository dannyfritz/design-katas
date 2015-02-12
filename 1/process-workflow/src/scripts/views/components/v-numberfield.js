'use strict';
const Vue = require('vue');
const _ = require('lodash');
const fieldTemplate = require('../../templates/v-numberfield.vue');

const Component = Vue.extend({
  template: fieldTemplate,
	data: function () {
		return {
			label: '',
			value: 0,
			isActive: false
		};
	},
	methods: {
		activate: function () {
			this.isActive = true;
		},
		deactivate: function () {
			if (_.isEmpty(this.value)) {
				this.isActive = false;
			}
		}
	}
});

Vue.component('v-numberfield', Component);

module.exports = Component;
