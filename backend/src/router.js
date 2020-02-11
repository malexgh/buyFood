const express = require('express');
const router = express.Router();
const auth = require('./middleware/auth');
const sessionController = require('./controllers/sessionController');
const userController = require('./controllers/userController');
const placeController = require('./controllers/placeController');

router.post('/login', sessionController.login);
router.post('/logout', auth, sessionController.logout);
router.post('/logoutAll', auth, sessionController.logoutAll);

router.post('/users', userController.store);
router.get('/users', auth, userController.index);
router.get('/users/:id', auth, userController.show);

router.post('/places', auth, placeController.store);
router.get('/places', auth, placeController.index);
router.get('/places/:id', auth, placeController.show);

module.exports = router;
