###  Update Bakery Menu

#### The purpose of this website is to give the employees the ability to dynamically:
-  Add Bakery Items to the Menu
-  Edit a Bakery Item on the Menu.
-  Flag a Bakery Item out of Stock so that it can not be Ordered
-  Update the sort order of the bakery items to be displayed
-  Delete a Bakery Item off the Menu

#### Sue's Gluten Free Bakery
- Responsive - Main Employee: Home, Signup and Login
<img src="https://i.imgur.com/ir9I2jB.png" alt="Main Bakery Website Page" title="Bakery Index" width="75%"/>  
- Web Page Size: List of Bakery Items and Add Bakery Item
<img src="https://i.imgur.com/1GqHOHZ.png" alt="Main Bakery Website Page" title="Bakery Index" width="90%"/>  
- Web Page Size: View Bakery Item and Edit Bakery Item
<img src="https://i.imgur.com/CvLNgp6.png" alt="Main Bakery Website Page" title="Bakery Index" width="90%"/> 
- Responsive: List of Bakery Items, New Bakery Item and Bakery View Item
<img src="https://i.imgur.com/rzjQtxw.png" alt="Main Bakery Website Page" title="Bakery Index" width="90%"/> 
- Responsive: Edit Bakery Item
<img src="https://i.imgur.com/T7uoTen.png" alt="Main Bakery Website Page" title="Bakery Index" width="44%"/> 

#### Links to app:
- Github:  https://github.com/SWIRTH9092/bakery
- Deployment Link to Render: https://bakery-0v6z.onrender.com
- Trello Board: https://trello.com/b/Mj7OY01Z/bakery-menu-update
- link to ERD Diagram: https://drawsql.app/teams/sue-wirths-team/diagrams/bakery-menu-update

#### How to use the app:
1. From https://bakery-0v6z.onrender.com/ Employee Home page
    1.  Click on "Signup" to create a login Username.  You will be redirected to the Signup Webpage.
2. On the Create SignUp Webpage
    1. Enter your information (note:  all fields are required).
    2. Click on "Create Signin".  You will be redirected to the Login Webpage.
3. On the Login Webpage
    1. Enter your ID and password.
    2. Click on "Login".  You will be redirected to the "List of Bakery Items" Webpage
4. On the Bakery Items Webpage
    1. The Navigation bar has "New" and "Logout" as options.
        1. "New" will take you to the "Add Menu Item" Webpage
        2. "Logout" will log you off the website and redirect you to the "Employee Home Page".
    2.  A list of all Bakery Items are displayed in a sort order based on the "Menu List Order Field" on each document.
        1. Click on the "Bakery Item Image" or "View" to view the information for a Bakery Item
        2. Click on "Edit" to edit the information for a Bakery Item
5. On the "new" webpage to "Add a Bakery Item"
    1. The Navigation bar has "BakeryHome" and "Logout" as options.
        1. "Bakery Home" will take you to the "List of Bakery Items" Webpage
        2. "Logout" will log you off the website and redirect you to the "Employee Home Page".
    2.  All fields must be entered.
    3.  Click on "Create Item" to add the menu item. You will be directed back to the "List of Bakery Items" screen.
6.  On the "View" webpage to "View a Bakery Item"
    1. The Navigation bar has "BakeryHome", "New" and "Logout" as options.
        1. "Bakery Home" will take you to the "List of Bakery Items" Webpage
        2. "New" will take you to the "Add Menu Item" Webpage
        3. "Logout" will log you off the website and redirect you to the "Employee Home Page".
    2.  To Edit a Bakery Item, Click on "Edit Item".  You will be redirected to the "Edit an Item Menu".
    3.  To Delete a Bakery Item, Click on "Delete Item".  The Bakery Item will be directed and you will be redirected back to the "List of Bakery Items" Webpage.
7.  On the "Edit Item" to "Edit a Bakery Item"
    1. The Navigation bar has "BakeryHome", "New" and "Logout" as options.
        1. "Bakery Home" will take you to the "List of Bakery Items" Webpage
        2. "New" will take you to the "Add Menu Item" Webpage
        3. "Logout" will log you off the website and redirect you to the "Employee Home Page".
    2. Edit the fields.  Note: all fields must have values.
    3. Click on: "Update" to update the Edit Menu Item.  You will be redirected back to the "View Menu Item" page for this bakery item.

#### Technologies Used
- MongoDB 
- Javascript 
- Expess
- Ejs
- CRUD.  A MongoDB sort was coded for the index display page.
- MongoDB 
- Deployed to Render
- Responsive Design
- Authorization routine
- MVC
- HTML
- CSS

#### Trello board
- link to Trello board: https://trello.com/b/Mj7OY01Z/bakery-menu-update

#### Erd Diagram
- link to ERD Diagram: https://drawsql.app/teams/sue-wirths-team/diagrams/bakery-menu-update

#### WireFrames

- Wire Frame Images Employee Home, Signup and Login
<img src="https://i.imgur.com/h5Zj68Y.png" alt="Main Bakery Website Page" title="Bakery Index" width="90%"/> 

- Wire Frame Images Bakery Menu (List of Bakery Items, View Bakery Item, Edit Bakery Item, Add Bakery Item)
<img src="https://i.imgur.com/DQC3g17.png" alt="Main Bakery Website Page" title="Bakery Index" width="90%"/> 

#### Ice Box
- Add editing for required fields
- Edit price to valid a number
- Add error checking on all MongoDB Add and Update functions