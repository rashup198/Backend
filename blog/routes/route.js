const express = require('express');
const router = express.Router();

// Import the controllers
const { createPost } = require("../controlles/createpost");
const { getpost } = require("../controlles/getPost");
const {getpostbyid} = require("../controlles/getPost")

// Define the routes
router.post('/createpost', createPost);
router.get("/getPost", getpost)
router.get("/getPost/:id", getpostbyid)

module.exports = router;
