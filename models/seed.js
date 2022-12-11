require('dotenv').config()
const mongoose = require('./connection')
const Menu = require('./menu')

//  ran seeds with terminal command: node models/seed.js
mongoose.connection.on('open', () => {

    // define data we want to put in the database
    const startingMenu =  [
        { menuItemID: "C0001", name: "Coffee", description: "hot coffee", imageLink: "/images/coffeecup.jpg", inStock: true, type: "coffee", price: 3.59, listOrder: 100, username: "swirth9092"},
        {menuItemID: 'P00001',
        name: 'Bear Claw',
        description: 'An almond flavored Sweet Pastry Treat',
        imageLink: '/images/BearClaw.jpg',
        inStock: true,
        type: 'pastry',
        price: 3.95,
        listOrder: 20,
        username: 'swirth9092-x'},
        {    menuItemID: 'P00002',
        name: 'Chocolate Chip Cookie',
        description: 'Soft and Chewy with Chocolate Morsels',
        imageLink: '/images/ChocolateChipCookie.jpg',
        inStock: true,
        type: 'pastry',
        price: 4.49,
        listOrder: 1,
        username: 'swirth9092-x'},
        {menuItemID: 'T00001',
        name: 'Hot Tea',
        description: 'Green Tea',
        imageLink: 'images/teaCup.jpg',
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
        imageLink: 'images/GingerbreadMan.jpg',
        inStock: false,
        type: 'pastry',
        price: 4.35,
        listOrder: 2,
        username: 'swirth9092-x'},
        {menuItemID: 'B00001',
        name: 'Dinner Roll',
        description: 'Pack of 6 ',
        imageLink: 'images/Dinner Roll.jpg',
        inStock: true,
        type: 'bread',
        price: 4.59,
        listOrder: 50,
        username: 'swirth9092-x'},
        {menuItemID: 'P00003',
        name: 'Chocolate Eclair',
        description: 'Filled with a chocolate Filling',
        imageLink: '/images/ChocolateEclair.jpg',
        inStock: false,
        type: 'pastry',
        price: 5.49,
        listOrder: 3,
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