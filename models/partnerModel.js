const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Partner must have name"],
  },
  image: {
    type: String,
    required: [true, "Partner must have image"],
  },
  url: {
    type: String,
  },
});

const Partner = new mongoose.model("Partner", partnerSchema);

module.exports = Partner;
