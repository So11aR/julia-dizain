const config = {
	mode: 'production',
	entry: {
		index: './src/js/index.js',
		serpuxov: './src/js/serpuxov.js',
		guestHouseRiverclub: './src/js/guest-house-riverclub.js',
		office: './src/js/office.js',
		magadan: './src/js/magadan.js',
		houseRiverclub: './src/js/house-river-club.js'
		
		

		

		// contacts: './src/js/contacts.js',
		// about: './src/js/about.js',
	},
	output: {
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};

module.exports = config;
