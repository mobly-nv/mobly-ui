import { ReactNode } from 'react';

export interface DatepickerMobileProps {
	buttonCancelLabel?: string;
	buttonConfirmLabel?: string;
	defaultValue: string;
	invalidDateLabel?: string;
	label?: ReactNode;
	maxDate: string;
	name: string;
	onBlur: (e: string) => void;
	onChange: (e: string) => void;
	onFocus: (e: string) => void;
	value: string;
}

export type OptionGroups = {
	day: string[];
	month: string[];
	year: string[];
};

export type ValueGroups = {
	day: string;
	month: string;
	year: string;
};
