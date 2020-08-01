export default {
	title: 'Modal',
};

export const Default = () => `
	<div class="c-modal c-modal--open">
		<div class="c-modal__box c-box">
			<button
				type="button"
				class="c-modal__close c-button c-button--icon c-button--transparent"
			>
				<span class="c-button__icon c-icon-fill">cross</span>
			</button>
			<div class="text-center">
				<h4 class="mb-4">Some title</h4>
				<p>Lorem ipsum dolor sit amet</p>
			</div>
		</div>
		<div class="c-modal__overlay"></div>
	</div>
`;
