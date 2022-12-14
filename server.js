//-------------------------------------------
// Import our dependencies
//-------------------------------------------
const express = require('express');  // bring express into our app
const middleware = require("./utils/middleware");  


//-------------------------------------------
// create our express application Route
//-------------------------------------------
const app = express();

//-------------------------------------------
// Middleware
//-------------------------------------------
middleware(app);

//-------------------------------------------
// Listening Port
//-------------------------------------------
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`🧏‍♀️ on port: ${PORT}`)
}) 