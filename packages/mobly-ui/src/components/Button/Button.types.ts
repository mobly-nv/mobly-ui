import { DefaultComponentProps } from '../../types';
import { IconNames, IconProps } from '../Icon';

export interface ButtonProps extends DefaultComponentProps {
	disabled?: boolean;
	icon?: IconNames | IconProps;
	iconLeft?: IconNames | IconProps;
	iconRight?: IconNames | IconProps;
	onClick?: () => void;
	secondary?: boolean;
	size?: 'fluid' | 'sm' | 'xs';
	type?: 'button' | 'reset' | 'submit';
	variant?: 'link' | 'outline' | 'transparent';
}
