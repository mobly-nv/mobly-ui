import { action } from '@storybook/addon-actions';

import { createElement } from '../helpers';

export default {
	title: 'Switch',
};

// <div class="c-switch">
// 	<div class="c-switch__slider"></div>
// 	// OR
// 	<label class="c-switch__option">
// 		<input class="c-switch__input" type="radio" />
// 		<span class="c-switch__label"></span>
// 	</label
// 	<label>
// 		<input class="c-switch__input" type="radio" />
// 		<span class="c-switch__label"></span>
// 	</label
// </div>

export const Default = () => {
	const radio = createElement(['c-switch']);
	const option = createElement(['c-switch__option'], 'label')
	option.for = 'switch-1';
	const input = createElement(['c-switch__input'], 'input');
	input.checked = true;
	input.id = 'switch-1';
	input.type = 'radio';
	input.onchange = function() {
		input2.checked = !input2.checked
		action('Changed radio');
	}
	const label = createElement(['c-switch__label'], 'span');
	label.innerText = 'Radio 1'
	option.append(input, label)
	const option2 = createElement(['c-switch__option'], 'label')
	option2.for = 'switch-2';
	const input2 = createElement(['c-switch__input'], 'input');
	input2.checked = false;
	input2.id = 'switch-2';
	input2.type = 'radio';
	input2.onchange = function() {
		input.checked = !input.checked
		action('Changed radio');
	}
	const label2 = createElement(['c-switch__label'], 'span');
	label2.innerText = 'Radio 2';
	option2.append(input2, label2);
	radio.append(option, option2);
	return radio;
};
