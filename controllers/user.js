const express = require("express")  // bring in express to make our app work
const { pathToFileURL } = require("url")
//const User = require("../models/user");

const router = express.Router()

router.get("/", (req, res)=> {
    res.send ("at router in user.controller")
})

module.exports = router