const Place = require('../models/place');

module.exports = {
    async store(req, res) {
        try {
            const place = new Place({ ...req.body, owner: req.user._id });
            await place.save();
            res.status(201).send(place);
        } catch (error) {
            res.status(500).send({ error });
        }
    },
    async index(req, res) {
        try {
            const places = await Place.find();
            res.status(200).send(places);
        } catch (error) {
            res.status(500).send({ error });
        }
    },
    async show(req, res) {
        try {
            const place = await Place.findById(req.params.id);
            if (place) {
                res.status(200).send(place);
            } else {
                res.status(400).send({ message: 'Place not found' });
            }
        } catch (error) {
            res.status(500).send({ error });
        }
    },
};
