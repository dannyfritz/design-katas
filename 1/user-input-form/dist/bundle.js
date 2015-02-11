(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";
require("./views/vue.js");
var Form = require("./views/formView.js");
var form = new Form();
global.form = form;
form.$appendTo("body");

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./views/formView.js":11,"./views/vue.js":12}],2:[function(require,module,exports){
module.exports = '<v-field v-with="label: \'Address Line 1\', value: line1"></v-field>\n<v-field v-with="label: \'Address Line 2\', value: line2"></v-field>\n<v-field v-with="label: \'City\', value: city"></v-field>\n<v-field v-with="label: \'State\', value: state"></v-field>\n<v-field v-with="label: \'Zip\', value: zip"></v-field>\n';
},{}],3:[function(require,module,exports){
module.exports = '<input type="text" v-model="number">\n<input type="text" v-model="expiration">\n<input type="text" v-model="security">\n';
},{}],4:[function(require,module,exports){
module.exports = '<div class="v-field" v-class="v-field--active : isActive">\n	<label class="v-field__label" v-text="label"></label>\n	<input class="v-field__input" type="text" v-on="focus: activate, blur: deactivate" v-model="value">\n</div>\n';
},{}],5:[function(require,module,exports){
module.exports = '<form>\n	<v-name v-with="name"></v-name>\n	<v-address v-with="address"></v-address>\n	<div class="form__buttons">\n		<button>Submit</button>\n	</div>\n</form>\n';
},{}],6:[function(require,module,exports){
module.exports = '<v-field v-with="label: \'First Name\', value: firstname"></v-field>\n<v-field v-with="label: \'Last Name\', value: lastname"></v-field>\n';
},{}],7:[function(require,module,exports){
"use strict";
var Vue = require("vue");
var numberTemplate = require("../../templates/address.vue");

var Component = Vue.extend({
	template: numberTemplate,
	data: function () {
		return {
			line1: "",
			line2: "",
			city: "",
			zip: "",
			state: ""
		};
	}
});

Vue.component("v-address", Component);

module.exports = Component;

},{"../../templates/address.vue":2,"vue":"vue"}],8:[function(require,module,exports){
"use strict";
var Vue = require("vue");
var numberTemplate = require("../../templates/creditcard.vue");

var Component = Vue.extend({
	template: numberTemplate,
	data: function () {
		return {
			number: "",
			expiration: "",
			security: ""
		};
	}
});

Vue.component("v-creditcard", Component);

module.exports = Component;

},{"../../templates/creditcard.vue":3,"vue":"vue"}],9:[function(require,module,exports){
"use strict";
var Vue = require("vue");
var _ = require("lodash");
var fieldTemplate = require("../../templates/field.vue");

var Component = Vue.extend({
	template: fieldTemplate,
	data: function () {
		return {
			label: "",
			value: "",
			isActive: false
		};
	},
	methods: {
		activate: function () {
			this.isActive = true;
		},
		deactivate: function () {
			if (_.isEmpty(this.value)) {
				this.isActive = false;
			}
		}
	}
});

Vue.component("v-field", Component);

module.exports = Component;

},{"../../templates/field.vue":4,"lodash":"lodash","vue":"vue"}],10:[function(require,module,exports){
"use strict";
var Vue = require("vue");
var numberTemplate = require("../../templates/name.vue");

var Component = Vue.extend({
	template: numberTemplate,
	data: function () {
		return {
			first: "",
			last: ""
		};
	}
});

Vue.component("v-name", Component);

module.exports = Component;

},{"../../templates/name.vue":6,"vue":"vue"}],11:[function(require,module,exports){
"use strict";
var Vue = require("vue");
var $ = require("jquery");
var formTemplate = require("../templates/form.vue");

var Form = Vue.extend({
	template: formTemplate,
	el: function () {
		return document.createElement("div");
	},
	ready: function () {
		$(this.$el).find("form").on("submit", function (event) {
			event.preventDefault();
		});
	},
	data: function () {
		return {
			name: {
				first: "",
				last: ""
			},
			address: {
				line1: "",
				line2: "",
				city: "",
				zip: "",
				state: ""
			},
			creditcard: {
				number: "",
				expiration: "",
				security: ""
			}
		};
	}
});

module.exports = Form;

},{"../templates/form.vue":5,"jquery":"jquery","vue":"vue"}],12:[function(require,module,exports){
"use strict";
require("./components/address.js");
require("./components/creditcard.js");
require("./components/field.js");
require("./components/name.js");

},{"./components/address.js":7,"./components/creditcard.js":8,"./components/field.js":9,"./components/name.js":10}]},{},[1])


//# sourceMappingURL=bundle.js.map