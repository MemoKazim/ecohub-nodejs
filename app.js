//
// ===================================================================
// ========================| ECOHUB PROJECT |=========================
// ===================================================================
//
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
// const admin = require("./routes/admin");                 ###################FIX THIS
const eng = require("./routes/eng");
const aze = require("./routes/aze");
// const multer = require("multer");
// const session = require("express-session");
// const passport = require("passport");
// const LocalStrategy = require("passport-local");
// const crypto = require("crypto");
// const pbkdf2 = require("pbkdf2");
// const validator = require("validator");
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.set("view engine", "ejs");
app.use("/eng", eng);
app.use("/aze", aze);
// app.use("/admin", admin);    ######################AND THIS
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// const upload = multer({ dest: "public/uploads/" });

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

app.get("/", (req, res) => {
  res.redirect("/aze/");
});

app.get("*", (req, res) => {
  res.render("eng/404", { title: "404" });
});
app.listen(PORT, () => {
  console.log(`Server is open at ${PORT}`);
});
