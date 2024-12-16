//==============================================================
//=====================|REQUIREMENTS|===========================
//==============================================================

const express = require("express");
const router = express.Router();
const azeController = require("../controllers/azeController");

//==============================================================
//========================|ROUTES|==============================
//==============================================================

router.get("/", (req, res) => {
  res.redirect("/aze/index");
});

router
  .get("/index", azeController.getIndex)
  .get("/about", azeController.getAbout)
  .get("/projects", azeController.getProjects)
  .get("/partners", azeController.getPartners)
  .get("/cop29", azeController.getCOP)
  .get("/news", azeController.getNews)
  .get("/news/:id", azeController.getNew)
  .get("/galery", azeController.getGalery)
  .get("/ecoart", azeController.getEcoart)
  .get("/contact", azeController.getContact);

module.exports = router;
