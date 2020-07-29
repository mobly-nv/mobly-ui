import { action } from '@storybook/addon-actions';

import { createElement } from '../helpers';
import { createIcon } from './icon.stories';

const createRadio = (classList = [], innerText = 'Choose me!') => {
	const radio = createElement(['c-radio', ...classList], 'label');
	radio.for = 'radio';
	const input = createElement(['c-radio__field'], 'input');
	input.checked = false;
	input.id = 'radio';
	input.name = 'radio';
	input.type = 'radio';
	input.onchange = action('Changed radio');
	const iconWrapper = createElement(['c-radio__check-container'], 'span');
	const icon = createIcon(['c-radio__check'], 'check-small');
	iconWrapper.append(icon);
	const label = createElement(['c-radio__label'], 'span');
	label.innerText = innerText;
	radio.append(input, iconWrapper, label);
	return radio;
}

export default {
	title: 'Radio',
};

export const Default = () => createRadio();

export const Bordered = () => `
	<label class="c-radio c-radio--bordered" for="radio-bordered">
		<input class="c-radio__field" type="radio" id="radio-bordered" />
		<span class="c-radio__check-container">
			<span class="c-radio__check c-icon-fill">check-small</span>
		</span>
		<span class="c-radio__label">Radio 1</span>
	</label>

	<label class="c-radio c-radio--bordered c-radio--active" for="radio-active">
		<input checked class="c-radio__field" type="radio" id="radio-active" />
		<span class="c-radio__check-container">
			<span class="c-radio__check c-icon-fill">check-small</span>
		</span>
		<span class="c-radio__label">Radio </span>
	</label>
`;

export const Icon = () => `
	<label class="c-radio c-radio--bordered c-radio--icon" for="radio-bordered">
		<input class="c-radio__field" type="radio" id="radio-bordered" />
		<span class="c-radio__check-container">
			<span class="c-radio__check c-icon-fill">check-small</span>
		</span>
		<span class="c-radio__label">Radio 1</span>
	</label>

	<label class="c-radio c-radio--bordered c-radio--icon c-radio--active" for="radio-active">
		<input checked class="c-radio__field" type="radio" id="radio-active" />
		<span class="c-radio__check-container">
			<span class="c-radio__check c-icon-fill">check-small</span>
		</span>
		<span class="c-radio__icon c-icon-line">fuel-pump</span>
		<div class="u-flex u-flex-col u-text-center">
			<strong class="u-text-lg u-text-medium">Petrol</strong>
			<span class="u-text-xs u-mt-px">E5 or E10</span>
		</div>
	</label>
`;

export const error = () => createRadio(['c-radio--error']);
