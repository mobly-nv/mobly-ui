const path = require('path');

const stylelint = require('stylelint');

const config = require('../index');

describe('stylelint-config-scss', () => {
	it('Should have a valid config', () => {
		let error;
		stylelint.lint({
			config,
			files: path.resolve(__dirname, './valid.scss'),
		})
			.then((data) => {
				expect(data).toBeDefined();
			})
			.catch((err) => {
				error = err;
			});

		expect(error).not.toBeDefined();
	});

	it('Should not error on valid scss', async () => {
		const data = await stylelint.lint({
			config,
			files: path.resolve(__dirname, './valid.scss'),
		});

		expect(data.errored).toBeFalsy();
	});

	it('Should error on invalid scss', async () => {
		const data = await stylelint.lint({
			config,
			files: path.resolve(__dirname, './invalid.scss'),
		});

		expect(data.errored).toBeTruthy();
		expect(data.results[0].warnings).toHaveLength(2);
		expect(data.results[0].warnings[0].line).toBe(9);
		expect(data.results[0].warnings[0].rule).toBe('rule-empty-line-before');
		expect(data.results[0].warnings[0].severity).toBe('error');
		expect(data.results[0].warnings[1].line).toBe(7);
		expect(data.results[0].warnings[1].rule).toBe('indentation');
		expect(data.results[0].warnings[1].severity).toBe('error');
	});
});
