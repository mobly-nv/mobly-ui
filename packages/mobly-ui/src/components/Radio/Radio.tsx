import classnames from 'classnames/bind';
import React from 'react';

import { Icon } from '../Icon';

import styles from './Radio.module.scss';
import { RadioProps } from './Radio.types';

const cx = classnames.bind(styles);

const Radio: React.FC<RadioProps> = ({
	checked,
	children,
	className,
	bordered,
	disabled,
	errored = false,
	icon,
	id,
	label,
	name,
	readOnly,
	required,
	onBlur,
	onChange,
	onFocus,
	style,
	value,
}) => {
	return (
		<label
			className={cx(className, 'c-radio', {
				'c-radio--active': checked,
				'c-radio--bordered': bordered,
				'c-radio--icon': !!icon,
				'c-radio--error': errored,
			})}
			htmlFor={id || name}
			style={style}
		>
			<input
				checked={checked}
				className={cx('c-radio__field')}
				disabled={disabled}
				id={id || name}
				name={name}
				onBlur={onBlur}
				onChange={onChange}
				onFocus={onFocus}
				readOnly={readOnly}
				required={required}
				type="radio"
				value={value}
			/>
			<span className={cx('c-radio__check-container')}>
				<Icon className={cx('c-radio__check')} name="check-small" />
			</span>
			{icon && <Icon className={cx('c-radio__icon')} name={icon} />}
			{children || <span className={cx('c-radio__label')}>{label}</span>}
		</label>
	);
};

export default Radio;
