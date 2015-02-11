'use strict';
const Getter = require('nuclear-js').Getter;

module.exports = Getter('numbers', numbers => numbers.toJS());
