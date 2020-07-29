import classnames from 'classnames/bind';
import React from 'react';

import { Icon } from '../Icon';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.types';

const cx = classnames.bind(styles);

const Button: React.FC<ButtonProps> = ({
	className,
	children,
	disabled,
	icon,
	iconLeft,
	iconRight,
	onClick,
	secondary,
	size,
	style,
	type = 'button',
	variant,
}) => {
	return (
		<button
			className={cx(className, 'c-button', {
				'c-button--blue': secondary,
				'c-button--link': variant === 'link',
				'c-button--outline': variant === 'outline',
				'c-button--transparent': variant === 'transparent',
				'c-button--icon': icon,
				'c-button--icon-left': iconLeft,
				'c-button--icon-right': iconRight,
				'c-button--fluid': size === 'fluid',
				'c-button--sm': size === 'sm',
				'c-button--xs': size === 'xs',
			})}
			disabled={disabled}
			onClick={onClick}
			style={style}
			type={type}
		>
			{icon ? (
				<Icon className={cx('c-button__icon')} name={icon} />
			) : (
				<>
					{iconLeft && <Icon className={cx('c-button__icon')} name={iconLeft} />}
					{children}
					{iconRight && <Icon className={cx('c-button__icon')} name={iconRight} />}
				</>
			)}
		</button>
	);
};

export default Button;
