import MaskedInput from '@mobly/react-text-mask';
import classnames from 'classnames/bind';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';

import { Input, inputStyles } from '../Input';

import { DATE_FORMAT, MONTH_LABELS } from './Datepicker.const';
import styles from './Datepicker.module.scss';
import { DatepickerProps } from './Datepicker.types';
import { DatepickerMobile } from './DatepickerMobile';

const cx = classnames.bind({ ...inputStyles, ...styles });

const Datepicker: React.FC<DatepickerProps> = ({
	buttonCancelLabel,
	buttonConfirmLabel,
	className,
	defaultValue = '',
	errored = false,
	id,
	invalidDateLabel,
	label,
	maxDate = format(new Date(), DATE_FORMAT),
	monthLabels = MONTH_LABELS,
	name,
	noLabelFloat,
	onBlur,
	onChange,
	onFocus,
	readOnly,
	required,
	style,
	value,
}) => {
	const [isFocused, setIsFocused] = useState(false);

	const autoCorrectedDatePipe = createAutoCorrectedDatePipe('dd/mm/yyyy', {
		minYear: 1900,
		maxYear: maxDate.split('/')[2],
	});

	const handleBlur = (newValue: string): void => {
		if (onBlur) {
			onBlur(newValue);
		}
		setIsFocused(false);
	};

	const handleFocus = (newValue: string): void => {
		if (onFocus) {
			onFocus(newValue);
		}
		setIsFocused(true);
	};

	const handleChange = (newValue: string): void => {
		if (onChange) {
			onChange(newValue);
		}
	};

	return (
		<Input
			activeClassName={cx('c-datepicker--active')}
			className={cx(className, 'c-datepicker')}
			errored={errored}
			focused={isFocused}
			label={label}
			name={name}
			noLabelFloat={noLabelFloat}
			style={style}
			value={value}
		>
			{isMobile ? (
				<DatepickerMobile
					buttonCancelLabel={buttonCancelLabel}
					buttonConfirmLabel={buttonConfirmLabel}
					invalidDateLabel={invalidDateLabel}
					defaultValue={defaultValue}
					label={label}
					maxDate={maxDate}
					monthLabels={monthLabels}
					name={name}
					onBlur={handleBlur}
					onChange={handleChange}
					onFocus={handleFocus}
					value={value || ''}
				/>
			) : (
				<MaskedInput
					className={cx('c-datepicker__field', 'c-input__field')}
					id={id || name}
					keepCharPositions
					mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
					name={name}
					onBlur={(e: React.ChangeEvent<HTMLInputElement>) => handleBlur(e.target.value)}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						handleChange(e.target.value)
					}
					onFocus={(e: React.ChangeEvent<HTMLInputElement>) =>
						handleFocus(e.target.value)
					}
					pipe={autoCorrectedDatePipe}
					placeholder="dd/mm/yyyy"
					readOnly={readOnly}
					required={required}
					value={value}
				/>
			)}
		</Input>
	);
};

export default Datepicker;
