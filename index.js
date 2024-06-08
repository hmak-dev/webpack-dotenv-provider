const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = ({ path }) => {
	const { parsed } = dotenv.config({ path });

	const envVariables = {};

	Object.keys(parsed).forEach((key) => {
		envVariables[`process.env.${key}`] = `'${parsed[key]}'`;
	});

	Object.keys(process.env).forEach((key) => {
		if (key.startsWith('ENV_')) {
			envVariables[`process.env.${key.replace(/^ENV_/, '')}`] = `'${process.env[key]}'`;
		}
	});

	return new webpack.DefinePlugin(envVariables);
};
