const SocialMedia = require("./../models/socialMediaModel");
const HomeSlider = require("./../models/homeSliderModel");
const HomeAbout = require("./../models/homeAboutModel");
const Contact = require("./../models/contactModel");
const Partner = require("./../models/partnerModel");
const Project = require("./../models/projectModel");
const Galery = require("./../models/galeryModel");
const About = require("./../models/aboutModel");
const Team = require("./../models/teamModel");
const New = require("./../models/newModel");

exports.getIndex = (req, res) => {
  Promise.all([
    HomeAbout.find({}),
    New.find({}).sort({ date: -1 }).limit(3),
    Project.find({}).sort({ date: -1 }),
    Contact.find({}),
    SocialMedia.find({}),
    HomeSlider.find({}),
    About.find({}).limit(2),
    Partner.find({}),
  ]).then(
    ([
      home_about,
      news,
      projects,
      contacts,
      logos,
      sliders,
      about,
      partners,
    ]) => {
      res.render("aze/index", {
        partners: partners,
        title: "Əsas Səhifə",
        script: "index.js",
        home_about: home_about,
        projects: projects,
        footer_news: news,
        footer_projects: projects.slice(0, 4),
        contact: contacts,
        logo: logos,
        slider: sliders,
        about: about,
      });
    }
  );
};
exports.getAbout = (req, res) => {
  Promise.all([
    About.find({}),
    Team.find({}).sort({ sequence: 1 }),
    New.find({}).sort({ date: -1 }).limit(3),
    Project.find({}).sort({ date: -1 }).limit(10),
    Contact.find({}),
    SocialMedia.find({}),
    About.find({}).limit(2),
  ]).then(([about, teams, news, projects, contacts, logos, lim_about]) => {
    res.render("aze/about", {
      title: "Haqqımızda",
      title_nav: "about",
      script: "about.js",
      about: about,
      lim_about: lim_about,
      employees: teams,
      footer_news: news,
      projects: projects,
      contact: contacts,
      logo: logos,
    });
  });
};
/* ORIGINAL ONE
exports.getProjects = (req, res) => {
  Promise.all([
    New.find({}).sort({ date: -1 }).limit(3),
    Project.find({}).sort({ date: -1 }).limit(10),
    Contact.find({}),
    SocialMedia.find({}),
    About.find({}).limit(2),
  ]).then(([news, projects, contacts, logos, about]) => {
    res.render("aze/projects", {
      title: "Layihələr",
      title_nav: "projects",
      script: "projects.js",
      about: about,
      projects: projects,
      footer_news: news,
      contact: contacts,
      logo: logos,
    });
  });
};
*/
exports.getProjects = (req, res) => {
  Promise.all([
    New.find({}).sort({ date: -1 }).limit(3),
    Project.find({}).sort({ date: -1 }).limit(10),
    Contact.find({}),
    SocialMedia.find({}),
    About.find({}).limit(2),
  ]).then(([news, projects, contacts, logos, about]) => {
    res.render("aze/newprojects", {
      title: "Layihələr",
      title_nav: "projects",
      script: "projects.js",
      about: about,
      projects: projects,
      footer_news: news,
      contact: contacts,
      logo: logos,
    });
  });
};
exports.getNews = async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 6;
  const offset = (page - 1) * limit;
  const total = await New.count();
  Promise.all([
    New.find({}).sort({ date: -1 }).skip(offset).limit(limit),
    Project.find({}).sort({ date: -1 }).limit(10),
    Contact.find({}),
    SocialMedia.find({}),
    About.find({}).limit(2),
  ]).then(([news, projects, contacts, logos, about]) => {
    res.render("aze/news", {
      title: "Xəbərlər",
      script: "",
      title_nav: "news",
      about: about,
      footer_news: news.slice(0, 3),
      news: news,
      projects: projects,
      contact: contacts,
      logo: logos,
      total: Math.floor(total / limit) + 1,
      page: page,
    });
  });
};
exports.getNew = (req, res) => {
  Promise.all([
    New.find({ _id: req.params.id }),
    New.find({}).sort({ date: -1 }).limit(3),
    Project.find({}).sort({ date: -1 }).limit(10),
    Contact.find({}),
    SocialMedia.find({}),
    About.find({}).limit(2),
  ]).then(([new_data, news, projects, contacts, logos, about]) => {
    res.render("aze/new", {
      title: "Xəbərlər",
      title_nav: "news",
      script: "news.js",
      about: about,
      news: new_data[0],
      projects: projects,
      footer_news: news,
      contact: contacts,
      logo: logos,
    });
  });
};
exports.getGalery = (req, res) => {
  Promise.all([
    Galery.find({}),
    New.find({}).sort({ date: -1 }).limit(3),
    Project.find({}).sort({ date: -1 }).limit(10),
    Contact.find({}),
    SocialMedia.find({}),
    About.find({}).limit(2),
  ]).then(([galery, news, projects, contacts, logos, about]) => {
    res.render("aze/galery", {
      title: "Qalereya",
      title_nav: "galery",
      script: "galery.js",
      about: about,
      footer_news: news,
      projects: projects,
      galery: galery,
      contact: contacts,
      logo: logos,
    });
  });
};
exports.getPartners = (req, res) => {
  Promise.all([
    New.find({}).sort({ date: -1 }).limit(3),
    Project.find({}).sort({ date: -1 }).limit(10),
    Contact.find({}),
    SocialMedia.find({}),
    About.find({}).limit(2),
    Partner.find({}).sort({ sequence: 1 }),
  ]).then(([news, projects, contacts, logos, about, partners]) => {
    res.render("aze/partners", {
      partners: partners,
      title: "Tərəfdaşlar",
      title_nav: "tərəfdaşlar",
      script: "",
      about: about,
      footer_news: news,
      footer_projects: projects.slice(0, 4),
      projects: projects,
      contact: contacts,
      logo: logos,
    });
  });
};
exports.getCOP = (req, res) => {
  Promise.all([
    New.find({}).sort({ date: -1 }).limit(3),
    Project.find({}).sort({ date: -1 }).limit(10),
    Contact.find({}),
    SocialMedia.find({}),
    About.find({}).limit(2),
  ]).then(([news, projects, contacts, logos, about]) => {
    res.render("aze/cop29", {
      title: "COP29",
      title_nav: "COP29",
      script: "",
      about: about,
      footer_news: news,
      projects: projects,
      contact: contacts,
      logo: logos,
    });
  });
};
exports.getEcoart = (req, res) => {
  Promise.all([
    New.find({}).sort({ date: -1 }).limit(3),
    Project.find({}).sort({ date: -1 }).limit(10),
    Contact.find({}),
    SocialMedia.find({}),
    About.find({}).limit(2),
  ]).then(([news, projects, contacts, logos, about]) => {
    res.render("aze/ecoart", {
      title: "Ecoart",
      title_nav: "ecoart",
      script: "",
      about: about,
      footer_news: news,
      projects: projects,
      contact: contacts,
      logo: logos,
    });
  });
};
exports.getContact = (req, res) => {
  Promise.all([
    New.find({}).sort({ date: -1 }).limit(3),
    Project.find({}).sort({ date: -1 }).limit(10),
    Contact.find({}),
    SocialMedia.find({}),
    About.find({}).limit(2),
  ]).then(([news, projects, contacts, logos, about]) => {
    res.render("aze/contact", {
      title: "Əlaqə",
      title_nav: "contact",
      script: "",
      about: about,
      footer_news: news,
      projects: projects,
      contact: contacts,
      logo: logos,
    });
  });
};
