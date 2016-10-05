"use strict";

const webpack = require('webpack');

/**
 * Environment Config
 */
const configEnv = function (options) {
  return {
		plugins: [
			new webpack.DefinePlugin(getDefinitions(options ))//options.env, options.name, options.version))
		]
	};
};

function getDefinitions(options) {
  const target = options.target;
  return {
    NAME: JSON.stringify(options.name),
    VERSION: JSON.stringify(options.version),
    PLATFORM: JSON.stringify(options.platform),
    TARGET: JSON.stringify(options.target),
    CONFIG: JSON.stringify(require(process.cwd() + `/environment/${target}.json`))
	};

}
module.exports = configEnv;
