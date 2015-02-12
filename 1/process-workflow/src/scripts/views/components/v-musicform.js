'use strict';
const Vue = require('vue');
const musicFormTemplate = require('../../templates/v-musicform.vue');

const UserForm = Vue.extend({
	template: musicFormTemplate,
	data: function () {
		return {};
	}
});

Vue.component('v-musicform', UserForm);
