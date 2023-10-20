const mongoose = require("mongoose");

const homeAboutSchema = new mongoose.Schema({
  title: {
    az: {
      type: String,
      required: [true, "Please provide about title in Azerbaijani"],
      trim: true,
    },
    en: {
      type: String,
      required: [true, "Please provide about title in English"],
      trim: true,
    },
  },
  description: {
    az: {
      type: String,
      required: [true, "Please provide about description in Azerbaijani"],
      trim: true,
    },
    en: {
      type: String,
      required: [true, "Please provide about description in English"],
      trim: true,
    },
  },
  isTop: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const HomeAbout = new mongoose.model("HomeAbout", homeAboutSchema);

module.exports = HomeAbout;
