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
  if (req.file === undefined) {
    const newProject = await new Project({
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
    await newProject
      .save()
      .catch((err) => {
        throw err;
      })
      .then(() => {
        res.status(201).redirect("/admin/projects");
      });
  } else {
    const newProject = await new Project({
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
    await newProject
      .save()
      .catch((err) => {
        throw err;
      })
      .then(() => {
        res.status(201).redirect("/admin/projects");
      });
  }
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
