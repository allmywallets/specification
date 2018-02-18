# AllMyWallets modules specification

This repository defines the specification which should be followed when creating
AMW modules.

## Creating a module

1. Create a Git repository (only GitHub is supported for now). Standard naming
conventions are `name-module` for the repository name where name is your module name
(kebab-cased).
2. Run `npm install @allmywallets/specification --save` to configure your module.
3. Edit the `./module.js` file and start developing your module.
See explanations about the methods in [module.js](https://github.com/allmywallets/specification/blob/master/src/module.js) file.
4. Run `npm start` to build your module.

You should not load Vue.js as a dependency, it is bundled with `@allmywallets/specification`. You
can directly load it using `import Vue from 'vue'` statement.
