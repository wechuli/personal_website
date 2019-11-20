const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const topicSchema = new Schema({
  name: {
    type: String,
    maxlength: 200,
    unique: true
  }
});

module.exports = mongoose.model('topics',topicSchema);
