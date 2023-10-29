const express = require('express');
const router = express.Router();

const {createDetails} = require("../controller/handler");

router.post("/create/",createDetails);

module.exports = router;