import classnames from 'classnames/bind';
import React, { useEffect, useState } from 'react';

import styles from './Input.module.scss';
import { InputProps } from './Input.types';

const cx = classnames.bind(styles);

const Input: React.FC<InputProps> = ({
	activeClassName = '',
	addon,
	children,
	className,
	focused = false,
	id,
	label,
	name,
	noLabelFloat,
	onBlur,
	onChange,
	onClick,
	onFocus,
	readOnly,
	required,
	size,
	style,
	type = 'text',
	value,
	variant,
}) => {
	const [isFocused, setIsFocused] = useState(focused);

	useEffect(() => {
		if (focused !== isFocused) {
			setIsFocused(focused);
		}
	}, [focused]);

	const handleBlur = (e: React.ChangeEvent<HTMLInputElement>): void => {
		if (onBlur) {
			onBlur(e);
		}
		setIsFocused(false);
	};

	const handleFocus = (e: React.ChangeEvent<HTMLInputElement>): void => {
		if (onFocus) {
			onFocus(e);
		}
		setIsFocused(true);
	};

	return (
		<div
			className={cx(
				className,
				'c-input',
				(isFocused || value) && ['c-input--active', activeClassName],
				{
					'c-input--addon-left': addon,
					'c-input--no-float': noLabelFloat,
					'c-input--required': required,
					'c-input--brand-eu': variant === 'brand-eu',
					'c-input--lg': size === 'lg',
				}
			)}
			style={style}
		>
			{label && (
				<label className={cx('c-input__label')} htmlFor={name}>
					{label}
				</label>
			)}
			<div className={cx('c-input__field-container')}>
				{addon && <div className={cx('c-input__addon')}>{addon}</div>}
				{children || (
					<input
						className={cx('c-input__field')}
						id={id}
						name={name}
						onBlur={handleBlur}
						onChange={onChange}
						onClick={onClick}
						onFocus={handleFocus}
						readOnly={readOnly}
						required={required}
						type={type}
						value={value}
					/>
				)}
			</div>
		</div>
	);
};

export default Input;
