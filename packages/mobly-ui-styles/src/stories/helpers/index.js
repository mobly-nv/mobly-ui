export const createElement = (classList = [], tag = 'div') => {
	const element = document.createElement(tag);
	element.classList.add(...classList);
	return element;
};

export const createInput = (classList = []) => {
	const input = createElement(['c-input', ...classList])
	const field = createElement(['c-input__field'], 'input');
	field.id = 'input-text';
	field.name = 'input-text';
	field.type = 'text';
	field.onchange = action('Changed input');
	field.onfocus = () => {
		field.classLis.add('c-input--is-focused');
	};
	field.onblur = () => {
		field.classLis.remove('c-input--is-focused')
	};
	return input;
};

export * from './mocks';
