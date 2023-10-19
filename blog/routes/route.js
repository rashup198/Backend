const express = require('express');
const router = express.Router();

// Import the controllers
const { createPost } = require("../controlles/createpost");
const { getPost } = require("../controlles/getPost");

// Define the routes
router.post('/createpost', createPost);
router.get("/getPost", getPost)

module.exports = router;
