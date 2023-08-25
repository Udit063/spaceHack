const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    name: {
        type: String,
        required: true
    },
    Organizer_Name:{
        type:String,
        required:true
    }
    })

    
module.exports = mongoose.model("user", userSchema);