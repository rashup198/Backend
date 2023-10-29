const express = require('express');
const router = express.Router();

const {details} = require("../controller/handler");

router.post("/create/",details);

module.exports = router;