import React, { ChangeEvent, ReactNode } from 'react';

export interface DefaultComponentProps {
	className?: string;
	style?: React.CSSProperties;
}

export interface FieldProps<Element = HTMLInputElement> extends DefaultComponentProps {
	disabled?: boolean;
	id?: string;
	label?: ReactNode;
	name: string;
	onBlur?: (e: ChangeEvent<Element>) => void;
	onChange?: (e: ChangeEvent<Element>) => void;
	onFocus?: (e: ChangeEvent<Element>) => void;
	readOnly?: boolean;
	required?: boolean;
}
