import { Props } from 'react-select';

export interface SelectProps extends Props<SelectOption> {
	name: string;
	noLabelFloat?: boolean;
}

export interface SelectOption {
	label: string;
	value: any;
	isDisabled?: boolean;
}
