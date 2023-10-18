const express = require('express');

const app = express();
require("dotenv").config
const PORT =process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());
 
//import routes for todo routes
const todoRoutes = require("./routes/todos")

//mount the todo API routes
app.use("/api/v1", todoRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//connect to database

const dbConnect = require("./config/database");
dbConnect();

//default route
app.get ("/",(req,res)=>{ 
    res.send(`<h1> this the home page</h1>`)
})