# Mobly UI

Monorepo for Mobly's UI styles, react components and configs.

For more info on each package check their respective [README's](#Packages).

## Usage

Built with [lerna](https://github.com/lerna/lerna).

NPM scripts:

| Command          | Description                                                  | Runs
| ---------------- | ------------------------------------------------------------ | -----------
| clean            | Performs a clean install of all packages' node_modules       | `lerna clean --yes && lerna bootstrap`
| version          | Version all packages with changes and add git tags (no push) | `lerna version --no-push`
| release          | Publish all packages with new versions (in package.json)     | `lerna publish from-package`


## Good to know

When adding dependencies use lerna's `add` command to preserve symlinks in the project. You can add the `--scope` flag to target the correct package:

```shell
npx lerna add [dependency-name] --scope [package]
```

To see which package has changed since the last release you can run:

```shell
npx lerna changed
```

## Packages

### UI

* [mobly-ui-react](./packages/mobly-ui)
* [mobly-ui-styles](./packages/mobly-ui-styles)

### Configs

* [eslint-config-react-ts](./packages/eslint-config-react-ts)
* [stylelint-config-scss](./packages/stylelint-config-scss)