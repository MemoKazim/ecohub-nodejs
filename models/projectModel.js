const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    az: {
      type: String,
      required: [true, "Please provide project title in Azerbaijani"],
      trim: true,
    },
    en: {
      type: String,
      required: [true, "Please provide project title in English"],
      trim: true,
    },
  },
  description: {
    az: {
      type: String,
      required: [true, "Please provide project details in Azerbaijani"],
      trim: true,
    },
    en: {
      type: String,
      required: [true, "Please provide project details in English"],
      trim: true,
    },
  },
  imageCover: {
    type: String,
    required: [true, "Please provide image cover"],
  },
  images: [String],
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Project = new mongoose.model("Project", projectSchema);

module.exports = Project;
