const express = require('express');

const router = express.Router();

const { localFileUpload,imageUpload,videoUpload,imageSizeReducer} = require('../controllers/fileUpload');

// api route
router.post('/local-file', localFileUpload);
router.post("/imageUpload", imageUpload)
router.post("/videoUpload", videoUpload)
router.post("/imageSizeReducer",imageSizeReducer)
module.exports = router;