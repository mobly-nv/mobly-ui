# @mobly/stylelint-config-scss

An extensible stylelint config for projects using SASS with support for tailwindcss.

## Usage

Run the following command to install dependencies:

```
npm i @mobly/stylelint-config-scss -D
```

Then, add this to your `.stylelintrc.*` file:

```
{
  extends: [
    '@mobly/stylelint-config-scss',
  ],
}
```

## Dependencies

Used plugins:
* [stylelint-scss](https://github.com/kristerkari/stylelint-scss)

Extended configs:
* [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
