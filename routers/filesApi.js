const express = require('express');
const router = express.Router();
const {
    getFileById,
} = require('../controllers/filesController.js');


router.get('/file', getFileById);

module.exports = router;