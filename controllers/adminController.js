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
    cb(
      res
        .status(400)
        .redirect(req.path, { message: "Only image and video allowed!" }),
      false
    );
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
exports.readAllGalery = async (req, res) => {
  const allGalery = await Galery.find({}).catch((err) => {
    throw err;
  });
  res
    .status(200)
    .render("admin/_galery", { result: allGalery, title: "Galery" });
};
exports.createGetGalery = async (req, res) => {
  await res.status(200).render("admin/createGalery", {
    nav: "galeries",
    title: "Create Galery",
  });
};
exports.createGalery = async (req, res) => {
  const newGalery = await new Galery({
    title: {
      az: req.body.titleAz,
      en: req.body.titleEn,
    },
    images: [],
  });

  await req.files.images.forEach((image) => {
    newGalery.images.push(image.filename);
  });

  await newGalery
    .save()
    .catch((err) => {
      throw err;
    })
    .then(() => {
      res.status(201).redirect("/admin/galeries");
    });
};
exports.updateGetGalery = async (req, res) => {
  const singleGalery = await Galery.findById({ _id: req.params.id }).catch(
    (err) => {
      throw err;
    }
  );
  res.status(200).render("admin/updateGalery", {
    result: singleGalery,
    title: "Update Galery",
    nav: "galeries",
  });
};
exports.updateGetGaleryPhoto = async (req, res) => {
  const singleGalery = await Galery.findById({ _id: req.params.id }).catch(
    (err) => {
      throw err;
    }
  );
  res.status(200).render("admin/updateGaleryPhoto", {
    result: singleGalery,
    title: "Update Galery",
    nav: "galeries",
  });
};
exports.updateGaleryPhoto = async (req, res) => {
  const result = {
    images: [],
  };
  req.files.images.forEach((image) => {
    result.images.push(image.filename);
  });
  await Galery.findOneAndUpdate({ _id: req.params.id }, result);
  res.status(204).redirect("/admin/galeries");
};
exports.readGalery = async (req, res) => {
  const singleGalery = await Galery.findById(req.params.id);
  res.status(200).render("admin/readGalery", {
    result: singleGalery,
    title: "Galery Details",
    nav: "galeries",
  });
};
exports.updateGalery = async (req, res) => {
  let update = {};
  let bluePrint = {
    title: {
      az: req.body.titleAz,
      en: req.body.titleEn,
    },
  };
  for (const key of Object.keys(bluePrint)) {
    if (bluePrint[key] !== "") {
      update[key] = bluePrint[key];
    }
  }
  await Galery.findOneAndUpdate({ _id: req.params.id }, update);
  res.status(204).redirect("/admin/galeries");
};
exports.deleteGalery = async (req, res) => {
  await Galery.findByIdAndDelete(req.params.id);
  res.status(200).redirect("/admin/galeries");
};

