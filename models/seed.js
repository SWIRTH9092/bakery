require('dotenv').config()
const mongoose = require('./connection')
const Menu = require('./menu')

//  ran seeds with terminal command: node models/seed.js
mongoose.connection.on('open', () => {

    // define data we want to put in the database
    const startingMenu =  [
        { menuItemID: "Cof01", name: "Coffee", description: "hot coffee", imageLink: "/images/coffeecup.jpg", inStock: true, type: "coffee", price: 3.59, listOrder: 100, username: "swirth9092"} 
      ]
      
      // Delete all Menu Items
      Menu.deleteMany({}, (err, data) => {
        // Create new Menu Item once old Menu Items are deleted
        Menu.create(startingMenu, (err, data) =>{
            mongoose.connection.close();
        })
    })    
})