//-------------------------------------------
// Import Our Dependencies
//-------------------------------------------
const express = require('express') // bring this in so we can make our router
const Menu = require('../models/menu')

//-------------------------------------------
// create Route
//-------------------------------------------
const router = express.Router() 

//-------------------------------------------
// create Route
//-------------------------------------------

//  get all menu items and render them to the screen
router.get('/', (req, res) => {

    // Get all menus items from mongodb and send them back
    Menu.find({})
    .then((menus) => {
        console.log(menus)
        res.render('menuupdt/index.ejs', { menus })
    })
    .catch(err => console.log(err))

})


//-------------------------------------------
// Export the Router
//-------------------------------------------
module.exports = router;