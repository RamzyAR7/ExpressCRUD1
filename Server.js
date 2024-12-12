const express = require('express')
const mongoose = require('mongoose')
const UsersRoutes = require('./routes/Users.Routes')
require('dotenv').config()

//app obj new app
const app = express();

//routes
app.use("/users", UsersRoutes);

//test
app.get('/', (req, res) => {
    res.send("hellooooo")
})

//server and DB
const PORT = 3000;
const DB_URL = process.env.DB;
mongoose.connect(DB_URL).then(() => {
    app.listen(PORT, () => {
        console.log("start")
        console.log("db connected")
        console.log(`http://localhost:${PORT}`)
    });
}).catch((error) => {
    console.log(error)
})


// npm init
// npm install express
// npm i nodemon
// npm install mongodb
// npm install mongoose
// npm install bcrypt //auth
