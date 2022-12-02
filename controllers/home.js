//-------------------------------------------
// Import our dependencies
//-------------------------------------------
const express = require('express');  // bring express into our app


//-------------------------------------------
// create route
//-------------------------------------------
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`In home router`)
})

//-------------------------------------------
// Export the router
//-------------------------------------------
module.exports = router