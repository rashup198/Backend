const express = require('express');
const app = express();
require("dotenv").config();
const port = process.env.PORT ;

//middelware to parse json data
app.use(express.json());

// start the db
const db = require("./config/database");
db.connect();

//import the routes and mount
const user = require("./routes/user");
app.use("/api/v1",user);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  