'use strict';
const Vue = require('vue');
const _ = require('lodash');
const fieldTemplate = require('../../templates/v-textfield.vue');

const Component = Vue.extend({
  template: fieldTemplate,
	data: function () {
		return {
			label: '',
			value: '',
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

Vue.component('v-textfield', Component);

module.exports = Component;
