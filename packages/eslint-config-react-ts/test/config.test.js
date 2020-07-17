const path = require('path');

const { ESLint } = require('eslint');

const baseConfig = require('../index');

describe('eslint-config-react-ts', () => {
	const eslint = new ESLint({
		baseConfig,
		overrideConfig: {
			parserOptions: {
				project: path.resolve(__dirname, '../tsconfig.json'),
			},
		},
	});

	it('Should have a valid config', async () => {
		const config = await eslint.calculateConfigForFile(path.resolve(__dirname, './mock.ts'));

		expect(config).toBeDefined();
	});

	it('Should not encounter errors in valid file', async () => {
		const results = await eslint.lintFiles(path.resolve(__dirname, './*.ts'));
		const filteredResults = ESLint.getErrorResults(results);

		expect(filteredResults).toHaveLength(0);
	});
});
