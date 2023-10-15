const express = require('express');
const router = express.Router();
const {
    getUsersController,
} = require('../controllers/usersController.js');


router.get('/users', getUsersController);

module.exports = router;