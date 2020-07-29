import { DefaultComponentProps } from '../../types';

export interface ModalProps extends DefaultComponentProps {
	onClose?: () => void;
	open: boolean;
}
