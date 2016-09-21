var donor = require('express').Router();

var Donor = require('../models/donorModel').Donor;

donor.post('/data', function(req, res) {
	Donor.find({}, function(err, donors) {
		if (err) {
			res.sendStatus(500);
			return;
		}

		res.send(donors);
	})
});

donor.post('/new', function(req, res) {
	var d = new Donor();
	d.name = req.body.donorName;
	d.image = req.body.donorImage;

	d.save(function(err, savedDonor) {
		if (err) {
			res.sendStatus(500);
			return;
		}

		res.sendStatus(200);
	});
});

donor.post('/delete', function(req, res) {
	Donor.remove({'_id': req.body.donorId}, function(err, savedDonor) {
		if (err) {
			res.sendStatus(500);
			return;
		}

		res.sendStatus(200);
	});
});

module.exports = donor;