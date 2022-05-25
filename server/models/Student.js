const mongoose = require("mongoose")
const {isEmail} = require("validator")

const StudentSchema = new mongoose.Schema({
    Name: {
        required: true,
        type:String,
    },
    Mobile: {
        required: true,
        type:String,
    },
    Email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        validate:[isEmail,"invalid Email"]
      
        
    },
    
    RollNumber: {
        default:1,
        type: Number,
        unique: true,
        required: true,
        
    },
    Address: {
        required: true,
        type:String,
        
    },
})

module.exports = mongoose.model("Student",StudentSchema)