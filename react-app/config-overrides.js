const { name } = require('./package');
const rewireReactHotLoader = require('react-app-rewire-hot-loader')

module.exports = {
  webpack: (config) => {

    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    config.output.jsonpFunction = `webpackJsonp_${name}`;
    return config;
  },
  devServer: (configFunction) => {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.open = false;
      config.hot = false;
      config.headers = {
        'Access-Control-Allow-Origin': '*',
      };
      // Return your customised Webpack Development Server config.
      return config;
    };
  },
  override: (config, env) => {
    config = rewireReactHotLoader(config, env);
    return config;
  }
};
