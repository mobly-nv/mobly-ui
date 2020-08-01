import { IconNames, IconProps } from '../components/Icon';

export const getIconProps = (iconProp: IconNames | IconProps): IconProps =>
	typeof iconProp === 'string' ? { name: iconProp } : iconProp;
