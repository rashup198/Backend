const express = require('express');
const app = express();
require("dotenv").config();
const port = process.env.PORT ;
const cookieParser = require('cookie-parser');

//middelware to parse json data
app.use(express.json());
app.use(cookieParser());

// start the db
const db = require("./config/database");
db.connect();

//import the routes and mount
const user = require("./routes/user");
const cookieParser = require('cookie-parser');
app.use("/api/v1",user);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  