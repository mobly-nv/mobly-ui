# @mobly/ui-styles

Mobly UI styles.

## Install

Install dependencies:

```shell
npm i @mobly/ui-styles
```

## Usage

This package is built with [Sass](https://sass-lang.com/) and [tailwindcss](https://tailwindcss.com/).

```css
/* This will import the main.css file */
@import '@mobly/ui-styles';

/* For more granular imports we also provide */
@import '@mobly/ui-styles/build/css/fonts.css';
@import '@mobly/ui-styles/build/css/base.css';
@import '@mobly/ui-styles/build/css/components.css';
@import '@mobly/ui-styles/build/css/utils.css';
```

We also exported our custom tailwindcss config for referencing it in JavaScript

```javascript
import config from '@mobly/ui-styles/config';

config.theme.screens.xs
// returns '320px'
```

## API

* Base
* Components:
	* `.c-button`
	* `.c-checkbox`
	* `.c-datepicker`
	* `.c-icon`
	* `.c-input`
	* `.c-loader`
	* `.c-modal`
	* `.c-radio`
	* `.c-select`
	* `.c-switch`
* Utils:
	* `.u-container`

### Tailwindcss

Checkout our [`tailwind.config.js`](../../tailwind.config.js) for all the custom changes

* Prefix: `.u-`
* Theme changes:
	* Screens: custom
	* Colors: custom
	* Border color: added `.u-border-default`
	* Box shadow: custom
	* Font family: custom
	* Font size: custom
	* Line height: custom
	* Max width: custom
	* Text color: added `.u-text-color`
	* Z-index: custom
* Disabled plugins:
	* container

For more info on all tailwindcss' utility classes, check out their docs.

## Development

Builds are setup with webpack, check the [`webpack.config.js`](./webpack.config.js) for more info.  
We use [storybook](https://github.com/storybookjs/storybook) for developping our styles.

### NPM scripts

| Command         | Description                                                | Runs
| --------------- | ---------------------------------------------------------- | -----------
| start           | Start up storybook                                         | `start-storybook -p 6006 -s ../../storybook/static`
| build           | Build package contents                                     | `webpack`
| build:storybook | Build storybook styleguide                                 | `build-storybook`
| lint            | Lint scss files                                             | `stylelint ./src/scss --cache --syntax scss`
| prepublishOnly  | Runs before every `npm run publish` (!important for lerna) | `npm run lint && npm run build`
