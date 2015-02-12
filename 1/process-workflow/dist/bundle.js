(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";
require("./views/vue.js");
var ProcessView = require("./views/process.js");
var bioReactor = require("./reactors/bio.js");

var processView = new ProcessView();
global.process = processView;
processView.$appendTo("body");

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./reactors/bio.js":2,"./views/process.js":17,"./views/vue.js":18}],2:[function(require,module,exports){
"use strict";
var Reactor = require("nuclear-js").Reactor;
var userStore = require("../stores/user.js");

module.exports = Reactor({
	stores: {
		user: userStore
	}
});

},{"../stores/user.js":3,"nuclear-js":"nuclear-js"}],3:[function(require,module,exports){
"use strict";
var Store = require("nuclear-js").Store;

module.exports = Store({
	getInitialState: function () {
		return {
			name: "",
			age: null,
			bio: "",
			interests: []
		};
	},
	initialize: function () {
		this.on("setName", function (state, name) {
			return state.set("name", name);
		});
		this.on("setAge", function (state, age) {
			return state.set("age", age);
		});
		this.on("setBio", function (state, bio) {
			return state.set("bio", bio);
		});
		// this.on('addInterest', function (state, interest) {
		//
		// });
		// this.on('removeInterest', function (state, interest) {
		//
		// });
	}
});

},{"nuclear-js":"nuclear-js"}],4:[function(require,module,exports){
module.exports = '<h1>Tell Us About Yourself!!!</h1>\n<v-progressbar v-with="progress: percentComplete"></v-progressbar>\n<button v-on="click: previous" v-show="canPrevious">previous</button>\n<button v-on="click: next" v-show="canNext">next</button>\n<div class="process__frame">\n	<div data-hook="steps" class="process__steps">\n		<v-userform></v-userform>\n		<v-musicform></v-musicform>\n		<v-formcomplete></v-formcomplete>\n	</div>\n</div>\n<button v-on="click: previous" v-show="canPrevious">previous</button>\n<button v-on="click: next" v-show="canNext">next</button>\n';
},{}],5:[function(require,module,exports){
module.exports = '<h2>COMPLETE</h2>\n';
},{}],6:[function(require,module,exports){
module.exports = '<h2>Music</h2>\n';
},{}],7:[function(require,module,exports){
module.exports = '<div class="v-field" v-class="v-field--active : isActive">\n	<label class="v-field__label" v-text="label"></label>\n	<input class="v-field__input" type="number" v-on="focus: activate, blur: deactivate" v-model="value">\n</div>\n';
},{}],8:[function(require,module,exports){
module.exports = '<div class="v-progressbar">\n	<div class="v-progressbar__bar" v-style="width: progress*100 + \'%\'"></div>\n</div>\n';
},{}],9:[function(require,module,exports){
module.exports = '<div class="v-field" v-class="v-field--active : isActive">\n	<label class="v-field__label" v-text="label"></label>\n	<input class="v-field__input" type="text" v-on="focus: activate, blur: deactivate" v-model="value">\n</div>\n';
},{}],10:[function(require,module,exports){
module.exports = '<h2>User Form!</h2>\n<v-textfield v-with="label: \'Name\', value: name"></v-textfield>\n<v-numberfield v-with="label: \'Age\', value: age"></v-numberfield>\n<v-textfield v-with="label: \'Bio\', value: bio"></v-textfield>\n';
},{}],11:[function(require,module,exports){
"use strict";
var Vue = require("vue");
var musicFormTemplate = require("../../templates/v-formcomplete.vue");

Vue.component("v-formcomplete", {
	template: musicFormTemplate,
	data: function () {
		return {};
	}
});

},{"../../templates/v-formcomplete.vue":5,"vue":"vue"}],12:[function(require,module,exports){
"use strict";
var Vue = require("vue");
var musicFormTemplate = require("../../templates/v-musicform.vue");

var UserForm = Vue.extend({
	template: musicFormTemplate,
	data: function () {
		return {};
	}
});

Vue.component("v-musicform", UserForm);

},{"../../templates/v-musicform.vue":6,"vue":"vue"}],13:[function(require,module,exports){
"use strict";
var Vue = require("vue");
var _ = require("lodash");
var fieldTemplate = require("../../templates/v-numberfield.vue");

var Component = Vue.extend({
	template: fieldTemplate,
	data: function () {
		return {
			label: "",
			value: 0,
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

Vue.component("v-numberfield", Component);

module.exports = Component;

},{"../../templates/v-numberfield.vue":7,"lodash":"lodash","vue":"vue"}],14:[function(require,module,exports){
"use strict";
var Vue = require("vue");
var template = require("../../templates/v-progressbar.vue");

Vue.component("v-progressbar", {
	template: template,
	data: function () {
		return {
			progress: 0
		};
	}
});

},{"../../templates/v-progressbar.vue":8,"vue":"vue"}],15:[function(require,module,exports){
"use strict";
var Vue = require("vue");
var _ = require("lodash");
var fieldTemplate = require("../../templates/v-textfield.vue");

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

Vue.component("v-textfield", Component);

module.exports = Component;

},{"../../templates/v-textfield.vue":9,"lodash":"lodash","vue":"vue"}],16:[function(require,module,exports){
"use strict";
var Vue = require("vue");
var userFormTemplate = require("../../templates/v-userform.vue");

var UserForm = Vue.extend({
	template: userFormTemplate,
	data: function () {
		return {};
	}
});

Vue.component("v-userform", UserForm);

},{"../../templates/v-userform.vue":10,"vue":"vue"}],17:[function(require,module,exports){
"use strict";
var Vue = require("vue");
var $ = require("jquery");
var processTemplate = require("../templates/process.vue");

var Process = Vue.extend({
	el: function () {
		return document.createElement("div");
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
			$(this.$el).find("[data-hook~=steps]").css("left", -step * 100 + "vw");
		},
		totalSteps: function () {
			return $(this.$el).find("[data-hook~=steps]").children().length;
		},
		setStep: function (step) {
			if (step < 0) {
				return;
			} else if (step >= this.totalSteps()) {
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

},{"../templates/process.vue":4,"jquery":"jquery","vue":"vue"}],18:[function(require,module,exports){
"use strict";
require("./components/v-formcomplete.js");
require("./components/v-progressbar.js");
require("./components/v-textfield.js");
require("./components/v-numberfield.js");
require("./components/v-userform.js");
require("./components/v-musicform.js");

},{"./components/v-formcomplete.js":11,"./components/v-musicform.js":12,"./components/v-numberfield.js":13,"./components/v-progressbar.js":14,"./components/v-textfield.js":15,"./components/v-userform.js":16}]},{},[1])


//# sourceMappingURL=bundle.js.map