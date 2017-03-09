const hypernova = require('hypernova/server');

hypernova({
  devMode: true,

  getComponent(name) {
    switch (name) {
      case 'AppRouter':
        return require('./dist/ServerRouter.js').default; // eslint-disable-line
      default:
        return null;
    }
  },

  port: 3030,
});
