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
// check for login; if not logged in redirected 
//    login screen
//-------------------------------------------
router.use((req, res, next) => {
    if (req.session.loggedIn) {
        next();
    } else {
        res.redirect("/employee/login");
    }
});

//-------------------------------------------
// routers for menuupdt
//-------------------------------------------

//  get all menu items and render them to the screen
router.get('/', (req, res) => {
    // how to find for a particular username
        // Menu.find({username: req.session.username})
        
    // Get all menus items from mongodb and send them back
    // added sort to display menu in list order
    Menu.find().sort({listOrder: 1})
    .then((menus) => {
        console.log(menus)
        res.render('menuupdt/index.ejs', { menus })
    })
    .catch(err => console.log(err))

})

//-------------------------------------------
// Edit on specific Menu Item
//-------------------------------------------
router.get("/:id/edit", (req, res) => {
    //   find by id one menu item
        Menu.findById(req.params.id)
        .then ((menu) => {
            console.log(menu)
            res.render("menuupdt/edit.ejs", { menu })
        })
        .catch(err => console.log(err))
    })
    
//-------------------------------------------
// Update from Editing a Menu Item
//-------------------------------------------
router.put("/:id", (req, res) => {
    //   Change Instock check box to boolean
    req.body.inStock = req.body.inStock === 'on' ? true : false 

    //   change username to username of edit update
    req.body.username = req.session.username;

    //   find by id and update one menu item
    Menu.findByIdAndUpdate(req.params.id, req.body, {new:true},(err, updatedMenu)=> {
            //return back to show (view menu)
            res.redirect(`/menuupdt/${req.params.id}`)
        })
    })

//-------------------------------------------
// display for for new menu item
//-------------------------------------------
router.get("/new", (req, res) => {
    res.render("menuupdt/new.ejs")
})

//-------------------------------------------
// Add a new a Menu Item to Mongodb
//-------------------------------------------
router.post("/", (req, res) => {
    //   Change Instock check box to boolean
        req.body.inStock = req.body.inStock === 'on' ? true : false 

    //   add creation username to menu item
        req.body.username = req.session.username;

    //   create a new item
    Menu.create(req.body, (err, createdMenu) =>{
        // console.log('created' , createdMenu, err)

        // return to main list menu
        res.redirect('/menuupdt')
        })
    })

//-------------------------------------------
// delete route for a menu item
//-------------------------------------------
router.delete('/:id', async (req, res) => {
    const deletedMenu = await Menu.findByIdAndDelete(req.params.id)
    if(deletedMenu){

        // return to main list menu
        res.redirect('/menuupdt/')
    }
})

//-------------------------------------------
// Show on specific Menu Item
//-------------------------------------------
router.get("/:id", (req, res) => {
//   find by id one menu item
    Menu.findById(req.params.id)
    .then ((menu) => {
        // console.log(menu)
        res.render("menuupdt/show.ejs", { menu })
    })
    .catch(err => console.log(err))
})


//-------------------------------------------
// Export the Router
//-------------------------------------------
module.exports = router;