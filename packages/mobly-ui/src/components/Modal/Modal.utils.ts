const { body } = document;

const handleBodyTouchMove = (e: TouchEvent): void => {
	e.preventDefault();
};

const lockBody = (): void => {
	body.style.overflow = 'hidden';
	body.addEventListener('touchmove', handleBodyTouchMove, { passive: false });
};

const unlockBody = (): void => {
	body.style.overflow = '';
	body.removeEventListener('touchmove', handleBodyTouchMove);
};

const toggleBodyLock = (lock = false): void => (lock ? lockBody() : unlockBody());

export default toggleBodyLock;
