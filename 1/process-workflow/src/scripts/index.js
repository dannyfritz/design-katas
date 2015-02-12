'use strict';
require('./views/vue.js');
const ProcessView = require('./views/process.js');
const bioReactor = require('./reactors/bio.js');

const processView = new ProcessView();
global.process = processView;
processView.$appendTo('body');
