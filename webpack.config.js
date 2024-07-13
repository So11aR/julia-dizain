const config = {
	mode: 'production',
	entry: {
		index: './src/js/index.js',
		serpuxov: './src/js/serpuxov.js',
		guestHouseRiverclub: './src/js/guest-house-riverclub.js',
		office: './src/js/office.js',
		magadan: './src/js/magadan.js',
		houseRiverclub: './src/js/house-river-club.js',
		masterskaya: './src/js/masterskaya.js',
		gkNebo: './src/js/gk-nebo.js',
		belgrad: './src/js/belgrad.js',

		avtosalon: './src/js/avtosalon.js',
		obi: './src/js/obi.js',
		tumenFilarmonia: './src/js/tumen-filarmonia.js',
		riverclubHouse2: './src/js/riverclub-house2.js',
		riverclubHouse3: './src/js/riverclub-house3.js',
		klaster: './src/js/klaster.js',
		baza: './src/js/baza.js',
		naves: './src/js/naves.js',
		ledoviy: './src/js/ledoviy.js',
		studia: './src/js/studia.js',
		game: './src/js/game.js',






		
		

		

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
