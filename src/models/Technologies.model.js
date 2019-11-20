const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const techSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 100,
    unique: true
  },
  type: {
    type: String,
    required: true,
    maxlength: 100,
    enum: ["Platform", "Language", "Framework", "Library"]
  }
});

module.exports = mongoose.model("technologies", techSchema);
