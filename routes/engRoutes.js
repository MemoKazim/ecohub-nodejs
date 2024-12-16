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

route
  .get("/index", engController.getIndex)
  .get("/about", engController.getAbout)
  .get("/projects", engController.getProjects)
  .get("/partners", engController.getPartners)
  .get("/cop29", engController.getCOP)
  .get("/news", engController.getNews)
  .get("/news/:id", engController.getNew)
  .get("/galery", engController.getGalery)
  .get("/ecoart", engController.getEcoart)
  .get("/contact", engController.getContact);

module.exports = route;
