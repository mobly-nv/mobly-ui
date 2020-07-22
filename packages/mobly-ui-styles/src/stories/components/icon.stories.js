import { createElement, ICON_NAMES } from '../helpers';


export const createIcon = (classList = [], name = '', type = 'fill') => {
	const icon = document.createElement('span');
	icon.classList.add(...classList, `c-icon-${type}`);
	icon.innerText = name;
	return icon;
};

export default {
  title: 'Icon',
  excludeStories: ['createIcon'],
};

export const Fill = () => {
	const iconsList = createElement(['u-flex', 'u-flex-wrap']);

	ICON_NAMES.forEach(name => {
		const iconWrapper = createElement(['u-text-lg', 'u-mr-2', 'u-mb-2']);
		iconWrapper.append(createIcon([], name));
		iconsList.append(iconWrapper);
	});

	return iconsList;
};

export const Line = () => {
	const iconsList = createElement(['u-flex', 'u-flex-wrap']);

	ICON_NAMES.forEach(name => {
		const iconWrapper = createElement(['u-text-lg', 'u-mr-2', 'u-mb-2']);
		iconWrapper.append(createIcon([], name, 'line'));
		iconsList.append(iconWrapper);
	});

	return iconsList;
};
