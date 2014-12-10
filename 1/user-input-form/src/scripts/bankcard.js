var $ = require('jquery');
var bankCardTemplate = require('../templates/bankcard.hbs');
$('form[data-bankcard]').append(bankCardTemplate());
