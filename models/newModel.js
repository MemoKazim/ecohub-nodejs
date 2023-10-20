const mongoose = require("mongoose");

const newSchema = new mongoose.Schema({
  title: {
    az: {
      type: String,
      required: [true, "Please provide new title in Azerbaijani"],
      trim: true,
    },
    en: {
      type: String,
      required: [true, "Please provide new title in English"],
      trim: true,
    },
  },
  description: {
    az: {
      type: String,
      required: [true, "Please provide new details in Azerbaijani"],
      trim: true,
    },
    en: {
      type: String,
      required: [true, "Please provide new details in English"],
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

const New = new mongoose.model("New", newSchema);

module.exports = New;
