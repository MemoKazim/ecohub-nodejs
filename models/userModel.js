const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username field is required!"],
  },
  password: {
    type: String,
    required: [true, "Password field is required"],
  },
  email: {
    type: String,
    required: [true, "Email field is required"],
    unique: true,
    lowecase: true,
    validate: [validator.isEmail, "Email is invalid"],
  },
});

userSchema.pre("save", async (next) => {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

const User = new mongoose.model("User", userSchema);

module.exports = User;
