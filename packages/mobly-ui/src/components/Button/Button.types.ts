import { DefaultComponentProps } from '../../types';
import { IconNames } from '../Icon';

export interface ButtonProps extends DefaultComponentProps {
	disabled?: boolean;
	icon?: IconNames;
	iconLeft?: IconNames;
	iconRight?: IconNames;
	onClick?: () => void;
	secondary?: boolean;
	size?: 'fluid' | 'sm' | 'xs';
	type?: 'button' | 'reset' | 'submit';
	variant?: 'link' | 'outline' | 'transparent';
}
