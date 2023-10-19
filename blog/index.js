const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//middleware to parse json request body
app.use(express.json());

//moutnt the routes

const routess = require('./routes/route');

app.use('/api/v1', routess);

// Connect to MongoDB
const connectDB = require('./config/Database');
connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

