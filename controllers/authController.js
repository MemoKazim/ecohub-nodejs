const AppError = require("./../utils/appError");
const User = require("./../models/userModel");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

/* SIGNUP !!!!! COMMENT AFTER CREATION OF USER */
exports.getSignup = (req, res, next) => {
  res.render("admin/signup");
};
exports.postSignup = (req, res, next) => {
  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    isAdmin: true,
  });
  newUser.save();
  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
  res.status(201).json({
    status: "success",
    token,
    data: {
      user: newUser,
    },
  });
};

exports.getLogin = (req, res, next) => {
  res.render("admin/login", { message: undefined });
};

exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;
  const cookieOptions = {
    expires: new Date(Date.now() + 60 * 60 * 1000),
    httpOnly: true,
  };
  if (!email || !password) {
    return res
      .status(400)
      .render("admin/login", { message: "Incorrect username or password" });
  }
  const user = await User.find({ email: email }).select("+password");
  const result = await user[0].correctPassword(user[0].password, password);
  if (!result || !user) {
    return res
      .status(401)
      .render("admin/login", { message: "Incorrect username or password" });
  }
  const token = await jwt.sign({ id: user[0]._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
  return res
    .status(200)
    .cookie("jwt", token, cookieOptions)
    .render("admin/index", { title: "AdminPanel" });
};

exports.isAuthenticated = async (req, res, next) => {
  if (!req.headers.cookie || req.headers.cookie === undefined) {
    return res.render("error/401", { message: "You are not authorized!" });
  }
  let token = req.headers.cookie.split("=")[1];

  const decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  const freshUser = await User.findById(decode.id);
  if (!freshUser) {
    return res.status(401).render("admin/login", {
      message: "This user with this token is no longer exists",
    });
  }
  next();
};
