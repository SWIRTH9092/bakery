//-------------------------------------------
// Import Our Dependencies
//-------------------------------------------
const express = require("express")  // bring in express to make our app work
const Employee = require("../models/employee");
const bcrypt = require("bcryptjs");
const { render } = require("ejs");

//-------------------------------------------
// Create Route
//-------------------------------------------
const router = express.Router();

//-------------------------------------------
// Routes
//-------------------------------------------
// home page to signup or login
router.get("/", (req, res) => {
    res.render("employee/home.ejs")
});

//-------------------------------------------
// For initial signup display screens
//-------------------------------------------
//  The Signup Routes (Get => form, post => submit form)
router.get("/signup", (req, res) => {
    res.render("employee/signup.ejs")
});

//
router.post("/signup", async (req, res) => {
    //encrypt password
    req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10))
    Employee.create(req.body, (err, employee) => {
    if (!employee) {
        console.log("not employee")
        if (err.code === 11000) {
            res.redirect("/employee/signup2")
        } else {
            res.send("fatal signup error.  Try again.")
        }
    } else {
        //  redirect to login page
        console.log("display employee")
        res.redirect("/employee/login")
    }
    })
});

//-------------------------------------------
// For duplicate Userid Error Screens
//-------------------------------------------
//  The Signup Routes (Get => form, post => submit form)
router.get("/signup2", (req, res) => {
    res.render("employee/signup2.ejs", {  signinmsg: "Username already used.  Please choose another." })
});

//
router.post("/signup2", async (req, res) => {
    //encrypt password
    req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10))
    Employee.create(req.body, (err, employee) => {
    if (!employee) {
        if (err.code === 11000) {
            res.redirect("/employee/signup2")
        } else {
            res.send("fatal signup error.  Try again.")
        }
    } else {
        //  redirect to login page
        res.redirect("/employee/login")
    }
    })
});

//-------------------------------------------
// Intial Login Routes
//-------------------------------------------
// The login Routes (Get => form, post => submit form)
router.get("/login", (req, res) => {
    res.render("employee/login.ejs")
})

router.post("/login", (req, res) => {
    //get the data from the request body
    const { username, password } = req.body;
    Employee.findOne ({ username }, (err, employee) => {
        //checking if user exists
        if (!employee) {
            res.redirect("/employee/login2")
        } else {
            //check to see if password matches
            const result = bcrypt.compareSync(password, employee.password);
                if (result) {
                    req.session.username = username;
                    req.session.loggedIn = true;
                    res.redirect("/menuupdt")
                } else {
                    res.redirect("/employee/login2")
                }
            }
    })
});

//-------------------------------------------
// Error Login Screen - wrong id or password
//-------------------------------------------
// The login Routes (Get => form, post => submit form)
router.get("/login2", (req, res) => {
    res.render("employee/login2.ejs", { loginmsg: "Username or Password Error" })
});

router.post("/login2", (req, res) => {
    //get the data from the request body
    const { username, password } = req.body;
    Employee.findOne ({ username }, (err, employee) => {
        //checking if user exists
        if (!employee) {
            console.log(err, err.code)
            res.send("employee doesn't exist");
        } else {
            //check to see if password matches
            const result = bcrypt.compareSync(password, employee.password);
                if (result) {
                    req.session.username = username;
                    req.session.loggedIn = true;
                    res.redirect("/menuupdt")
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