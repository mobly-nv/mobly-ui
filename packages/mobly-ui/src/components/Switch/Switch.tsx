import classnames from 'classnames/bind';
import React from 'react';

import styles from './Switch.module.scss';
import { SwitchProps } from './Switch.types';

const cx = classnames.bind(styles);

const Switch: React.FC<SwitchProps> = ({
	className,
	id,
	name,
	onBlur,
	onChange,
	onFocus,
	options,
	readOnly,
	required,
	style,
	value,
}) => {
	return (
		<div className={cx(className, 'c-switch')} style={style}>
			{options.map((option, index) => {
				const switchId = `${id || name}-${index}`;

				return (
					<label className={cx('c-switch__option')} htmlFor={switchId}>
						<input
							checked={option.value === value}
							className={cx('c-switch__input')}
							id={switchId}
							name={name}
							onBlur={onBlur}
							onChange={onChange}
							onFocus={onFocus}
							readOnly={readOnly}
							required={required}
							type="radio"
							value={option.value}
						/>
						<span className={cx('c-switch__label')}>{option.label}</span>
					</label>
				);
			})}
		</div>
	);
};

export default Switch;
