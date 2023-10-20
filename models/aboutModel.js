const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
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
      trim: true,
    },
    en: {
      type: String,
      trim: true,
    },
  },
});

const About = new mongoose.model("About", aboutSchema);

module.exports = About;
