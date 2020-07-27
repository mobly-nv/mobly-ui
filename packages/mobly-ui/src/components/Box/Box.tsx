import classnames from 'classnames/bind';
import React from 'react';

import styles from './Box.module.scss';
import { BoxProps } from './Box.types';

const cx = classnames.bind(styles);

const Box: React.FC<BoxProps> = ({ children, className, style }) => {
	return (
		<div className={cx(className, 'c-box')} style={style}>
			{children}
		</div>
	);
};

export default Box;
