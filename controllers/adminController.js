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

const sharp = require("sharp");
const multer = require("multer");
const uniqid = require("uniqid");
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `${Date.now()}-${uniqid()}.${ext}`);
  },
});
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image") || file.mimetype.startsWith("video")) {
    cb(null, true);
  } else {
    cb(new AppError("Only image and video allowed!!", 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

//=============================|ABOUT|=================================//
exports.readAllAbout = async (req, res) => {
  const allAbout = await About.find({}).catch((err) => {
    throw err;
  });
  res.status(200).render("admin/_about", { result: allAbout, title: "About" });
};
exports.createGetAbout = async (req, res) => {
  await res
    .status(200)
    .render("admin/createAbout", { nav: "abouts", title: "Create About" });
};
exports.createAbout = async (req, res) => {
  const newAbout = await new About({
    title: {
      az: req.body.titleAz,
      en: req.body.titleEn,
    },
    description: {
      az: req.body.descriptionAz,
      en: req.body.descriptionEn,
    },
  });
  await newAbout
    .save()
    .catch((err) => {
      throw err;
    })
    .then(() => {
      res.status(201).redirect("/admin/abouts");
    });
};

exports.updateGetAbout = async (req, res) => {
  const singleAbout = await About.findById(req.params.id).catch((err) => {
    throw err;
  });
  res.status(200).render("admin/updateAbout", {
    result: singleAbout,
    title: "Update About",
    nav: "abouts",
  });
};
exports.readAbout = async (req, res) => {
  const singleAbout = await About.findById(req.params.id);
  res.status(200).render("admin/readAbout", {
    result: singleAbout,
    title: "About Details",
    nav: "abouts",
  });
};
exports.updateAbout = async (req, res) => {
  let update = {};
  let bluePrint = {
    title: {
      az: req.body.titleAz,
      en: req.body.titleEn,
    },
    description: {
      az: req.body.descriptionAz,
      en: req.body.descriptionEn,
    },
  };
  for (const key of Object.keys(bluePrint)) {
    if (bluePrint[key] !== "") {
      update[key] = bluePrint[key];
    }
  }
  const updated = await About.findOneAndUpdate({ _id: req.params.id }, update);
  res.status(204).redirect("/admin/abouts");
};
exports.deleteAbout = async (req, res) => {
  await About.findByIdAndDelete(req.params.id);
  res.status(200).redirect("/admin/abouts");
};

//=============================|CONTACT|=================================//
exports.readAllContact = async (req, res) => {
  const allContact = await Contact.find({}).catch((err) => {
    throw err;
  });
  res
    .status(200)
    .render("admin/_contact", { result: allContact, title: "Contact" });
};
exports.createGetContact = async (req, res) => {
  await res.status(200).render("admin/createContact", {
    nav: "contacts",
    title: "Create Contact",
  });
};
exports.createContact = async (req, res) => {
  const newContact = await new Contact({
    title: {
      az: req.body.titleAz,
      en: req.body.titleEn,
    },
    content: {
      az: req.body.contentAz,
      en: req.body.contentEn,
    },
  });
  await newContact
    .save()
    .catch((err) => {
      throw err;
    })
    .then(() => {
      res.status(201).redirect("/admin/contacts");
    });
};

exports.updateGetContact = async (req, res) => {
  const singleContact = await Contact.findById(req.params.id).catch((err) => {
    throw err;
  });
  res.status(200).render("admin/updateContact", {
    result: singleContact,
    title: "Update Contact",
    nav: "contacts",
  });
};
exports.readContact = async (req, res) => {
  const singleContact = await Contact.findById(req.params.id);
  res.status(200).render("admin/readContact", {
    result: singleContact,
    title: "Contact Details",
    nav: "contacts",
  });
};
exports.updateContact = async (req, res) => {
  let update = {};
  let bluePrint = {
    title: {
      az: req.body.titleAz,
      en: req.body.titleEn,
    },
    content: {
      az: req.body.contentAz,
      en: req.body.contentEn,
    },
  };
  for (const key of Object.keys(bluePrint)) {
    if (bluePrint[key] !== "") {
      update[key] = bluePrint[key];
    }
  }
  await Contact.findOneAndUpdate({ _id: req.params.id }, update);
  res.status(204).redirect("/admin/contacts");
};
exports.deleteContact = async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.status(200).redirect("/admin/contacts");
};

//=============================|GALERY|=================================//
exports.readAllGalery = (req, res) => {};
exports.createGalery = (req, res) => {};
exports.readGalery = (req, res) => {};
exports.updateGalery = (req, res) => {};
exports.deleteGalery = (req, res) => {};

//=============================|HOME-ABOUT|=================================//
exports.readAllHomeAbout = async (req, res) => {
  const allHomeAbout = await HomeAbout.find({}).catch((err) => {
    throw err;
  });
  res
    .status(200)
    .render("admin/_homeAbout", { result: allHomeAbout, title: "HomeAbout" });
};
exports.createGetHomeAbout = async (req, res) => {
  await res.status(200).render("admin/createHomeAbout", {
    nav: "homeabouts",
    title: "Create HomeAbout",
  });
};
exports.createHomeAbout = async (req, res) => {
  const newHomeAbout = await new HomeAbout({
    title: {
      az: req.body.titleAz,
      en: req.body.titleEn,
    },
    description: {
      az: req.body.descriptionAz,
      en: req.body.descriptionEn,
    },
    isTop: req.body.isTop,
    date: req.body.date,
  });
  await newHomeAbout
    .save()
    .catch((err) => {
      throw err;
    })
    .then(() => {
      res.status(201).redirect("/admin/homeabouts");
    });
};

exports.updateGetHomeAbout = async (req, res) => {
  const singleHomeAbout = await HomeAbout.findById(req.params.id).catch(
    (err) => {
      throw err;
    }
  );
  res.status(200).render("admin/updateHomeAbout", {
    result: singleHomeAbout,
    title: "Update HomeAbout",
    nav: "homeabouts",
  });
};
exports.readHomeAbout = async (req, res) => {
  const singleHomeAbout = await HomeAbout.findById(req.params.id);
  res.status(200).render("admin/readHomeAbout", {
    result: singleHomeAbout,
    title: "HomeAbout Details",
    nav: "homeabouts",
  });
};
exports.updateHomeAbout = async (req, res) => {
  let update = {};
  let bluePrint = {
    title: {
      az: req.body.titleAz,
      en: req.body.titleEn,
    },
    description: {
      az: req.body.descriptionAz,
      en: req.body.descriptionEn,
    },
    isTop: req.body.isTop,
    date: req.body.date,
  };
  for (const key of Object.keys(bluePrint)) {
    if (bluePrint[key] !== "") {
      update[key] = bluePrint[key];
    }
  }
  await HomeAbout.findOneAndUpdate({ _id: req.params.id }, update);
  res.status(204).redirect("/admin/homeabouts");
};
exports.deleteHomeAbout = async (req, res) => {
  await HomeAbout.findByIdAndDelete(req.params.id);
  res.status(200).redirect("/admin/homeabouts");
};

//=============================|HOME-SLIDER|=================================//
exports.readAllHomeSlider = (req, res) => {};
exports.createHomeSlider = (req, res) => {};
exports.readHomeSlider = (req, res) => {};
exports.updateHomeSlider = (req, res) => {};
exports.deleteHomeSlider = (req, res) => {};

//=============================|NEW|=================================//
exports.readAllNew = async (req, res) => {
  const allNew = await New.find({}).catch((err) => {
    throw err;
  });
  res.status(200).render("admin/_new", { result: allNew, title: "New" });
};
exports.createGetNew = async (req, res) => {
  await res.status(200).render("admin/createNew", {
    nav: "news",
    title: "Create New",
  });
};
exports.createNew = async (req, res) => {
  if (req.files.images === undefined) {
    const newNew = await new New({
      title: {
        az: req.body.titleAz,
        en: req.body.titleEn,
      },
      description: {
        az: req.body.descriptionAz,
        en: req.body.descriptionEn,
      },
      images: undefined,
      imageCover: req.files.imageCover[0].filename,
      date: req.body.date,
    });
    await newNew
      .save()
      .catch((err) => {
        throw err;
      })
      .then(() => {
        res.status(201).redirect("/admin/news");
      });
  } else {
    const newNew = await new New({
      title: {
        az: req.body.titleAz,
        en: req.body.titleEn,
      },
      description: {
        az: req.body.descriptionAz,
        en: req.body.descriptionEn,
      },
      images: [],
      imageCover: req.files.imageCover[0].filename,
      date: req.body.date,
    });
    req.files.images.forEach((image) => {
      newNew.images.push(image.filename);
    });
    await newNew
      .save()
      .catch((err) => {
        throw err;
      })
      .then(() => {
        res.status(201).redirect("/admin/news");
      });
  }
};

exports.updateGetNew = async (req, res) => {
  const singleNew = await New.findById({ _id: req.params.id }).catch((err) => {
    throw err;
  });
  res.status(200).render("admin/updateNew", {
    result: singleNew,
    title: "Update New",
    nav: "news",
  });
};
exports.updateGetNewPhoto = async (req, res) => {
  const singleNew = await New.findById({ _id: req.params.id }).catch((err) => {
    throw err;
  });
  res.status(200).render("admin/updateNewPhoto", {
    result: singleNew,
    title: "Update New",
    nav: "news",
  });
};
exports.updateNewPhoto = async (req, res) => {
  await New.findOneAndUpdate(
    { _id: req.params.id },
    { imageCover: req.file.filename }
  );
  res.status(204).redirect("/admin/news");
};
exports.readNew = async (req, res) => {
  const singleNew = await New.findById(req.params.id);
  res.status(200).render("admin/readNew", {
    result: singleNew,
    title: "New Details",
    nav: "news",
  });
};
exports.updateNew = async (req, res) => {
  let update = {};
  let bluePrint = {
    name: {
      az: req.body.nameAz,
      en: req.body.nameEn,
    },
    surname: {
      az: req.body.surnameAz,
      en: req.body.surnameEn,
    },
    job: {
      az: req.body.jobAz,
      en: req.body.jobEn,
    },
    mail: req.body.mail,
  };
  for (const key of Object.keys(bluePrint)) {
    if (bluePrint[key] !== "") {
      update[key] = bluePrint[key];
    }
  }
  await New.findOneAndUpdate({ _id: req.params.id }, update);
  res.status(204).redirect("/admin/news");
};
exports.deleteNew = async (req, res) => {
  await New.findByIdAndDelete(req.params.id);
  res.status(200).redirect("/admin/news");
};

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
exports.readAllTeam = async (req, res) => {
  const allTeam = await Team.find({}).catch((err) => {
    throw err;
  });
  res.status(200).render("admin/_team", { result: allTeam, title: "Team" });
};
exports.createGetTeam = async (req, res) => {
  await res.status(200).render("admin/createTeam", {
    nav: "teams",
    title: "Create Team",
  });
};
exports.createTeam = async (req, res) => {
  if (req.file === undefined) {
    const newTeam = await new Team({
      name: {
        az: req.body.nameAz,
        en: req.body.nameEn,
      },
      surname: {
        az: req.body.surnameAz,
        en: req.body.surnameEn,
      },
      job: {
        az: req.body.jobAz,
        en: req.body.jobEn,
      },
      mail: req.body.mail,
      imageCover: undefined,
    });
    await newTeam
      .save()
      .catch((err) => {
        throw err;
      })
      .then(() => {
        res.status(201).redirect("/admin/teams");
      });
  } else {
    const newTeam = await new Team({
      name: {
        az: req.body.nameAz,
        en: req.body.nameEn,
      },
      surname: {
        az: req.body.surnameAz,
        en: req.body.surnameEn,
      },
      job: {
        az: req.body.jobAz,
        en: req.body.jobEn,
      },
      mail: req.body.mail,
      imageCover: req.file.filename,
    });
    await newTeam
      .save()
      .catch((err) => {
        throw err;
      })
      .then(() => {
        res.status(201).redirect("/admin/teams");
      });
  }
};

exports.updateGetTeam = async (req, res) => {
  const singleTeam = await Team.findById({ _id: req.params.id }).catch(
    (err) => {
      throw err;
    }
  );
  res.status(200).render("admin/updateTeam", {
    result: singleTeam,
    title: "Update Team",
    nav: "teams",
  });
};
exports.updateGetTeamPhoto = async (req, res) => {
  const singleTeam = await Team.findById({ _id: req.params.id }).catch(
    (err) => {
      throw err;
    }
  );
  res.status(200).render("admin/updateTeamPhoto", {
    result: singleTeam,
    title: "Update Team",
    nav: "teams",
  });
};
exports.updateTeamPhoto = async (req, res) => {
  const upData = await Team.findOneAndUpdate(
    { _id: req.params.id },
    { imageCover: req.file.filename }
  );
  res.status(204).redirect("/admin/teams");
};
exports.readTeam = async (req, res) => {
  const singleTeam = await Team.findById(req.params.id);
  res.status(200).render("admin/readTeam", {
    result: singleTeam,
    title: "Team Details",
    nav: "teams",
  });
};
exports.updateTeam = async (req, res) => {
  let update = {};
  let bluePrint = {
    name: {
      az: req.body.nameAz,
      en: req.body.nameEn,
    },
    surname: {
      az: req.body.surnameAz,
      en: req.body.surnameEn,
    },
    job: {
      az: req.body.jobAz,
      en: req.body.jobEn,
    },
    mail: req.body.mail,
  };
  for (const key of Object.keys(bluePrint)) {
    if (bluePrint[key] !== "") {
      update[key] = bluePrint[key];
    }
  }
  await Team.findOneAndUpdate({ _id: req.params.id }, update);
  res.status(204).redirect("/admin/teams");
};
exports.deleteTeam = async (req, res) => {
  await Team.findByIdAndDelete(req.params.id);
  res.status(200).redirect("/admin/teams");
};

//=============================|USER|=================================//
exports.readAllUser = (req, res) => {};
exports.readUser = (req, res) => {};
exports.changePassword = (req, res) => {};

//=============================|IMAGE|=================================//
exports.compressPhoto = (req, res, next) => {
  if (!req.file) return next();
  if (req.file.mimetype.startsWith("image")) {
    req.file.filename = `${Date.now()}.jpeg`;
    sharp(req.file.buffer)
      .toFormat("jpeg")
      .jpeg({ quality: 30 })
      .toFile(`public/uploads/${req.file.filename}`);
  }
  next();
};
exports.uploadPhoto = upload.single("image");
exports.uploadPhotos = upload.fields([
  { name: "imageCover", maxCount: 1 },
  { name: "images", maxCount: 7 },
]);
exports.uploadVideo = upload.single("video");
