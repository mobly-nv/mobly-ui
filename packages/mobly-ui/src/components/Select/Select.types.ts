import { Props } from 'react-select';

export interface SelectProps extends Props<SelectOption> {
	disabled?: boolean;
	errored?: boolean;
	label?: string;
	name: string;
	noLabelFloat?: boolean;
	readOnly?: boolean;
	required?: boolean;
}

export interface SelectOption {
	label: string;
	value: any;
	isDisabled?: boolean;
}
