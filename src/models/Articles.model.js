const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articlesSchema = new Schema(
  {
    title: {
      type: String,
      maxlength: 100,
      required: true
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "Users"
    },
    cover_image: {
      type: String,
      maxlength: 200
    },
    content: {
      type: String,
      required: true,
      maxlength: 2000
    },
    topics: [
      {
        type: Schema.Types.ObjectId,
        ref: "topics"
      }
    ]
  },
  { strict: false, timestamps: true }
);

module.exports = mongoose.model("articles", articlesSchema);
