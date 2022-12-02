//-------------------------------------------
// Import our dependencies
//-------------------------------------------
const express = require('express');  // bring express into our app
const middleware = require("./utils/middleware");  
const PORT = process.env.PORT || 3002;

//-------------------------------------------
// create our express application Route
//-------------------------------------------
const app = express();

//-------------------------------------------
// Middleware
//-------------------------------------------
middleware(app);

app.get('/', (req, res) => {
    res.send(`I am listening on port: ${PORT}`)
})

//-------------------------------------------
// Listening Port
//-------------------------------------------
app.listen(PORT, () => {
    console.log(`🧏‍♀️ on port: ${PORT}`)
}) 