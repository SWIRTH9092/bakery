//-------------------------------------------
// dependencies
//-------------------------------------------
require("dotenv").config()  // load ENV variables
const mongoose = require("mongoose"); 
const { use } = require("../controllers/user");

//-------------------------------------------
// database connecton
//-------------------------------------------
// Setup for inputs for our connect function
const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

//-------------------------------------------
// establish connection
//-------------------------------------------
mongoose.connect(DATABASE_URL, CONFIG);

//Events for when connection opens/disconnects/errors
mongoose.connection 
    .on("open", () => console.log("Connected to Mongoose"))
    .on("close", () => console.log("Disconnected from Mongoose"))
    .on("error", (error) => console.log(error));

//-------------------------------------------
//  Export the connection
//-------------------------------------------
module.exports = mongoose