const express = require('express');
const router = express.Router();
const appointmentController = require('../controller/appointmentController')

router.post('/get', appointmentController);

module.exports = router;
