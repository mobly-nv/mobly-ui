import { FieldProps } from '../../types';

export interface SelectProps extends FieldProps<HTMLSelectElement> {
	async?: boolean;
	native?: boolean;
	options: SelectOption[];
	value?: string;
}

export interface SelectOption {
	disabled?: boolean;
	label: string;
	value: string;
}
