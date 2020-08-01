export default {
	title: 'Input',
};

export const Default = () => `
	<div class="c-input">
		<label class="c-input__label">Label</label>
		<div class="c-input__field-container">
			<input class="c-input__field"></div>
		</div>
	</div>
`;

export const Required = () => `
	<div class="c-input c-input--required">
		<label class="c-input__label">Label</label>
		<div class="c-input__field-container">
			<input class="c-input__field" />
		</div>
	</div>
`;

export const Addon = () => `
	<div class="c-input c-input--addon-left c-input--brand-eu">
		<label class="c-input__label">Label</label>
		<div class="c-input__field-container">
			<div class="c-input__addon">
				<img src="/static/img/eu.png" alt="belgië eu logo" />
			</div>
			<input class="c-input__field" />
		</div>
	</div>
`;

export const NoFloatingLabel = () => `
	<div class="c-input c-input--no-float">
		<label class="c-input__label">Label</label>
		<div class="c-input__field-container">
			<input class="c-input__field" />
		</div>
	</div>
`;

export const Large = () => `
	<div class="c-input c-input--lg">
		<label class="c-input__label">Label</label>
		<div class="c-input__field-container"
			<input class="c-input__field" />
		</div>
	</div>
`;

export const Error = () => `
	<div class="c-input c-input--error">
		<label class="c-input__label">Label</label>
		<div class="c-input__field-container"
			<input class="c-input__field" />
		</div>
	</div>
`;
