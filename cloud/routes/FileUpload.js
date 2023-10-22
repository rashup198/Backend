const express = require('express');

const router = express.Router();

const { localFileUpload} = require('../controllers/fileUpload');

// api route
router.post('/local-file', localFileUpload);

module.exports = router;