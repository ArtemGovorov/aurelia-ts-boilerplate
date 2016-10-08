"use strict";

const webpack = require('webpack');

/**
 * Environment Config
 */
const configEnv = function (options) {
  return {
    plugins: [
      new webpack.DefinePlugin(getDefinitions(options)) //options.env, options.name, options.version))
    ]
  };
};

function getDefinitions(options) {
  return {
    NAME: JSON.stringify(options.name),
    VERSION: JSON.stringify(options.version),
    PLATFORM: JSON.stringify(options.platform),
    ENV: JSON.stringify(options.env),
    CONFIG: JSON.stringify(require(process.cwd() + `/environments/${env}.json`))
  };

}
module.exports = configEnv;
