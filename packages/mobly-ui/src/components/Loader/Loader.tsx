import classnames from 'classnames/bind';
import React from 'react';

import styles from './Loader.module.scss';
import { LoaderProps } from './Loader.types';

const cx = classnames.bind(styles);

const Loader: React.FC<LoaderProps> = ({ className, style }) => {
	return (
		<div className={cx(className, 'c-loader')} style={style}>
			<div className={cx('c-loader__indicator')} />
		</div>
	);
};

export default Loader;
