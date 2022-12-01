const express = require('express');
require("dotenv").config();
const PORT = process.env.PORT || 3002;
const morgan = require("morgan")
const methodOverride = require("method-override") // override for put and delete request from forms

const app = express();


app.use(express.static("public"))  // serve files from the public folder
app.use(morgan("tiny"))  //logging
app.use(methodOverride("_method"))  //override for put and delete requests from form
app.use(express.urlencoded ({extended: true})) //pase urlencoded request


app.get('/', (req, res) => {
    res.send(`I am listening on port: ${PORT}`)
})

app.get('/dburl', (req, res) => {
    res.send(`My connection string is: ${process.env.DATABASE_URL}`)
})

app.listen(PORT, () => {
    console.log(`🧏‍♀️ on port: ${PORT}`)
}) 