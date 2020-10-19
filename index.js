const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = ({ path }) => {
	const { parsed } = dotenv.config({ path });

	return new webpack.DefinePlugin(
		Object.keys(parsed).reduce((output, key) => {
			output[`process.env.${key}`] = `'${parsed[key]}'`;
			return output;
		}, {})
	);
};
