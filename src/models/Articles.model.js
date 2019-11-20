const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articlesSchema = new Schema({

    title:{
        type:String,
        maxlength:100,
        required:true
    },
}, { strict: false });
