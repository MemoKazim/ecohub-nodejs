const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const authController = require("../controllers/authController");

/*
//=============================|ABOUT|=================================//
router
  .route("/abouts")
  .get(adminController.readAllAbout)
  .post(adminController.createAbout);
router
  .route("/abouts/:id")
  .get(adminController.readAbout)
  .put(adminController.updateAbout)
  .delete(adminController.deleteAbout);

//=============================|CONTACT|=================================//
router
  .route("/contacts")
  .get(adminController.readAllContact)
  .post(adminController.createContact);
router
  .route("/contacts/:id")
  .get(adminController.readContact)
  .put(adminController.updateContact)
  .delete(adminController.deleteContact);

//=============================|GALERY|=================================//
router
  .route("/galerys")
  .get(adminController.readAllGalery)
  .post(adminController.createGalery);
router
  .route("/galerys/:id")
  .get(adminController.readGalery)
  .put(adminController.updateGalery)
  .delete(adminController.deleteGalery);

//=============================|HOME-ABOUT|=================================//
router
  .route("/homeabouts")
  .get(adminController.readAllHomeAbout)
  .post(adminController.createHomeAbout);
router
  .route("/homeabouts/:id")
  .get(adminController.readHomeAbout)
  .put(adminController.updateHomeAbout)
  .delete(adminController.deleteHomeAbout);

//=============================|HOME-SLIDER|=================================//
router
  .route("/homesliders")
  .get(adminController.readAllHomeSlider)
  .post(adminController.createHomeSlider);
router
  .route("/homesliders/:id")
  .get(adminController.readHomeSlider)
  .put(adminController.updateHomeSlider)
  .delete(adminController.deleteHomeSlider);

//=============================|NEW|=================================//
router
  .route("/news")
  .get(adminController.readAllNew)
  .post(adminController.createNew);
router
  .route("/news/:id")
  .get(adminController.readNew)
  .put(adminController.updateNew)
  .delete(adminController.deleteNew);

//=============================|PARTNER|=================================//
router
  .route("/partners")
  .get(adminController.readAllPartner)
  .post(adminController.createPartner);
router
  .route("/partners/:id")
  .get(adminController.readPartner)
  .put(adminController.updatePartner)
  .delete(adminController.deletePartner);

//=============================|PROJECT|=================================//
router
  .route("/projects")
  .get(adminController.readAllProject)
  .post(adminController.createProject);
router
  .route("/projects/:id")
  .get(adminController.readProject)
  .put(adminController.updateProject)
  .delete(adminController.deleteProject);

//=============================|SOCIAL-MEDIA|=================================//
router
  .route("/socialmedias")
  .get(adminController.readAllSocialMedia)
  .post(adminController.createSocialMedia);
router
  .route("/socialmedias/:id")
  .get(adminController.readSocialMedia)
  .put(adminController.updateSocialMedia)
  .delete(adminController.deleteSocialMedia);

//=============================|TEAM|=================================//
router
  .route("/teams")
  .get(adminController.readAllTeams)
  .post(adminController.createTeams);
router
  .route("/teams/:id")
  .get(adminController.readTeams)
  .put(adminController.updateTeams)
  .delete(adminController.deleteTeams);

//=============================|USER|=================================//
router.route("/users").get(adminController.readAllUser);
router
  .route("/users/:id")
  .get(adminController.readUser)
  .put(adminController.updateUser);

*/

//=============================|AUTHENTICATION|================================//
//==================================|AREA|=====================================//
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);
router.post("/login", authController.postLogin);
router.get("/", authController.getLogin);
module.exports = router;
