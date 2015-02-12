'use strict';
const Vue = require('vue');
const $ = require('jquery');
const processTemplate = require('../templates/process.vue');

const Process = Vue.extend({
	el: function () {
		return document.createElement('div');
	},
	template: processTemplate,
	data: function () {
		return {
			step: 0
		};
	},
	ready: function () {
		this.showStep(this.step);
	},
	computed: {
		canPrevious: function () {
			return this.step > 0;
		},
		canNext: function () {
			return this.step < this.totalSteps() - 1;
		},
		percentComplete: function () {
			return this.step / (this.totalSteps() - 1);
		}
	},
	methods: {
		showStep: function (step) {
			$(this.$el)
				.find('[data-hook~=steps]')
				.css('left', -step * 100 + 'vw');
		},
		totalSteps: function () {
			return $(this.$el).find('[data-hook~=steps]').children().length;
		},
		setStep: function (step) {
			if (step < 0) {
				return;
			}
			else if (step >= this.totalSteps()) {
				return;
			}
			this.step = step;
			this.showStep(this.step);
		},
		next: function () {
			this.setStep(this.step + 1);
		},
		previous: function () {
			this.setStep(this.step - 1);
		}
	}
});
module.exports = Process;
