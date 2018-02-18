# AllMyWallets modules specification

This repository defines the specification which should be followed when creating
AMW modules.

## Creating a module

1. Create a Git repository (only GitHub is supported for now). Standard naming
conventions are `name-module` for the repository name where name is your module name
(kebab-cased).
2. Run `npm install @allmywallets/specification --save` to configure your module.
3. Edit the `module.js` file which has been created in your repository root and start developing your module.
See explanations about the methods in [module.js](https://github.com/allmywallets/specification/blob/master/src/module.js) file.
4. Run `npm start` to build your module. You should commit and push the `dist` folder along with your code.

## Warnings

You should **not** install Vue as a dependency in your NPM dependencies, it is bundled with `@allmywallets/specification`.
You can directly load it using `import Vue from 'vue'` statement. You can add any dependency you need.

You should not edit the configuration of the user and should always use Vuex to dispatch modifications, so they are reactive.
See the [statistics module](https://github.com/allmywallets/statistics-module) for an example.