//=============================|HOME-ABOUT|=================================//
exports.readAllHomeAbout = async (req, res) => {
  const allHomeAbout = await HomeAbout.find({}).catch((err) => {
    throw err;
  });
  res
    .status(200)
    .render("admin/_homeabout", { result: allHomeAbout, title: "HomeAbout" });
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
exports.readAllHomeSlider = async (req, res) => {
  const allHomeSlider = await HomeSlider.find({}).catch((err) => {
    throw err;
  });
  res.status(200).render("admin/_homeslider", {
    result: allHomeSlider,
    title: "Slider",
  });
};
exports.createGetHomeSlider = async (req, res) => {
  await res.status(200).render("admin/createHomeSlider", {
    nav: "homesliders",
    title: "Create Slider",
  });
};
exports.createHomeSlider = async (req, res) => {
  if (req.file === undefined) {
    const newHomeSlider = await new HomeSlider({
      titleTop: {
        az: req.body.titleTopAz,
        en: req.body.titleTopEn,
      },
      titleBottom: {
        az: req.body.titleBottomAz,
        en: req.body.titleBottomEn,
      },
      isNewData: req.body.isNewData,
      imageCover: undefined,
      date: req.body.date,
    });
    await newHomeSlider
      .save()
      .catch((err) => {
        throw err;
      })
      .then(() => {
        res.status(201).redirect("/admin/homesliders");
      });
  } else {
    const newHomeSlider = await new HomeSlider({
      titleTop: {
        az: req.body.titleTopAz,
        en: req.body.titleTopEn,
      },
      titleBottom: {
        az: req.body.titleBottomAz,
        en: req.body.titleBottomEn,
      },
      isNewData: req.body.isNewData,
      imageCover: req.file.filename,
      date: req.body.date,
    });
    await newHomeSlider
      .save()
      .catch((err) => {
        throw err;
      })
      .then(() => {
        res.status(201).redirect("/admin/homesliders");
      });
  }
};
exports.updateGetHomeSlider = async (req, res) => {
  const singleHomeSlider = await HomeSlider.findById({
    _id: req.params.id,
  }).catch((err) => {
    throw err;
  });
  res.status(200).render("admin/updateHomeSlider", {
    result: singleHomeSlider,
    title: "Update HomeSlider",
    nav: "homesliders",
  });
};
exports.updateGetHomeSliderPhoto = async (req, res) => {
  const singleHomeSlider = await HomeSlider.findById({
    _id: req.params.id,
  }).catch((err) => {
    throw err;
  });
  res.status(200).render("admin/updateHomeSliderPhoto", {
    result: singleHomeSlider,
    title: "Update HomeSlider",
    nav: "homesliders",
  });
};
exports.updateHomeSliderPhoto = async (req, res) => {
  console.log("I am here !!");
  await HomeSlider.findOneAndUpdate(
    { _id: req.params.id },
    { imageCover: req.file.filename }
  );
  res.status(204).redirect("/admin/homesliders");
};
exports.readHomeSlider = async (req, res) => {
  const singleHomeSlider = await HomeSlider.findById(req.params.id);
  res.status(200).render("admin/readHomeSlider", {
    result: singleHomeSlider,
    title: "HomeSlider Details",
    nav: "homesliders",
  });
};
exports.updateHomeSlider = async (req, res) => {
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
  await HomeSlider.findOneAndUpdate({ _id: req.params.id }, update);
  res.status(204).redirect("/admin/homesliders");
};
exports.deleteHomeSlider = async (req, res) => {
  await HomeSlider.findByIdAndDelete(req.params.id);
  res.status(200).redirect("/admin/homesliders");
};

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
exports.readAllPartner = async (req, res) => {
  const allPartner = await Partner.find({}).catch((err) => {
    throw err;
  });
  res
    .status(200)
    .render("admin/_partner", { result: allPartner, title: "Partner" });
};
exports.createGetPartner = async (req, res) => {
  await res.status(200).render("admin/createPartner", {
    nav: "partners",
    title: "Create Partner",
  });
};
exports.createPartner = async (req, res) => {
  const newPartner = await new Partner({
    name: req.body.name,
    image: req.file.filename,
  });
  await newPartner
    .save()
    .catch((err) => {
      throw err;
    })
    .then(() => {
      res.status(201).redirect("/admin/partners");
    });
};
exports.updateGetPartner = async (req, res) => {
  const singlePartner = await Partner.findById({ _id: req.params.id }).catch(
    (err) => {
      throw err;
    }
  );
  res.status(200).render("admin/updatePartner", {
    result: singlePartner,
    title: "Update Partner",
    nav: "partners",
  });
};
exports.updateGetPartnerPhoto = async (req, res) => {
  const singlePartner = await Partner.findById({ _id: req.params.id }).catch(
    (err) => {
      throw err;
    }
  );
  res.status(200).render("admin/updatePartnerPhoto", {
    result: singlePartner,
    title: "Update Partner",
    nav: "partners",
  });
};
exports.updatePartnerPhoto = async (req, res) => {
  const upData = await Partner.findOneAndUpdate(
    { _id: req.params.id },
    { image: req.file.filename }
  );
  res.status(204).redirect("/admin/partners");
};
exports.readPartner = async (req, res) => {
  const singlePartner = await Partner.findById(req.params.id);
  res.status(200).render("admin/readPartner", {
    result: singlePartner,
    title: "Partner Details",
    nav: "partners",
  });
};
exports.updatePartner = async (req, res) => {
  let update = {};
  let bluePrint = {
    name: req.body.name,
  };
  for (const key of Object.keys(bluePrint)) {
    if (bluePrint[key] !== "") {
      update[key] = bluePrint[key];
    }
  }
  await Partner.findOneAndUpdate({ _id: req.params.id }, update);
  res.status(204).redirect("/admin/partners");
};
exports.deletePartner = async (req, res) => {
  await Partner.findByIdAndDelete(req.params.id);
  res.status(200).redirect("/admin/partners");
};

//=============================|PROJECT|=================================//
exports.readAllProject = async (req, res) => {
  const allProject = await Project.find({}).catch((err) => {
    throw err;
  });
  res
    .status(200)
    .render("admin/_project", { result: allProject, title: "Project" });
};
exports.createGetProject = async (req, res) => {
  await res.status(200).render("admin/createProject", {
    nav: "projects",
    title: "Create Project",
  });
};
exports.createProject = async (req, res) => {
  const newProject = await new Project({
    title: {
      az: req.body.titleAz,
      en: req.body.titleEn,
    },
    description: {
      az: req.body.descriptionAz,
      en: req.body.descriptionEn,
    },
    date: req.body.date,
    imageCover: req.files.imageCover[0].filename,
    images: [],
  });
  if (req.files.images === undefined) {
    newProject.images = undefined;
  } else {
    req.files.images.forEach((image) => {
      newProject.images.push(image.filename);
    });
  }
  await newProject
    .save()
    .catch((err) => {
      throw err;
    })
    .then(() => {
      res.status(201).redirect("/admin/projects");
    });
};
exports.updateGetProject = async (req, res) => {
  const singleProject = await Project.findById({ _id: req.params.id }).catch(
    (err) => {
      throw err;
    }
  );
  res.status(200).render("admin/updateProject", {
    result: singleProject,
    title: "Update Project",
    nav: "projects",
  });
};
exports.updateGetProjectPhoto = async (req, res) => {
  const singleProject = await Project.findById({ _id: req.params.id }).catch(
    (err) => {
      throw err;
    }
  );
  res.status(200).render("admin/updateProjectPhoto", {
    result: singleProject,
    title: "Update Project",
    nav: "projects",
  });
};
exports.updateProjectPhoto = async (req, res) => {
  const upData = await Project.findOneAndUpdate(
    { _id: req.params.id },
    { imageCover: req.file.filename }
  );
  res.status(204).redirect("/admin/projects");
};
exports.readProject = async (req, res) => {
  const singleProject = await Project.findById(req.params.id);
  res.status(200).render("admin/readProject", {
    result: singleProject,
    title: "Project Details",
    nav: "projects",
  });
};
exports.updateProject = async (req, res) => {
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
  await Project.findOneAndUpdate({ _id: req.params.id }, update);
  res.status(204).redirect("/admin/projects");
};
exports.deleteProject = async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.status(200).redirect("/admin/projects");
};

