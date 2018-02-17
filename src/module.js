/**
 * This module class should be extended by any AllMyWallets module
 * and all the methods should be overrode. The module should RETURN (not exporting)
 * a new instance of the class in a module.js file defined in library's dist folder.
 */
export default class Module {
  /**
   * Kebab-cased module name.
   *
   * @returns {string}
   */
  name () {
    return 'default'
  }

  /**
   * Routes which should be mapped into the application. Each entry
   * of the array should respect the following structure:
   *
   * {
   *   title: 'Route name',         // Route title to be displayed in menu
   *   icon: 'icon',                // FontAwesome icon to be used
   *   menu: true,                  // Show module in the main navigation bar
   *   router: {                    // Vue router configuration:
   *     name: 'route-name',        // Slug name for the route
   *     path: '/path',             // Path of the route
   *     component: ComponentName   // Component rendered for the route
   *   }
   * }
   *
   * @returns {Array}
   */
  routes () {
    return []
  }

  /**
   * Configuration schema following JSON Schema standard.
   *
   * @returns {Object}
   */
  configSchema () {
    return {}
  }

  /**
   * Default configuration for the module. This configuration should contain
   * all the needed configuration fields with their default values (even if they
   * are optional).
   *
   * @returns {Object}
   */
  defaultConfig () {
    return {}
  }

  /**
   * Current version of the module.
   *
   * @returns {string}
   */
  version () {
    return '0.0.0'
  }

  /**
   * Compatible version of AllMyWallets. Supports any semver expression such
   * as '>= 0.0.1 && < 1.0.0'.
   *
   * @returns {string}
   */
  compatibility () {
    return '>= 0.0.1'
  }
}
