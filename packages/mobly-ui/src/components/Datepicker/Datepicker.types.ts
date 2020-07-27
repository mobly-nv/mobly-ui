import { ChangeEvent } from 'react';

import { FieldProps } from '../../types';

export interface DatepickerProps extends Omit<FieldProps, 'onBlur' | 'onChange' | 'onFocus'> {
	buttonCancelLabel?: string;
	buttonConfirmLabel?: string;
	defaultValue?: string;
	maxDate: string;
	invalidDateLabel?: string;
	onBlur: (value: string) => void;
	onChange: (value: string) => void;
	onFocus: (value: string) => void;
	value: string;
}

export interface MaskedInputRenderProps extends Omit<DatepickerProps, 'onChange'> {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
