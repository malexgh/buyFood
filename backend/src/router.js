const express = require('express');
const router = express.Router();
const auth = require('./middleware/auth');
const userController = require('./controllers/userController');
const sessionController = require('./controllers/sessionController');

router.post('/users', userController.store);
router.get('/users', auth, userController.index);
router.get('/users/:id', auth, userController.show);

router.post('/sessions/login', sessionController.login);
router.post('/sessions/logout', auth, sessionController.logout);
router.post('/sessions/logoutAll', auth, sessionController.logoutAll);

module.exports = router;
