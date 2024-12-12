const express = require('express')
const mongoose = require('mongoose')
const UsersRoutes = require('./routes/Users.Routes')
require('dotenv').config()

const app = express();

// middlware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//routes
app.use("/users", UsersRoutes);


app.get('/', (req, res) => {
    res.send("hellooooo")
})
const PORT = 3000;
const DB_URL = process.env.DB;
mongoose.connect(DB_URL).then(() => {
    app.listen(PORT, () => {
        console.log("start")
        console.log("db connected")
        console.log("http://localhost:3000")
    });
}).catch((error) => {
    console.log(error)
})

module.exports = app;