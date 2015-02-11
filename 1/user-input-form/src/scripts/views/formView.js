'use strict';
const Vue = require('vue');
const $ = require('jquery');
const formTemplate = require('../templates/form.vue');

let Form = Vue.extend({
	template: formTemplate,
	el: function () {
		return document.createElement('div');
	},
	ready: function () {
		$(this.$el).find('form').on('submit', function (event) {
			event.preventDefault();
		});
	},
	data: function () {
		return {
			name: {
				first: '',
				last: ''
			},
			address: {
				line1: '',
				line2: '',
				city: '',
				zip: '',
				state: ''
			},
			creditcard: {
				number: '',
				expiration: '',
				security: ''
			}
		};
	}
});

module.exports = Form;
