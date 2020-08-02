import { Props } from 'react-select/async';

import { SelectOption } from '../Select.types';

export interface AsyncSelectProps extends Props<SelectOption> {
	disabled?: boolean;
	errored?: boolean;
	label?: string;
	name: string;
	noLabelFloat?: boolean;
	readOnly?: boolean;
	required?: boolean;
}
