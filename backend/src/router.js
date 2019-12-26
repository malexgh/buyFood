const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');

router.post('/users', userController.store);
router.get('/users', userController.index);
router.get('/users/:id', userController.show);

module.exports = router;
