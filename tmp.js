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
  console.log(req.file);
  // if (req.files.images === undefined) {
  //   const newNew = await new New({
  //     title: {
  //       az: req.body.titleAz,
  //       en: req.body.titleEn,
  //     },
  //     description: {
  //       az: req.body.descriptionAz,
  //       en: req.body.descriptionEn,
  //     },
  //     images: undefined,
  //     imageCover: req.file.imageCover,
  //     date: req.body.date,
  //   });
  //   await newNew
  //     .save()
  //     .catch((err) => {
  //       throw err;
  //     })
  //     .then(() => {
  //       res.status(201).redirect("/admin/news");
  //     });
  // } else {
  //   const newNew = await new New({
  //     title: {
  //       az: req.body.titleAz,
  //       en: req.body.titleEn,
  //     },
  //     description: {
  //       az: req.body.descriptionAz,
  //       en: req.body.descriptionEn,
  //     },
  //     images: req.file.images,
  //     imageCover: req.file.imageCover,
  //     date: req.body.date,
  //   });
  //   await newNew
  //     .save()
  //     .catch((err) => {
  //       throw err;
  //     })
  //     .then(() => {
  //       res.status(201).redirect("/admin/news");
  //     });
  // }
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
  // if (req.files.imageCover === undefined) {
  //   await New.findOneAndUpdate(
  //     { _id: req.params.id },
  //     { images: req.files.images }
  //   );
  //   res.status(204).redirect("/admin/news");
  // } else {
  //   await New.findOneAndUpdate(
  //     { _id: req.params.id },
  //     { imageCover: req.file.filename }
  //   );
  //   res.status(204).redirect("/admin/news");
  // }
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
