const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: {
    az: {
      type: String,
      required: [true, "Team member must have a name in AZ"],
      trim: true,
    },
    en: {
      type: String,
      required: [true, "Team member must have a name in EN"],
      trim: true,
    },
  },
  surname: {
    az: {
      type: String,
      required: [true, "Team member must have a surname in AZ"],
      trim: true,
    },
    en: {
      type: String,
      required: [true, "Team member must have a surname in EN"],
      trim: true,
    },
  },
  job: {
    az: {
      type: String,
      required: [true, "Team member must have occupation in AZ"],
      trim: true,
    },
    en: {
      type: String,
      required: [true, "Team member must have occupation in EN"],
      trim: true,
    },
  },
  mail: {
    type: String,
    trim: true,
  },
  sequence: {
    type: Number,
    required: [true, "Please provide team sequence number"],
  },
  imageCover: String,
});

const Team = new mongoose.model("Team", teamSchema);

module.exports = Team;
