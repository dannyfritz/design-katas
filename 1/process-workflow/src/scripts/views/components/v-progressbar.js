'use strict';
const Vue = require('vue');
const template = require('../../templates/v-progressbar.vue');

Vue.component('v-progressbar', {
  template: template,
	data: function () {
		return {
			progress: 0
		};
	}
});
