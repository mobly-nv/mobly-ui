# @mobly/ui-react

Mobly UI react component library.

## Install

Install dependencies:

```shell
npm i @mobly/ui-react
```

## Usage

This package is built with React, TypeScript and Sass.

It also utilizes the styles from [`@mobly/ui-styles`](../mobly-ui-styles) as Sass modules.  
These styles are also exported to easily use in combination with css-in-js libraries.

```jsx
import React from 'react';
import { Button } from '@mobly/ui-react';

const App = () => {
	return <Button>Click me</Button>;
};
```

## API

* Box
* Button
* Checkbox
* Datepicker
* Icon
* Input
* Loader
* Modal
* Radio
* Select
* Switch

## Development

Builds are setup with webpack, check the [`webpack.config.js`](./webpack.config.js) for more info.  
We use [storybook](https://github.com/storybookjs/storybook) for developping our react components.

### NPM scripts

| Command         | Description                                                | Runs
| --------------- | ---------------------------------------------------------- | -----------
| start           | Start up storybook                                         | `start-storybook -p 6006 -s ../../storybook/static`
| build           | Build package contents and types                           | `webpack && npm run build:types`
| build:types     | Build types                                                | `tsc -p tsconfig.build.json`
| build:storybook | Build storybook styleguide                                 | `build-storybook`
| lint            | Lint all script and style files                             | `npm run lint:scripts && npm run lint:styles`
| lint:scripts    | Lint scripts (.js,.jsx,.ts,.tsx)                           | `eslint --cache --ext .js,.jsx,.ts,.tsx ./src`
| lint:styles     | Lint styles (.css,.scss)                                   | `stylelint ./src/**/*.scss --cache`
| prepublishOnly  | Runs before every `npm run publish` (!important for lerna) | `npm run lint && npm run build`
