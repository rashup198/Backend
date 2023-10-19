const express = require('express');

const router = express.Router();

//import the controllers

const {createPost} = require("../controlles/createpost")

//define the routes
router.post('/createpost', createPost);

module.exports = router;