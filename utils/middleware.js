//-------------------------------------------
// Dependencies
//-------------------------------------------
const express = require('express');  // bring express into our app
require("dotenv").config();  // load ENV variables
const morgan = require("morgan"); // logger for our request
const methodOverride = require("method-override") // override for put and delete request from forms
const UserRouter = require("../controllers/user");
const session = require('express-session'); // for ENV secret
const MongoStore = require("connect-mongo");

//-------------------------------------------
// Middleware
//-------------------------------------------
const middleware = (app) => {
    app.use(express.static("public"));  // serve files from the public folder
    app.use(morgan("tiny"));  //logging
    app.use(methodOverride("_method"));  //override for put and delete requests from form
    app.use(express.urlencoded ({extended: true})); //pase urlencoded request
    app.use(session({
        secret: process.env.SECRET,
        store: MongoStore.create({mongoUrl: process.env.DATABASE_URL}),
        saveUninitialized: true,
        resave: false,
    }));
    app.use("/user", UserRouter);  // to the user router
};

//-------------------------------------------
// Export Middleware Function
//-------------------------------------------
module.exports = middleware