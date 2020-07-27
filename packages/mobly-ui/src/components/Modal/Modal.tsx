import classnames from 'classnames/bind';
import React, { useEffect } from 'react';

import { Box } from '../Box';
import { Button } from '../Button';
import { Icon } from '../Icon';

import styles from './Modal.module.scss';
import { ModalProps } from './Modal.types';
import toggleBodyLock from './Modal.utils';

const cx = classnames.bind(styles);

const Modal: React.FC<ModalProps> = ({ children, className, onClose, open, style }) => {
	useEffect(() => {
		toggleBodyLock(open);

		return () => {
			toggleBodyLock();
		};
	}, [open]);

	return (
		<div className={cx(className, 'c-modal', { 'c-modal--open': open })} style={style}>
			<Box className={cx('c-modal__box')}>
				{onClose && (
					<Button
						className={cx('c-modal__close')}
						onClick={onClose}
						size="xs"
						variant="transparent"
					>
						<Icon name="cross" />
					</Button>
				)}
				{children}
			</Box>
			<div className={cx('c-modal__overlay')} />
		</div>
	);
};

export default Modal;
