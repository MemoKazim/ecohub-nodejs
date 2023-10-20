const mongoose = require("mongoose");

const socialMediaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  url: {
    type: String,
    default: "#",
  },
  image: {
    type: String,
    required: true,
  },
});

const SocialMedia = new mongoose.model("SocialMedia", socialMediaSchema);
module.exports = SocialMedia;
