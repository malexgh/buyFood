const User = require('../models/user');

module.exports = {
    async store(req, res) {
        try {
            const user = new User(req.body);
            await user.save();
            const token = await user.generateAuthToken();
            res.status(201).send({ user, token });
        } catch (error) {
            res.status(500).send({ error });
        }
    },
    async index(req, res) {
        try {
            const users = await User.find();
            res.status(200).send({ users });
        } catch (error) {
            res.status(500).send({ error });
        }
    },
    async show(req, res) {
        try {
            const user = await User.findById(req.params.id);
            if (user) {
                res.status(200).send({ user });
            } else {
                res.status(400).send({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).send({ error });
        }
    },
};
