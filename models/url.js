const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema(
{
    url:{
        type:String,
        required:true,
    }, 
    shortId:{
        type:String,
        required:true,
        unique: true
    }
}, {timestamps:true});

const URL = mongoose.model("url", urlSchema);

module.exports = URL;