//=============================|SOCIAL-MEDIA|=================================//
exports.readAllSocialMedia = async (req, res) => {
  const allSocialMedia = await SocialMedia.find({}).catch((err) => {
    throw err;
  });
  res.status(200).render("admin/_socialmedia", {
    result: allSocialMedia,
    title: "SocialMedia",
  });
};
exports.createGetSocialMedia = async (req, res) => {
  await res.status(200).render("admin/createSocialMedia", {
    nav: "socialmedias",
    title: "Create SocialMedia",
  });
};
exports.createSocialMedia = async (req, res) => {
  const newSocialMedia = await new SocialMedia({
    name: req.body.name,
    url: req.body.url,
    image: req.file.filename,
  });
  await newSocialMedia
    .save()
    .catch((err) => {
      throw err;
    })
    .then(() => {
      res.status(201).redirect("/admin/socialmedias");
    });
};
exports.updateGetSocialMedia = async (req, res) => {
  const singleSocialMedia = await SocialMedia.findById({
    _id: req.params.id,
  }).catch((err) => {
    throw err;
  });
  res.status(200).render("admin/updateSocialMedia", {
    result: singleSocialMedia,
    title: "Update SocialMedia",
    nav: "socialmedias",
  });
};
exports.updateGetSocialMediaPhoto = async (req, res) => {
  const singleSocialMedia = await SocialMedia.findById({
    _id: req.params.id,
  }).catch((err) => {
    throw err;
  });
  res.status(200).render("admin/updateSocialMediaPhoto", {
    result: singleSocialMedia,
    title: "Update Social Media",
    nav: "socialmedias",
  });
};
exports.updateSocialMediaPhoto = async (req, res) => {
  await SocialMedia.findOneAndUpdate(
    { _id: req.params.id },
    { image: req.file.filename }
  );
  res.status(204).redirect("/admin/socialmedias");
};
exports.readSocialMedia = async (req, res) => {
  const singleSocialMedia = await SocialMedia.findById(req.params.id);
  res.status(200).render("admin/readSocialMedia", {
    result: singleSocialMedia,
    title: "SocialMedia Details",
    nav: "socialmedias",
  });
};
exports.updateSocialMedia = async (req, res) => {
  let update = {};
  let bluePrint = {
    name: req.body.name,
    url: req.body.url,
  };
  for (const key of Object.keys(bluePrint)) {
    if (bluePrint[key] !== "") {
      update[key] = bluePrint[key];
    }
  }
  await SocialMedia.findOneAndUpdate({ _id: req.params.id }, update);
  res.status(204).redirect("/admin/socialmedias");
};
exports.deleteSocialMedia = async (req, res) => {
  await SocialMedia.findByIdAndDelete(req.params.id);
  res.status(200).redirect("/admin/socialmedias");
};

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
  await Team.findOneAndUpdate(
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
exports.readAllUser = async (req, res) => {
  const user = await User.find({});
  res.status(200).render("admin/_user", { result: user, title: "Users" });
};
exports.updateGetUser = async (req, res) => {
  const singleUser = await User.findById(req.params.id);
  res.status(200).render("admin/updateUser", {
    result: singleUser,
    title: "Update User",
    nav: "users",
  });
};
exports.updateUser = async (req, res) => {
  let update = {};
  let bluePrint = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };
  for (const key of Object.keys(bluePrint)) {
    if (bluePrint[key] !== "") {
      update[key] = bluePrint[key];
    }
  }
  await User.findOneAndUpdate({ _id: req.params.id }, update);

  res.status(204).redirect("/admin/users");
};

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
// exports.uploadGaleryPhotos = upload.fields([{ name: "images", maxCount: 7 }]);
