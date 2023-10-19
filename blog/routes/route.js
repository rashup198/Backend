const express = require('express');
const router = express.Router();

// Import the controllers
const { createPost } = require("../controlles/createpost");
const { getpost } = require("../controlles/getPost");
const {getpostbyid} = require("../controlles/getPost")

//import the controllers for the comment
const {createComment} = require("../controlles/creatcomment") 


// Define the routes
router.post('/createpost', createPost);
router.get("/getPost", getpost)
router.get("/getPost/:id", getpostbyid)

//define the routes for the comment
router.post("/createcomment",createComment)


module.exports = router;
