const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 100
    },

    category: [
      {
        type: String,
        enum: ["Web", "Mobile", "AI/Machine Learning", "IoT"]
      }
    ],
    technologies: [
      {
        type: Schema.Types.ObjectId,
        ref: "Technologies"
      }
    ],
    content: {
      type: String,
      required: true,
      maxlength: 5000
    },
    repo_link: {
      type: String,
      maxlength: 200
    },
    cover_image: {
      type: String,
      maxlength: 200
    }
  },
  { strict: false, timestamps: true }
);

module.exports = mongoose.model("projects", projectSchema);
