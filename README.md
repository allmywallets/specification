# AllMyWallets modules specification

This repository defines the specification which should be followed when creating
AMW modules.

## Creating a module

1. Create a Git repository (only GitHub is supported for now). Standard naming
conventions are `name-module` for the repository name where name is your module name
(kebab-cased).
2. Define a new `module.js` file in an `src` folder with the following structure
(you should adapt contents to your needs):

```js
import { Module } from '@allmywallets/specification'
import Name from './components/Name.vue'

class NameModule extends Module {
  name () {
    return 'name'
  }
  
  routes () {
    return [
      {
        title: 'Route name',
        icon: 'icon',
        menu: true,
        router: {
          name: 'route-name',
          path: '/name',
          component: Name
        }
      }
    ]
  }
  
  configSchema () {
    return {
      id: '/Name',
      type: 'object',
      properties: {
        'variable': { type: 'string' }
      },
      required: ['variable']
    }
  }
  
  defaultConfig () {
    return {
      variable: 'value'
    }
  }
  
  version () {
    return '0.0.1'
  }
  
  compatibility () {
    return '>= 0.0.1'
  }
}

return new NameModule()
```

See explanations about the methods in [module.js](https://github.com/allmywallets/specification/blob/master/src/module.js) file.

Use babel with the bundler of your choice to compile your module in a `dist` folder. AllMyWallets is expecting to find a
file `module.js` in the folder returning a new instance of your module.

You may assume `Vue` is defined in your module.js file and use it directly (**do not import VueJS on your own**).
