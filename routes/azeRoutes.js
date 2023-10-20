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

router.get("/index", azeController.getIndex);
router.get("/about", azeController.getAbout);
router.get("/projects", azeController.getProjects);
router.get("/news", azeController.getNews);
router.get("/news/:id", azeController.getNew);
router.get("/galery", azeController.getGalery);
router.get("/ecoart", azeController.getEcoart);
router.get("/contact", azeController.getContact);

module.exports = router;
