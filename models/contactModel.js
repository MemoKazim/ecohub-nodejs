const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  title: {
    az: {
      type: String,
      required: [true, "Contact must have title in AZ"],
      trim: true,
    },
    en: {
      type: String,
      required: [true, "Contact must have title in EN"],
      trim: true,
    },
  },
  content: {
    az: {
      type: String,
      required: [true, "Contact must have content in AZ"],
      trim: true,
    },
    en: {
      type: String,
      required: [true, "Contact must have content in EN"],
      trim: true,
    },
  },
});

const Contact = new mongoose.model("Contact", contactSchema);

module.exports = Contact;
