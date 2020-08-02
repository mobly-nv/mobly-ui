import { FieldProps } from '../../../types';

export interface NativeSelectProps extends FieldProps<HTMLSelectElement> {
	noLabelFloat?: boolean;
	options: NativeSelectOption[];
	value?: string;
}

export interface NativeSelectOption {
	disabled?: boolean;
	label: string;
	selected?: string;
	value: string;
}
