const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 100
    },
    date: {
      type: Date,
      default:Date.now
    },
    
  },
  { strict: false }
);
