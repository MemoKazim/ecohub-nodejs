const AppError = require("./../utils/appError");

exports.getLogin = (req, res, next) => {
  res.render("admin/login");
};

exports.postLogin = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    next(new AppError("Please provide an email and password!", 400));
  }

  const token = "";
};
