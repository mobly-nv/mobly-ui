import React from 'react';

import { Icon } from '../Icon';
import { Loader } from '../Loader';

export const SELECT_COMPONENTS = {
	ClearIndicator: () => <Icon className="c-react-select__clear-indicator" name="cross" />,
	DropdownIndicator: () => (
		<Icon className="c-react-select__dropdown-indicator" name="chevron-down" />
	),
	IndicatorSeparator: null,
	LoadingIndicator: () => <Loader className="c-react-select__loading-indicator" />,
};
