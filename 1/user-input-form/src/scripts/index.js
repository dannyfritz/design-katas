'use strict';
require('./views/vue.js');
const Form = require('./views/formView.js');
let form = new Form();
global.form = form;
form.$appendTo('body');
