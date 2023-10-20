const mongoose = require("mongoose");

const galerySchema = new mongoose.Schema({
  title: {
    az: {
      type: String,
      required: [true, "Please provide galery title in AZ"],
      trim: true,
    },
    en: {
      type: String,
      required: [true, "Please provide galery title in EN"],
      trim: true,
    },
  },
  images: [String],
});

const Galery = new mongoose.model("Galery", galerySchema);

module.exports = Galery;
