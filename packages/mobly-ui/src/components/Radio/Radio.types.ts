import { FieldProps } from '../../types';
import { IconNames, IconProps } from '../Icon';

export interface RadioProps extends FieldProps {
	checked: boolean;
	bordered?: boolean;
	icon?: IconNames | IconProps;
	value?: string;
}
