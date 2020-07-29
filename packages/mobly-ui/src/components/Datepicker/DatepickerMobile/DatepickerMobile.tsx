import Picker from '@mobly/react-mobile-picker';
import classnames from 'classnames/bind';
import { getDaysInMonth } from 'date-fns';
import React, { FC, useState } from 'react';

import { Button } from '../../Button';
import inputStyles from '../../Input/Input.module.scss';
import { Modal } from '../../Modal';

import styles from './DatepickerMobile.module.scss';
import { DatepickerMobileProps, OptionGroups, ValueGroups } from './DatepickerMobile.types';
import { generateNumberArray, getInputValue, getMonthIndex } from './DatepickerMobile.utils';

const cx = classnames.bind({ ...inputStyles, ...styles });

const DatepickerMobile: FC<DatepickerMobileProps> = ({
	buttonCancelLabel = 'Cancel',
	buttonConfirmLabel = 'Ok',
	defaultValue,
	label,
	maxDate,
	monthLabels,
	name,
	invalidDateLabel = 'Invalid date',
	onBlur,
	onChange,
	onFocus,
	value,
}) => {
	const [dayValue, monthValue, yearValue] = value.split('/');
	const [defaultDay, defaultMonth, defaultYear] = defaultValue.split('/');
	const [maxDay, maxMonth, maxYear] = maxDate.split('/');

	const currentMonth = monthValue || defaultMonth || maxMonth;
	const currentYear = yearValue || defaultYear || maxYear;

	const [error, setError] = useState<string | null>(null);
	const [showModal, setShowModal] = useState(false);
	const [optionGroups, setOptionGroups] = useState<OptionGroups>({
		day: generateNumberArray(
			1,
			getDaysInMonth(new Date(parseInt(currentYear, 10), getMonthIndex(currentMonth)))
		),
		month: monthLabels,
		year: generateNumberArray(1900, parseInt(maxYear, 10)),
	});
	const [valueGroups, setvalueGroups] = useState<ValueGroups>({
		day: dayValue || defaultDay || maxDay,
		month: monthLabels[getMonthIndex(currentMonth)],
		year: currentYear,
	});

	// Methods
	// ------------------------------------------------------------------------- /
	const toggleModal = (show = true): void => {
		setShowModal(show);

		if (!show) {
			setTimeout(() => {
				onBlur(value);
			});
		}
	};

	const handleChange = (optionGroup: keyof OptionGroups, newValue: string): void => {
		let newOptionGroups = { ...optionGroups };
		let newValueGroups = { ...valueGroups, [optionGroup]: newValue };

		if (optionGroup === 'month' || optionGroup === 'year') {
			// Update amount of days based on month and year
			const findOptionIndex = (option: keyof OptionGroups, optionVal: string): number =>
				optionGroups[option].findIndex(o => o === optionVal);

			const newMonth =
				optionGroup === 'month'
					? findOptionIndex('month', newValue)
					: findOptionIndex('month', valueGroups.month);
			const newYear = parseInt(optionGroup === 'year' ? newValue : valueGroups.year, 10);

			newOptionGroups = {
				...newOptionGroups,
				day: generateNumberArray(1, getDaysInMonth(new Date(newYear, newMonth))),
			};

			// Check the previous with new amount of day options
			if (
				optionGroups.day.length > newOptionGroups.day.length &&
				findOptionIndex('day', valueGroups.day) > newOptionGroups.day.length - 1
			) {
				// Set new last day according to updated amount
				newValueGroups = {
					...newValueGroups,
					day: newOptionGroups.day[newOptionGroups.day.length - 1],
				};
			}
		}

		setOptionGroups(newOptionGroups);
		setvalueGroups(newValueGroups);
	};

	const handleConfirm = (): void => {
		const { day, month, year } = valueGroups;

		if (day && month && year) {
			const monthIndex = optionGroups.month.findIndex(m => m === month);
			const newVal = getInputValue(day, monthIndex, year);

			setError(null);
			onChange(newVal);
			toggleModal(false);
		} else {
			setError(invalidDateLabel);
		}
	};

	// Render
	// ------------------------------------------------------------------------- /
	return (
		<>
			<input
				className={cx('c-input__field')}
				name={name}
				onClick={() => toggleModal()}
				onFocus={e => onFocus(e.target.value)}
				value={value}
				readOnly
				type="text"
			/>

			<Modal onClose={() => toggleModal(false)} open={showModal}>
				{label && <span className={cx('c-datepicker-mobile__label')}>{label}</span>}

				<div className={cx('c-datepicker-mobile__picker')}>
					<Picker
						optionGroups={optionGroups}
						valueGroups={valueGroups}
						onChange={handleChange}
					/>
				</div>

				<p>{error}</p>

				<div className="u-text-right">
					<Button
						className="u-px-3 u-mr-2"
						onClick={() => toggleModal(false)}
						variant="transparent"
					>
						{buttonCancelLabel}
					</Button>
					<Button className="u-px-3" onClick={handleConfirm} variant="transparent">
						{buttonConfirmLabel}
					</Button>
				</div>
			</Modal>
		</>
	);
};

export default DatepickerMobile;
