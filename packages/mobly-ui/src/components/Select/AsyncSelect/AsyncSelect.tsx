import classnames from 'classnames/bind';
import React, { useState } from 'react';
import AsyncReactSelect from 'react-select/async';

import { Input } from '../../Input';
import { SELECT_COMPONENTS } from '../Select.const';
import styles from '../Select.module.scss';

import { AsyncSelectProps } from './AsyncSelect.types';

const cx = classnames.bind(styles);

const AsyncSelect: React.FC<AsyncSelectProps> = ({
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
	style,
	value,
	...rest
}) => {
	const [isFocused, setIsFocused] = useState(false);

	const handleBlur = (e: React.FocusEvent<HTMLElement>): void => {
		if (onBlur) {
			onBlur(e);
		}
		setIsFocused(false);
	};

	const handleFocus = (e: React.FocusEvent<HTMLElement>): void => {
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
			value={value ? JSON.stringify(value) : undefined}
		>
			<AsyncReactSelect
				{...rest}
				className={cx('c-react-select')}
				classNamePrefix="c-react-select"
				components={SELECT_COMPONENTS}
				inputId={id || name}
				name={name}
				options={options}
				onBlur={handleBlur}
				onChange={onChange}
				onFocus={handleFocus}
				value={value}
			/>
		</Input>
	);
};

export default AsyncSelect;
