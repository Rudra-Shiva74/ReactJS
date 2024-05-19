const PORT = 4000;
const express = require("express");
const app = express();
const connectDb = require('../db/db');
const courseModel = require('../db/course');
app.get('/register', (req, res) => {
    new courseModel();
    res.send("2222222");
})
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log('App is Running on Port Number ' + PORT);
    })
})