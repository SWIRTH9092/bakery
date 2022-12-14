require('dotenv').config()
const mongoose = require('./connection')
const Menu = require('./menu')

//  ran seeds with terminal command: node models/seed.js
mongoose.connection.on('open', () => {

    // define data we want to put in the database
    const startingMenu =  [
        { menuItemID: "C0001", name: "Coffee", description: "hot coffee", imageLink: "https://i.imgur.com/c0D7ETe.jpg", inStock: true, type: "coffee", price: 3.59, listOrder: 100, username: "swirth9092"},
        {menuItemID: 'P00001',
        name: 'Bear Claw',
        description: 'An almond flavored Sweet Pastry Treat',
        imageLink: 'https://i.imgur.com/R4rjmJW.jpg',
        inStock: true,
        type: 'pastry',
        price: 3.95,
        listOrder: 20,
        username: 'swirth9092-x'},
        {    menuItemID: 'P00002',
        name: 'Chocolate Chip Cookie',
        description: 'Soft and Chewy with Chocolate Morsels',
        imageLink: 'https://i.imgur.com/9Chfscc.jpg',
        inStock: true,
        type: 'pastry',
        price: 4.49,
        listOrder: 1,
        username: 'swirth9092-x'},
        {menuItemID: 'T00001',
        name: 'Hot Tea',
        description: 'Green Tea',
        imageLink: 'https://i.imgur.com/NkNu2Tp.jpg',
        inStock: false,
        type: 'tea',
        price: 2.39,
        listOrder: 105,
        username: 'swirth9092-x'},
        {menuItemID: 'P0005',
        name: 'Sticky Bun',
        description: 'Topped with Carmel and Pecons',
        imageLink: '/images/StickeyBun.jpg',
        inStock: false,
        type: 'pastry',
        price: 4.9,
        listOrder: 25,
        username: 'swirth9092-x'},
        {menuItemID: 'P00005',
        name: 'Gingerbread Man',
        description: 'Soft and chewy...',
        imageLink: 'https://i.imgur.com/N10l7FA.jpg',
        inStock: false,
        type: 'pastry',
        price: 4.35,
        listOrder: 4,
        username: 'swirth9092-x'},
        {menuItemID: 'B00001',
        name: 'Dinner Roll',
        description: 'Pack of 6 ',
        imageLink: 'https://i.imgur.com/BhiR0TU.jpg',
        inStock: true,
        type: 'bread',
        price: 4.59,
        listOrder: 80,
        username: 'swirth9092-x'},
        {menuItemID: 'P00003',
        name: 'Chocolate Eclair',
        description: 'Filled with a chocolate Filling',
        imageLink: 'https://i.imgur.com/TOiRwDJ.jpg',
        inStock: false,
        type: 'pastry',
        price: 5.49,
        listOrder: 26,
        username: 'swirth9092-x'},
      ]
      
      // Delete all Menu Items
      Menu.deleteMany({}, (err, data) => {
        // Create new Menu Item once old Menu Items are deleted
        Menu.create(startingMenu, (err, data) =>{
            mongoose.connection.close();
        })
    })    
})