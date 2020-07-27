import { FieldProps } from '../../types';

export interface SwitchProps extends FieldProps {
	options: SwitchOption[];
	value: string;
}

export interface SwitchOption {
	label: string;
	value: string;
}
