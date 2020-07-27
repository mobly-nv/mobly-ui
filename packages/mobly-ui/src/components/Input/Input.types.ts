import { ReactNode } from 'react';

import { FieldProps } from '../../types';

export interface InputProps extends FieldProps {
	activeClassName?: string;
	addon?: ReactNode;
	focused?: boolean;
	noLabelFloat?: boolean;
	onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
	size?: 'lg';
	type?: 'number' | 'text';
	value?: string;
	variant?: 'brand-eu';
}
