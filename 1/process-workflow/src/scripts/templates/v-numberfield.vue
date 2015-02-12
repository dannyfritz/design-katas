<div class="v-field" v-class="v-field--active : isActive">
	<label class="v-field__label" v-text="label"></label>
	<input class="v-field__input" type="number" v-on="focus: activate, blur: deactivate" v-model="value">
</div>
