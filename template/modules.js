import { Module } from '@allmywallets/specification'

// You should rename "name" with your module name
import Name from './components/NameModule'

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

export const instance = new NameModule()
