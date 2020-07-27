import { FieldProps } from '../../types';
import { IconNames } from '../Icon';

export interface RadioProps extends FieldProps {
	checked: boolean;
	bordered?: boolean;
	icon?: IconNames;
	value?: string;
}
