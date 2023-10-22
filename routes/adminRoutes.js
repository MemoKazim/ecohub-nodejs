const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const authController = require("../controllers/authController");
const AppError = require("../utils/appError");

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
/*
//=============================|GALERY|=================================//
router
  .get("/galeries/", adminController.readAllGalery)
  .get("/galeries/create", adminController.createGetGalery)
  .post("/galeries/create", adminController.createGalery)
  .get("/galeries/update/:id", adminController.updateGetGalery)
  .post("/galeries/update/:id", adminController.updateGalery)
  .post("/galeries/delete/:id", adminController.deleteGalery)
  .get("/galeries/:id", adminController.readGalery);
*/
//=============================|HOME-ABOUT|=================================//
router
  .get("/homeabouts/", adminController.readAllHomeAbout)
  .get("/homeabouts/create", adminController.createGetHomeAbout)
  .post("/homeabouts/create", adminController.createHomeAbout)
  .get("/homeabouts/update/:id", adminController.updateGetHomeAbout)
  .post("/homeabouts/update/:id", adminController.updateHomeAbout)
  .post("/homeabouts/delete/:id", adminController.deleteHomeAbout)
  .get("/homeabouts/:id", adminController.readHomeAbout);

/*
//=============================|HOME-SLIDER|=================================//
router
  .get("/homesliders/", adminController.readAllHomeSlider)
  .get("/homesliders/create", adminController.createGetHomeSlider)
  .post("/homesliders/create", adminController.createHomeSlider)
  .get("/homesliders/update/:id", adminController.updateGetHomeSlider)
  .post("/homesliders/update/:id", adminController.updateHomeSlider)
  .post("/homesliders/delete/:id", adminController.deleteHomeSlider)
  .get("/homesliders/:id", adminController.readHomeSlider);

*/

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

/*
//=============================|PROJECT|=================================//
router
  .get("/projects/", adminController.readAllProject)
  .get("/projects/create", adminController.createGetProject)
  .post("/projects/create", adminController.createProject)
  .get("/projects/update/:id", adminController.updateGetProject)
  .post("/projects/update/:id", adminController.updateProject)
  .post("/projects/delete/:id", adminController.deleteProject)
  .get("/projects/:id", adminController.readProject);


//=============================|SOCIAL-MEDIA|=================================//
router
  .get("/socialMedias/", adminController.readAllSocialMedia)
  .get("/socialMedias/create", adminController.createGetSocialMedia)
  .post("/socialMedias/create", adminController.createSocialMedia)
  .get("/socialMedias/update/:id", adminController.updateGetSocialMedia)
  .post("/socialMedias/update/:id", adminController.updateSocialMedia)
  .post("/socialMedias/delete/:id", adminController.deleteSocialMedia)
  .get("/socialMedias/:id", adminController.readSocialMedia);

*/

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

/*
//=============================|USER|=================================//
router.route("/users").get(adminController.readAllUser);
router
  .route("/users/:id")
  .get(adminController.readUser)
  .put(adminController.updateUser);

*/

//=============================|AUTHENTICATION|================================//
//==================================|AREA|=====================================//
router
  .route("/signup")
  .get(authController.getSignup)
  .post(authController.postSignup);
router
  .route("/login")
  .get(authController.getLogin)
  .post(authController.postLogin);

// router.post(
//   "/demo",
//   adminController.uploadPhoto,
//   adminController.compressPhoto,
//   (req, res) => {
//     console.log(req.file);
//   }
// );
module.exports = router;
