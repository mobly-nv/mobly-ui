# @mobly/eslint-config-react-ts

An extensible shared eslint config for projects using react and typescript.

## Usage

Run the following command to install dependencies:

```
npm i @mobly/eslint-config-react-ts -D
```

Then, add this to your `.eslintrc.*` file:

```
{
  parserOptions: {
	  project: 'path/to/tsconfig.json',
  },
  extends: [
    '@mobly/eslint-config-react-ts',
  ],
}
```

Don't forget to specify the `parserOptions.project` property. This should point to your `tsconfig.json`.

Used plugins:
* [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)

Extended configs:
* [eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript)
* [airbnb-hooks](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb#eslint-config-airbnbhooks)
* [prettier](https://github.com/prettier/eslint-config-prettier)
	* prettier/@typescript-eslint
	* prettier/react