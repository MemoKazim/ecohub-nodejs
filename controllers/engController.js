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
      res.render("eng/index", {
        title: "Home Page",
        script: "index.js",
        home_about: home_about,
        projects: projects,
        footer_news: news,
        footer_projects: projects,
        contact: contacts,
        logo: logos,
        slider: sliders,
        about: about,
        partners: partners,
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
  ]).then(([about, teams, news, projects, contacts, logos]) => {
    res.render("eng/about", {
      title: "About",
      title_nav: "about",
      script: "about.js",
      about: about,
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
    Project.find({}).sort({ date: -1 }),
    Contact.find({}),
    SocialMedia.find({}),
    About.find({}).limit(2),
  ]).then(([news, projects, contacts, logos, about]) => {
    res.render("eng/projects", {
      title: "Projects",
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
    res.render("eng/newprojects", {
      title: "Projects",
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
    res.render("eng/news", {
      title: "News",
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
exports.getNew = async (req, res) => {
  Promise.all([
    New.find({ _id: req.params.id }),
    New.find({}).sort({ date: -1 }).limit(3),
    Project.find({}).sort({ date: -1 }).limit(10),
    Contact.find({}),
    SocialMedia.find({}),
    About.find({}).limit(2),
  ]).then(([new_data, news, projects, contacts, logos, about]) => {
    res.render("eng/new", {
      title: "News",
      title_nav: "news",
      script: "news.js",
      about: about,
      news: new_data,
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
    res.render("eng/galery", {
      title: "Galery",
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
    res.render("eng/partners", {
      partners: partners,
      title: "Partners",
      title_nav: "partners",
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
    res.render("eng/cop29", {
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
    res.render("eng/ecoart", {
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
    res.render("eng/contact", {
      title: "Contact",
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
