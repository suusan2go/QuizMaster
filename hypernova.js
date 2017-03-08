const hypernova = require('hypernova/server');

hypernova({
  devMode: true,

  getComponent(name) {
    if (name === 'AppRouter') {
      return require('./hypernova/dist/ServerRouter.js').default; // eslint-disable-line
    }
    return null;
  },

  port: 3030,
});
