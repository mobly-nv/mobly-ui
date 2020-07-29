import { action } from '@storybook/addon-actions';

import { createElement } from '../helpers';
import { createIcon } from './icon.stories';

const createCheckbox = (classList = [], innerText = 'Check me!') => {
	const checkbox = createElement(['c-checkbox', ...classList], 'label');
	checkbox.for = 'checkbox';
	const input = createElement(['c-checkbox__field'], 'input');
	input.checked = false;
	input.id = 'checkbox';
	input.name = 'checkbox';
	input.type = 'checkbox';
	input.onchange = action('Changed checkbox');
	const iconWrapper = createElement(['c-checkbox__icon-container'], 'span');
	const icon = createIcon(['c-checkbox__icon'], 'check-small');
	iconWrapper.append(icon);
	const label = createElement(['c-checkbox__label'], 'span');
	label.innerText = innerText
	checkbox.append(input, iconWrapper, label);
	return checkbox;
};

export default {
	title: 'Checkbox',
};

export const Default = () => createCheckbox();

export const Error = () => createCheckbox(['c-checkbox--error']);
