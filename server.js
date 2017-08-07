const express = require('express'),
		  app = express(),
	 mongoose = require('mongoose'),
	   config = require('./config/database'),
	     path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
	if (err) {
		console.log('Could NOT connect to database: ', err);
	} else {
		console.log(`Connected to database ${config.db}`);
	}
});

app.use(express.static(`${__dirname}/client/dist/`))

app.get('*', (req, res) => {
	res.sendFile(path.join(`${__dirname}/client/dist/index.html`));
});

app.listen(8080, () => {
	console.log('Listening on port 8080');
});