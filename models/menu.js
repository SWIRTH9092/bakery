//-------------------------------------------
// Import Dependencies
//-------------------------------------------
const mongoose = require("./connection")

//-------------------------------------------
// Define Menu Model
//-------------------------------------------
// pull schema and model from mongoose
const { Schema, model } = mongoose;

// make user schema
const menuSchema = new Schema({
    menuItemID: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    inStock: { Boolean },
    type: {type: String, required: true},
    price: {type: Number, required: true},
    listOrder: {type: Number, required: true},
    username: { type: String, required: true}
});

// make Menu mdoel
const Menu = model("Menu", menuSchema);

//-------------------------------------------
// Export Menu Model
//-------------------------------------------
module.exports = Menu