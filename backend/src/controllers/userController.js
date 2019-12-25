const User = require('../models/user');

module.exports = {
    async store(req, res) {
        const user = new User(req.body);
        try {
            await user.save();
            const token = await user.generateAuthToken();
            res.status(201).send({ user, token });
        } catch (error) {
            res.status(400).send({error});
        }
    },
};
