//-------------------------------------------
// Import Our Dependencies
//-------------------------------------------
const express = require("express");
const Menu = require("../models/menu");

//-------------------------------------------
// create Route
//-------------------------------------------
const router = express.Router();

//-------------------------------------------
// create Route
//-------------------------------------------

router.get("/", (req, res) => {
    res.send("in update menu")
})


//-------------------------------------------
// Export the Router
//-------------------------------------------
module.exports = router;