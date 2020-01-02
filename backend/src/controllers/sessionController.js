const User = require('../models/user');

module.exports = {
    async login(req, res) {
        try {
            const user = await User.findByCredentials(req.body.email, req.body.password);
            const token = await user.generateAuthToken();
            res.send({ user, token });
        } catch (error) {
            res.status(400).send();
        }
    },
    async logout(req, res) {
        try {
            req.user.tokens = req.user.tokens.filter((token) => token.token !== req.token);
            await req.user.save();
            res.send();
        } catch (error) {
            res.status(500).send();
        }
    },
    async logoutAll(req, res) {
        try {
            req.user.tokens = [];
            await req.user.save();
            res.send();
        } catch (error) {
            res.status(500).send();
        }
    },
};
