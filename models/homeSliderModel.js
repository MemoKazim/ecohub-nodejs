const mongoose = require("mongoose");

const homeSliderSchema = new mongoose.Schema({
  titleTop: {
    az: {
      type: String,
      required: [true, "Please provide slider title top in Azerbaijani"],
      trim: true,
    },
    en: {
      type: String,
      required: [true, "Please provide slider title top in English"],
      trim: true,
    },
  },
  titleBottom: {
    az: {
      type: String,
      required: [true, "Please provide slider title bottom in Azerbaijani"],
      trim: true,
    },
    en: {
      type: String,
      required: [true, "Please provide slider title bottom in English"],
      trim: true,
    },
  },
  imageCover: {
    type: String,
    required: [true, "Please provide image cover"],
  },
  isNewData: {
    type: Boolean,
    default: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const HomeSlider = new mongoose.model("HomeSlider", homeSliderSchema);

module.exports = HomeSlider;
