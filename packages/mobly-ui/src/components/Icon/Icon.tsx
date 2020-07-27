import classnames from 'classnames/bind';
import React from 'react';

import styles from './Icon.module.scss';
import { IconProps } from './Icon.types';

const cx = classnames.bind(styles);

const Icon: React.FC<IconProps> = ({ className, name, style, type = 'fill' }) => {
	return (
		<span
			className={cx(className, {
				'c-icon-fill': type === 'fill',
				'c-icon-line': type === 'line',
			})}
			style={style}
		>
			{name}
		</span>
	);
};

export default Icon;
