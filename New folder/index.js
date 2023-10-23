const express = require('express');

const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware
app.use(express.json());
const fileUpload = require('express-fileupload');
app.use(fileUpload());

//connect to database
const db = require("./confiig/database");
db.connect();

//routes
const upload = require("./routes/FileUpload");
app.use("/api/v1/upload",upload);

app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
});