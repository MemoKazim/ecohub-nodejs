//==============================================================
//=====================|REQUIREMENTS|===========================
//==============================================================

const express = require("express");
const route = express.Router();
const engController = require("../controllers/engController");

//==============================================================
//========================|ROUTES|==============================
//==============================================================

route.get("/", (req, res) => {
  res.redirect("/eng/index");
});

route.get("/index", engController.getIndex);
route.get("/about", engController.getAbout);
route.get("/projects", engController.getProjects);
route.get("/news", engController.getNews);
route.get("/news/:id", engController.getNew);
route.get("/galery", engController.getGalery);
route.get("/ecoart", engController.getEcoart);
route.get("/contact", engController.getContact);

module.exports = route;
