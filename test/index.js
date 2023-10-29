const express = require('express');

const app = express();

app.use(express.json());

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})

// database connection
const db = require("./config/database");
db.connect();

// api route
app.use("/api/details",require("./routes/route"));

app.get('/', (req, res) => {
    res.send('Hello World');
    });