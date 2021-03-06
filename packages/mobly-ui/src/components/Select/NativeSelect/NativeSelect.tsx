import classnames from 'classnames/bind';
import React, { useState } from 'react';

import { Icon } from '../../Icon';
import { Input } from '../../Input';

import styles from './NativeSelect.module.scss';
import { NativeSelectProps } from './NativeSelect.types';

const cx = classnames.bind(styles);

const Select: React.FC<NativeSelectProps> = ({
	className,
	errored = false,
	id,
	label,
	name,
	noLabelFloat,
	onBlur,
	onChange,
	onFocus,
	options = [],
	required,
	style,
	value,
}) => {
	const [isFocused, setIsFocused] = useState(false);

	const handleBlur = (e: React.ChangeEvent<HTMLSelectElement>): void => {
		if (onBlur) {
			onBlur(e);
		}
		setIsFocused(false);
	};

	const handleFocus = (e: React.ChangeEvent<HTMLSelectElement>): void => {
		if (onFocus) {
			onFocus(e);
		}
		setIsFocused(true);
	};

	return (
		<Input
			activeClassName={cx('c-select--active')}
			className={cx(className, 'c-select')}
			errored={errored}
			focused={isFocused}
			label={label}
			name={name}
			noLabelFloat={noLabelFloat}
			style={style}
			value={value}
		>
			<select
				className={cx('c-select__field')}
				id={id || name}
				name={name}
				onBlur={handleBlur}
				onChange={onChange}
				onFocus={handleFocus}
				required={required}
				value={value}
			>
				{options.map(option => {
					return (
						<option key={option.value} disabled={option.disabled} value={option.value}>
							{option.label}
						</option>
					);
				})}
			</select>
			<Icon className={cx('c-select__icon')} name="chevron-down" />
		</Input>
	);
};

export default Select;
