<h1>Tell Us About Yourself!!!</h1>
<v-progressbar v-with="progress: percentComplete"></v-progressbar>
<button v-on="click: previous" v-show="canPrevious">previous</button>
<button v-on="click: next" v-show="canNext">next</button>
<div class="process__frame">
	<div data-hook="steps" class="process__steps">
		<v-userform></v-userform>
		<v-musicform></v-musicform>
		<v-formcomplete></v-formcomplete>
	</div>
</div>
<button v-on="click: previous" v-show="canPrevious">previous</button>
<button v-on="click: next" v-show="canNext">next</button>
