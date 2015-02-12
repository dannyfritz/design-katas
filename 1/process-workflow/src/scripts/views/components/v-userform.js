'use strict';
const Vue = require('vue');
const userFormTemplate = require('../../templates/v-userform.vue');

const UserForm = Vue.extend({
	template: userFormTemplate,
	data: function () {
		return {};
	}
});

Vue.component('v-userform', UserForm);
