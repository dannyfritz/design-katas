'use strict';
require('./views/vue.js');
const Home = require('./views/pages/home.js');

const home = new Home({
	data: {
		categories: [
			{label: 'Games'},
			{label: 'Programs'},
			{label: 'About Me'}
		]
	}
});
home.$appendTo('body');
