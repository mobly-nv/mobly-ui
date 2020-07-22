# Mobly styles v1.0.0 #

Style guide for Mobly. This package build contains:

* A single minified css file containing all the styles
* The whole scss contents to only use the styles you need

---
## Install ##

```bash
npm i @mobly/styles
```

---
## Setup ##

### System Dependencies ###

* [Node 10.15.x](https://nodejs.org/en/)

### Init ###

* `nvm use` [Check out NVM AutoSwitch](https://github.com/lalitkapoor/nvm-auto-switch)
* `npm install` or `npm i`
* `npm start`

---
## Codebase ##

### NPM Scripts ###

| Command          | Description
| ---------------- |------------
| start            | Start the project (runs storybook and watch tasks in parallel).
| build            | Build project in dist/ folder.
| build-storybook  | Build static storybook assets.
| release          | Release new version.
| storybook        | Run storybook for development on port 6006.
| watch            | Watch src files.
| lint             | Lints all the styles with stylelint.

All commands are executable by running `npm run [COMMAND-NAME]`.
