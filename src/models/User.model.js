const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    maxlength: 50,
    required: true
  },
  lastName: {
    type: String,
    maxlength: 50,
    required: true
  },
  username: {
    type: String,
    maxlength: 50
  },
  password: {
    type: String,
    maxlength: 500,
    required: true
  },
  email: {
    type: String,
    maxlength: 100,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model("users", userSchema);
