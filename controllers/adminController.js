const SocialMedia = require("./../models/socialMediaModel");
const HomeSlider = require("./../models/homeSliderModel");
const HomeAbout = require("./../models/homeAboutModel");
const Contact = require("./../models/contactModel");
const Partner = require("./../models/partnerModel");
const Project = require("./../models/projectModel");
const Galery = require("./../models/galeryModel");
const About = require("./../models/aboutModel");
const Team = require("./../models/teamModel");
const User = require("./../models/userModel");
const New = require("./../models/newModel");

//=============================|ABOUT|=================================//
exports.readAllAbout = (req, res) => {
  About.find({});
};
exports.createAbout = (req, res) => {};
exports.readAbout = (req, res) => {};
exports.updateAbout = (req, res) => {};
exports.deleteAbout = (req, res) => {};

//=============================|CONTACT|=================================//
exports.readAllContact = (req, res) => {};
exports.createContact = (req, res) => {};
exports.readContact = (req, res) => {};
exports.updateContact = (req, res) => {};
exports.deleteContact = (req, res) => {};

//=============================|GALERY|=================================//
exports.readAllGalery = (req, res) => {};
exports.createGalery = (req, res) => {};
exports.readGalery = (req, res) => {};
exports.updateGalery = (req, res) => {};
exports.deleteGalery = (req, res) => {};

//=============================|HOME-ABOUT|=================================//
exports.readAllHomeAbout = (req, res) => {};
exports.createHomeAbout = (req, res) => {};
exports.readHomeAbout = (req, res) => {};
exports.updateHomeAbout = (req, res) => {};
exports.deleteHomeAbout = (req, res) => {};

//=============================|HOME-SLIDER|=================================//
exports.readAllHomeSlider = (req, res) => {};
exports.createHomeSlider = (req, res) => {};
exports.readHomeSlider = (req, res) => {};
exports.updateHomeSlider = (req, res) => {};
exports.deleteHomeSlider = (req, res) => {};

//=============================|NEW|=================================//
exports.readAllNew = (req, res) => {};
exports.createNew = (req, res) => {};
exports.readNew = (req, res) => {};
exports.updateNew = (req, res) => {};
exports.deleteNew = (req, res) => {};

//=============================|PARTNER|=================================//
exports.readAllPartner = (req, res) => {};
exports.createPartner = (req, res) => {};
exports.readPartner = (req, res) => {};
exports.updatePartner = (req, res) => {};
exports.deletePartner = (req, res) => {};

//=============================|PROJECT|=================================//
exports.readAllProject = (req, res) => {};
exports.createProject = (req, res) => {};
exports.readProject = (req, res) => {};
exports.updateProject = (req, res) => {};
exports.deleteProject = (req, res) => {};

//=============================|SOCIAL-MEDIA|=================================//
exports.readAllSocialMedia = (req, res) => {};
exports.createSocialMedia = (req, res) => {};
exports.readSocialMedia = (req, res) => {};
exports.updateSocialMedia = (req, res) => {};
exports.deleteSocialMedia = (req, res) => {};

//=============================|TEAM|=================================//
exports.readAllTeam = (req, res) => {};
exports.createTeam = (req, res) => {};
exports.readTeam = (req, res) => {};
exports.updateTeam = (req, res) => {};
exports.deleteTeam = (req, res) => {};

//=============================|USER|=================================//
exports.readAllUser = (req, res) => {};
exports.readUser = (req, res) => {};
exports.changePassword = (req, res) => {};
