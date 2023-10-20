//
// ===================================================================
// ========================| ECOHUB PROJECT |=========================
// ===================================================================
//

// =============================| PREDEFINE |=============================
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");
const admin = require("./routes/adminRoutes");
const eng = require("./routes/engRoutes");
const aze = require("./routes/azeRoutes");
const upload = multer({ dest: "public/uploads/" });
// =============================| SETTINGS |=============================

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
app.use("/admin", admin);

app.get("/", (req, res) => {
  res.redirect("/aze/");
});

app.get("*", (req, res) => {
  res.render("eng/404", { title: "404" });
});

module.exports = app;
