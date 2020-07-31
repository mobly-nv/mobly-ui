import { IconNames, IconProps } from '../components';

export const getIconProps = (iconProp: IconNames | IconProps): IconProps =>
	typeof iconProp === 'string' ? { name: iconProp } : iconProp;
