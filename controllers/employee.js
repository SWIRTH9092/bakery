//-------------------------------------------
// Import Our Dependencies
//-------------------------------------------
const express = require("express")  // bring in express to make our app work
const Employee = require("../models/employee");
const bcrypt = require("bcryptjs");

//-------------------------------------------
// Create Route
//-------------------------------------------
const router = express.Router();

//-------------------------------------------
// Routes
//-------------------------------------------
//  The Signup Routes (Get => form, post => submit form)
router.get("/signup", (req, res) => {
    res.render("employee/signup.ejs")
});

router.post("/signup", async (req, res) => {
    //encrypt password
    req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10))
    Employee.create(req.body, (err, employee) => {
        //redirect to login page
        res.redirect("/employee/login")
    })
});

// // The login Routes (Get => form, post => submit form)
router.get("/login", (req, res) => {
    res.render("employee/login.ejs")
});

router.post("/login", (req, res) => {
    //get the data from the request body
    const { username, password } = req.body;
    Employee.findOne ({ username }, (err, employee) => {
        //checking if user exists
        if (!employee) {
            res.send("employee doesn't exist");
        } else {
            //check to see if password matches
            const result = bcrypt.compareSync(password, employee.password);
                if (result) {
                    req.session.username = username;
                    req.session.loggedIn = true;
                    res.send ("logon successful");
                } else {
                    res.send("wrong password");
                }
            }
    })
});

//-------------------------------------------
// Add logout to destory the session
//-------------------------------------------
router.get("/logout", (req,res) => {
    //destroy session and redirect to main page
    req.session.destroy((err) => {
        res.redirect("/")
    })
})

//-------------------------------------------
// Export the Router
//-------------------------------------------
module.exports = router;