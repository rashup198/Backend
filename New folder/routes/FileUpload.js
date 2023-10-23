const express = require("express");
const router = express.Router();

const {localfileUpload}= require("../controllers/fileUpload");

router.post("/localfile",localfileUpload);

module.exports = router;