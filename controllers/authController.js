const AppError = require("./../utils/appError");
const User = require("./../models/userModel");
const jwt = require("jsonwebtoken");

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
  newUser.save().then(console.log("New User Created!"));
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
  res.render("admin/login");
};

exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError("Please provide an email and password!", 400));
  }
  Promise.all([User.find({ email: email }).select("+password")]).then(
    ([user]) => {
      user[0].correctPassword(user[0].password, password).then((result) => {
        if (!result || !user) {
          return next(new AppError("Incorrect username or password!", 401));
        }
        const token = jwt.sign({ id: user[0]._id }, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRES,
        });
        res.status(200).json({ status: "success", token: token });
      });
    }
  );
};
