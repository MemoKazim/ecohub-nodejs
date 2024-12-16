const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const authController = require("../controllers/authController");

router.route("/").get(authController.getLogin).post(authController.postLogin);
// router.route("/?*").all(authController.isAuthenticated);

//=============================|ABOUT|=================================//
router
  .get("/abouts/", adminController.readAllAbout)
  .get("/abouts/create", adminController.createGetAbout)
  .post("/abouts/create", adminController.createAbout)
  .get("/abouts/update/:id", adminController.updateGetAbout)
  .post("/abouts/update/:id", adminController.updateAbout)
  .post("/abouts/delete/:id", adminController.deleteAbout)
  .get("/abouts/:id", adminController.readAbout);

//=============================|CONTACT|=================================//
router
  .get("/contacts/", adminController.readAllContact)
  .get("/contacts/create", adminController.createGetContact)
  .post("/contacts/create", adminController.createContact)
  .get("/contacts/update/:id", adminController.updateGetContact)
  .post("/contacts/update/:id", adminController.updateContact)
  .post("/contacts/delete/:id", adminController.deleteContact)
  .get("/contacts/:id", adminController.readContact);

//=============================|GALERY|=================================//
router
  .get("/galeries/", adminController.readAllGalery)
  .get("/galeries/create", adminController.createGetGalery)
  .post(
    "/galeries/create",
    adminController.uploadPhotos,
    adminController.createGalery
  )
  .get("/galeries/update/photo/:id", adminController.updateGetGaleryPhoto)
  .post(
    "/galeries/update/photo/:id",
    adminController.uploadPhotos,
    adminController.updateGaleryPhoto
  )
  .get("/galeries/update/:id", adminController.updateGetGalery)
  .post("/galeries/update/:id", adminController.updateGalery)
  .post("/galeries/delete/:id", adminController.deleteGalery)
  .get("/galeries/:id", adminController.readGalery);

//=============================|HOME-ABOUT|=================================//
router
  .get("/homeabouts/", adminController.readAllHomeAbout)
  .get("/homeabouts/create", adminController.createGetHomeAbout)
  .post("/homeabouts/create", adminController.createHomeAbout)
  .get("/homeabouts/update/:id", adminController.updateGetHomeAbout)
  .post("/homeabouts/update/:id", adminController.updateHomeAbout)
  .post("/homeabouts/delete/:id", adminController.deleteHomeAbout)
  .get("/homeabouts/:id", adminController.readHomeAbout);

//=============================|HOME-SLIDER|=================================//
router
  .get("/homesliders/", adminController.readAllHomeSlider)
  .get("/homesliders/create", adminController.createGetHomeSlider)
  .post(
    "/homesliders/create",
    adminController.uploadPhoto,
    adminController.createHomeSlider
  )
  .get(
    "/homesliders/update/photo/:id",
    adminController.updateGetHomeSliderPhoto
  )
  .post(
    "/homesliders/update/photo/:id",
    adminController.uploadPhoto,
    adminController.updateHomeSliderPhoto
  )
  .get("/homesliders/update/:id", adminController.updateGetHomeSlider)
  .post("/homesliders/update/:id", adminController.updateHomeSlider)
  .post("/homesliders/delete/:id", adminController.deleteHomeSlider)
  .get("/homesliders/:id", adminController.readHomeSlider);

//=============================|NEW|=================================//
router
  .get("/news/", adminController.readAllNew)
  .get("/news/create", adminController.createGetNew)
  .post("/news/create", adminController.uploadPhotos, adminController.createNew)
  .get("/news/update/photo/:id", adminController.updateGetNewPhoto)
  .post(
    "/news/update/photo/:id",
    adminController.uploadPhoto,
    adminController.updateNewPhoto
  )
  .get("/news/update/:id", adminController.updateGetNew)
  .post("/news/update/:id", adminController.updateNew)
  .post("/news/delete/:id", adminController.deleteNew)
  .get("/news/:id", adminController.readNew);

//=============================|PARTNER|=================================//
router
  .get("/partners/", adminController.readAllPartner)
  .get("/partners/create", adminController.createGetPartner)
  .post(
    "/partners/create",
    adminController.uploadPhoto,
    adminController.createPartner
  )
  .get("/partners/update/photo/:id", adminController.updateGetPartnerPhoto)
  .post(
    "/partners/update/photo/:id",
    adminController.uploadPhoto,
    adminController.updatePartnerPhoto
  )
  .get("/partners/update/:id", adminController.updateGetPartner)
  .post("/partners/update/:id", adminController.updatePartner)
  .post("/partners/delete/:id", adminController.deletePartner)
  .get("/partners/:id", adminController.readPartner);

//=============================|PROJECT|=================================//
router
  .get("/projects/", adminController.readAllProject)
  .get("/projects/create", adminController.createGetProject)
  .post(
    "/projects/create",
    adminController.uploadPhotos,
    adminController.createProject
  )
  .get("/projects/update/photo/:id", adminController.updateGetProjectPhoto)
  .post(
    "/projects/update/photo/:id",
    adminController.uploadPhoto,
    adminController.updateProjectPhoto
  )
  .get("/projects/update/:id", adminController.updateGetProject)
  .post("/projects/update/:id", adminController.updateProject)
  .post("/projects/delete/:id", adminController.deleteProject)
  .get("/projects/:id", adminController.readProject);

//=============================|SOCIAL-MEDIA|=================================//
router
  .get("/socialmedias/", adminController.readAllSocialMedia)
  .get("/socialmedias/create", adminController.createGetSocialMedia)
  .post(
    "/socialmedias/create",
    adminController.uploadPhoto,
    adminController.createSocialMedia
  )
  .get(
    "/socialmedias/update/photo/:id",
    adminController.updateGetSocialMediaPhoto
  )
  .post(
    "/socialmedias/update/photo/:id",
    adminController.uploadPhoto,
    adminController.updateSocialMediaPhoto
  )
  .get("/socialmedias/update/:id", adminController.updateGetSocialMedia)
  .post("/socialmedias/update/:id", adminController.updateSocialMedia)
  .post("/socialmedias/delete/:id", adminController.deleteSocialMedia)
  .get("/socialmedias/:id", adminController.readSocialMedia);

//=============================|TEAM|=================================//
router
  .get("/teams/", adminController.readAllTeam)
  .get("/teams/create", adminController.createGetTeam)
  .post(
    "/teams/create",
    adminController.uploadPhoto,
    // adminController.compressPhoto,
    adminController.createTeam
  )
  .get("/teams/update/photo/:id", adminController.updateGetTeamPhoto)
  .post(
    "/teams/update/photo/:id",
    adminController.uploadPhoto,
    adminController.updateTeamPhoto
  )
  .get("/teams/update/:id", adminController.updateGetTeam)
  .post("/teams/update/:id", adminController.updateTeam)
  .post("/teams/delete/:id", adminController.deleteTeam)
  .get("/teams/:id", adminController.readTeam);

//=============================|USER|=================================//
router.route("/users").get(adminController.readAllUser);
router
  .route("/users/updatepassword/:id")
  .get(adminController.updateGetUser)
  .post(adminController.updateUser);

//=============================|AUTHENTICATION|================================//
//==================================|AREA|=====================================//

router
  .route("/signup")
  .get(authController.getSignup)
  .post(authController.postSignup);

module.exports = router;
