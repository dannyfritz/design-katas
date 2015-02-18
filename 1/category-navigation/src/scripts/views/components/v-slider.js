'use strict';
const Vue = require('Vue');
const $ = require('jquery');
const template = require('../templates/v-slider.vue');

Vue.component('v-slider', {
	template: template,
	data: function () {
		return {
			categories: []
		};
	},
	methods: {
		slide: function () {
			$(this.$el).toggleClass('v-slider--open');
		}
	}
});
