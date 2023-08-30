const express = require("express");
const route = express.Router();
const mysql = require("mysql");
let con = mysql.createConnection({
  host: "localhost",
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: "ecohub",
  multipleStatements: true,
});
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

route.get("/", (req, res) => {
  res.redirect("/aze/index");
});

route.get("/index", (req, res) => {
  con.query(
    `
    SELECT * FROM \`index\`;
    SELECT *, DATE_FORMAT(new_date, '%d.%m.%Y') AS news_date FROM news ORDER BY new_date DESC LIMIT 3;
    SELECT * FROM \`projects\`;
    SELECT * FROM \`contact\`;
    SELECT * FROM \`footer\`;
    SELECT * FROM \`indexSlider\`;
    `,
    (err, result) => {
      if (err) throw err;
      res.render("aze/index", {
        title: "Əsas Səhifə",
        script: "index.js",
        index: result[0],
        footer_news: result[1],
        projects: result[2],
        contact: result[3],
        logo: result[4],
        slider: result[5],
      });
    }
  );
});

route.get("/about", (req, res) => {
  con.query(
    `
    SELECT * FROM employees; SELECT * FROM partners; 
    SELECT *, DATE_FORMAT(new_date, '%d.%m.%Y') AS news_date FROM \`news\` ORDER BY new_date DESC LIMIT 3;
    SELECT * FROM \`projects\`;
    SELECT * FROM \`contact\`;
    SELECT * FROM \`footer\`;
    `,
    (err, result) => {
      if (err) throw err;
      res.render("aze/about", {
        title: "Haqqımızda",
        title_nav: "about",
        script: "about.js",
        employees: result[0],
        partners: result[1],
        footer_news: result[2],
        projects: result[3],
        contact: result[4],
        logo: result[5],
      });
    }
  );
});

route.get("/projects", (req, res) => {
  con.query(
    `
    SELECT * FROM \`projects\`; 
    SELECT *, DATE_FORMAT(new_date, '%d.%m.%Y') AS news_date FROM \`news\` ORDER BY new_date DESC LIMIT 3;
    SELECT * FROM \`contact\`;
    SELECT * FROM \`footer\`;
    `,
    (err, result) => {
      if (err) throw err;
      res.render("aze/projects", {
        title: "Layihələrimiz",
        title_nav: "projects",
        script: "projects.js",
        projects: result[0],
        footer_news: result[1],
        contact: result[2],
        logo: result[3],
      });
    }
  );
});

route.get("/news", (req, res) => {
  con.query(
    `
    SELECT *, DATE_FORMAT(new_date, '%d.%m.%Y') AS news_date FROM \`news\` ORDER BY new_date DESC LIMIT 3; 
    SELECT *, DATE_FORMAT(new_date, '%d.%m.%Y') AS news_date FROM \`news\` ORDER BY new_date DESC; 
    SELECT * FROM \`projects\`;
    SELECT * FROM \`contact\`;
    SELECT * FROM \`footer\`;
    `,
    (err, result) => {
      if (err) throw err;
      console.log(result);
      res.render("aze/news", {
        title: "Xəbərlər",
        script: "",
        title_nav: "news",
        footer_news: result[0],
        news: result[1],
        projects: result[2],
        contact: result[3],
        logo: result[4],
      });
    }
  );
});

route.get("/news/:id", (req, res) => {
  con.query(
    `
    SELECT *, DATE_FORMAT(new_date,'%d.%m.%Y') AS news_date FROM \`news\` WHERE new_id=${req.params.id}; 
    SELECT * FROM \`projects\`;
    SELECT *, DATE_FORMAT(new_date, '%d.%m.%Y') AS news_date FROM \`news\` ORDER BY new_date DESC LIMIT 3;
    SELECT * FROM \`contact\`;
    SELECT * FROM \`footer\`;
    `,
    function (err, result) {
      if (err) throw err;
      res.render("aze/new", {
        title: "Xəbərlər",
        title_nav: "news",
        script: "news.js",
        news: result[0],
        projects: result[1],
        footer_news: result[2],
        contact: result[3],
        logo: result[4],
      });
    }
  );
});

route.get("/galery", (req, res) => {
  con.query(
    `
    SELECT *, DATE_FORMAT(new_date, '%d.%m.%Y') AS news_date FROM \`news\` ORDER BY new_date DESC LIMIT 3;
    SELECT * FROM \`projects\`;
    SELECT * FROM \`galery\`;
    SELECT * FROM \`ecoCalendar\`;
    SELECT * FROM \`didYouKnow\`;
    SELECT * FROM \`contact\`;
    SELECT * FROM \`footer\`;
    `,
    function (err, result) {
      if (err) throw err;
      res.render("aze/galery", {
        title: "Qalereya",
        title_nav: "galery",
        script: "galery.js",
        footer_news: result[0],
        projects: result[1],
        galery: result[2],
        calendar: result[3],
        dyk: result[4],
        contact: result[5],
        logo: result[6],
      });
    }
  );
});

route.get("/ecoart", (req, res) => {
  con.query(
    `
    SELECT *, DATE_FORMAT(new_date, '%d.%m.%Y') AS news_date FROM \`news\` ORDER BY new_date DESC LIMIT 3;
    SELECT * FROM \`projects\`;
    SELECT * FROM \`contact\`;
    SELECT * FROM \`footer\`;
    `,
    function (err, result) {
      if (err) throw err;
      res.render("aze/ecoart", {
        title: "Ecoart",
        title_nav: "ecoart",
        script: "",
        footer_news: result[0],
        projects: result[1],
        contact: result[2],
        logo: result[3],
      });
    }
  );
});

route.get("/contact", (req, res) => {
  con.query(
    `
    SELECT *, DATE_FORMAT(new_date, '%d.%m.%Y') AS news_date FROM \`news\` ORDER BY new_date DESC LIMIT 3;
    SELECT * FROM \`projects\`;
    SELECT * FROM \`contact\`;
    SELECT * FROM \`footer\`;
    `,
    function (err, result) {
      if (err) throw err;
      res.render("aze/contact", {
        title: "Əlaqə",
        title_nav: "contact",
        script: "",
        footer_news: result[0],
        projects: result[1],
        contact: result[2],
        logo: result[3],
      });
    }
  );
});

module.exports = route;
