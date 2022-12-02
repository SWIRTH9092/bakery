//-------------------------------------------
// Import Our Dependencies
//-------------------------------------------
const express = require("express")  // bring in express to make our app work
const User = require("../models/user");
const bcrypt = require("bcryptjs");

//-------------------------------------------
// Create Route
//-------------------------------------------
const router = express.Router();

//-------------------------------------------
// Routes
//-------------------------------------------
//  The Signup Routes (Get => form, post => submit form)
router.get("/signup", (req, res) => {
    console.log("you are in sign up")
    res.render("user/signup.ejs")
});

router.post("/signup", (req, res) => {
    console.log("req.body:", req.body)
    res.send("signup")
});

// The login Routes (Get => form, post => submit form)
router.get("/login", (req, res) => {
    res.render("user/login.ejs")
});

router.post("/login", (req, res) => {
    res.send("login")
});

//-------------------------------------------
// Export the Router
//-------------------------------------------
module.exports = router;