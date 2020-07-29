import classnames from 'classnames/bind';
import React from 'react';

import { Icon } from '../Icon';

import styles from './Checkbox.module.scss';
import { CheckboxProps } from './Checkbox.types';

const cx = classnames.bind(styles);

const Checkbox: React.FC<CheckboxProps> = ({
	checked,
	className,
	errored = false,
	id,
	label,
	name,
	onBlur,
	onChange,
	onFocus,
	readOnly,
	required,
	style,
	value,
}) => {
	return (
		<label
			className={cx(className, 'c-checkbox', { 'c-checkbox--error': errored })}
			htmlFor={id || name}
			style={style}
		>
			<input
				checked={checked}
				className={cx('c-checkbox__field')}
				id={id || name}
				name={name}
				onBlur={onBlur}
				onChange={onChange}
				onFocus={onFocus}
				readOnly={readOnly}
				required={required}
				type="checkbox"
				value={value}
			/>
			<span className={cx('c-checkbox__icon-container')}>
				<Icon className={cx('c-checkbox__icon')} name="check-small" />
			</span>
			{label && <span className={cx('c-checkbox__label')}>{label}</span>}
		</label>
	);
};

export default Checkbox;
