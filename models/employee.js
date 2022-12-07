//-------------------------------------------
// Import Dependencies
//-------------------------------------------
const mongoose = require("./connection")

//-------------------------------------------
// Define Model
//-------------------------------------------
// pull schema and model from mongoose
const { Schema, model } = mongoose;

// make user schema
const employeeSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    employeeId: {type: String, required: true},
    firstName: {type: String, required: true },
    lastName: {type: String, required: true}
});

// make Employee mdoel
const Employee = model("Employee", employeeSchema);

//-------------------------------------------
// Export Model
//-------------------------------------------
module.exports = Employee