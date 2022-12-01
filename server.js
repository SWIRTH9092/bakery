const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
    res.send(`I am listening on port: ${PORT}`)
})

app.listen(PORT, () => {
    console.log(`🧏‍♀️ on port: ${PORT}`)
}) 