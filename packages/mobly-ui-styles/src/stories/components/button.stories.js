import { action } from '@storybook/addon-actions';

const createButton = (classList = [], innerText = 'Click me!', type = 'button') => {
	const button = document.createElement('button');
	button.classList.add('c-button', ...classList);
	button.innerText = innerText;
	button.type = type;
	button.addEventListener('click', action('Clicked button'));
	return button;
}

export default {
  title: 'Button',
};

// Colors
export const Default = () => createButton();
export const Blue = () => createButton(['c-button--blue']);

// Variants
export const Outline = () => createButton(['c-button--outline']);
export const Transparent = () => createButton(['c-button--transparent']);

// Icon
export const Icon = () => {
	const iconButton = createButton(['c-button--icon'], '');
	iconButton.innerHTML = '<i class="c-button__icon c-icon-fill">add</i>'
	return iconButton;
};

// Sizes
export const Fluid = () => createButton(['c-button--fluid']);
export const Small = () => createButton(['c-button--sm']);
export const ExtraSmall = () => createButton(['c-button--xs']);
