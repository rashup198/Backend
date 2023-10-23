const express = require('express');

const router = express.Router();

const { localFileUpload,imageUpload} = require('../controllers/fileUpload');

// api route
router.post('/local-file', localFileUpload);
router.post("/imageUpload", imageUpload)
module.exports = router;