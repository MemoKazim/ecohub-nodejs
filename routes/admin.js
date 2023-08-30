// passport.use(
//   new LocalStrategy(function verify(username, password, cb) {
//     User.findOne({ username: username }, function (err, row) {
//       if (err) {
//         return cb(err);
//       }
//       if (!row) {
//         return cb(null, false, {
//           message: "Incorrect username or password.",
//         });
//       }
//       crypto.pbkdf2(
//         password,
//         row.Salt,
//         2023,
//         32,
//         "sha512",
//         function (err, hashedPassword) {
//           if (err) {
//             return cb(err);
//           }
//           if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
//             return cb(null, false, {
//               message: "Incorrect username or password.",
//             });
//           }
//           return cb(null, row);
//         }
//       );
//     });
//   })
// );

// app.get("/admin", (req, res) => {
//   res.render("admin/login", { title: "Log in" });
// });

// app.post(
//   "/admin",
//   passport.authenticate("local", {
//     successRedirect: "/admin/users",
//     failureRedirect: "/admin",
//   })
// );

// //
// // ====================================================================
// // =============================| CREATE |=============================
// // ====================================================================
// //

// app.get("/admin/uploadMember", (req, res) => {
//   if (req.isAuthenticated()) {
//     res.render("admin/uploadMember", { title: "Member" });
//   } else {
//     res.redirect("/admin");
//   }
// });

// app.post("/admin/uploadMember", upload.single("uploadedImage"), (req, res) => {
//   if (req.isAuthenticated()) {
//     const newMember = new Member({
//       fname: {
//         az: req.body.fnameAZ,
//         en: req.body.fnameEN,
//       },

//       lname: {
//         az: req.body.lnameAZ,
//         en: req.body.lnameEN,
//       },
//       email: req.body.email,
//       position: req.body.position,
//       image: {
//         data: req.file.filename,
//         contentType: "image/png",
//       },
//       memberType: req.body.memberType,
//     });
//     console.log(req.body);
//     if (typeof req.body.eduYear === "string") {
//       newMember.education.push({
//         year: req.body.eduYear,
//         university: {
//           az: req.body.eduUniversityAZ,
//           en: req.body.eduUniversityEN,
//         },
//         faculty: {
//           az: req.body.eduFacultyAZ,
//           en: req.body.eduFacultyEN,
//         },
//       });
//     } else if (typeof req.body.eduYear === "object") {
//       for (let i = 0; i < req.body.eduYear.length; i++) {
//         newMember.education.push({
//           year: req.body.eduYear[i],
//           university: {
//             az: req.body.eduUniversityAZ[i],
//             en: req.body.eduUniversityEN[i],
//           },
//           faculty: {
//             az: req.body.eduFacultyAZ[i],
//             en: req.body.eduFacultyEN[i],
//           },
//         });
//       }
//     }
//     if (typeof req.body.eduYear === "string") {
//       newMember.experience.push({
//         year: req.body.expYear,
//         position: req.body.expPosition,
//         organization: req.body.expOrganization,
//       });
//     } else if (typeof req.body.eduYear === "object") {
//       for (let i = 0; i < req.body.expYear.length; i++) {
//         newMember.experience.push({
//           year: req.body.expYear[i],
//           position: req.body.expPosition[i],
//           organization: req.body.expOrganization[i],
//         });
//       }
//     }
//     newMember
//       .save()
//       .then(() => {
//         res.send("Member added to DB successfully :) ");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   } else {
//     res.redirect("/admin");
//   }
// });
// app.get("/admin/uploadPartner", (req, res) => {
//   if (req.isAuthenticated()) {
//     res.render("admin/uploadPartner", { title: "Partner" });
//   } else {
//     res.redirect("/admin");
//   }
// });

// app.post("/admin/uploadPartner", upload.single("uploadedImage"), (req, res) => {
//   if (req.isAuthenticated()) {
//     const newPartner = new Partner({
//       name: req.body.name,
//       website: req.body.website,
//       details: {
//         az: req.body.detailsAZ,
//         en: req.body.detailsEN,
//       },
//       image: {
//         data: req.file.filename,
//         contentType: "image/png",
//       },
//     });
//     newPartner
//       .save()
//       .then(() => {
//         console.log("Partner saved in DB");
//         res.send("Partner saved in DB");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   } else {
//     res.redirect("/admin");
//   }
// });
// app.get("/admin/uploadService", (req, res) => {
//   if (req.isAuthenticated()) {
//     Member.find({}, (err, memberResult) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.render("admin/uploadService", {
//           title: "Service",
//           members: memberResult,
//         });
//       }
//     });
//   } else {
//     res.redirect("/admin");
//   }
// });

// app.post("/admin/uploadService", upload.single("uploadedImage"), (req, res) => {
//   if (req.isAuthenticated()) {
//     const newService = new Service({
//       name: {
//         az: req.body.nameAZ,
//         en: req.body.nameEN,
//       },
//       details: {
//         az: req.body.detailsAZ,
//         en: req.body.detailsEN,
//       },
//       image: {
//         data: req.file.filename,
//         contentType: "image/png",
//       },
//       responsibleMembers: req.body.responsibleMembers,
//     });
//     newService
//       .save()
//       .then(() => {
//         console.log("Service saved in DB");
//         res.send("Service saved in DB");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   } else {
//     res.redirect("/admin");
//   }
// });

// app.get("/admin/uploadNew", (req, res) => {
//   if (req.isAuthenticated()) {
//     res.render("admin/uploadNew", { title: "New" });
//   } else {
//     res.redirect("/admin");
//   }
// });

// app.post("/admin/uploadNew", upload.single("uploadedImage"), (req, res) => {
//   if (req.isAuthenticated()) {
//     const newNew = new New({
//       title: {
//         az: req.body.titleAZ,
//         en: req.body.titleEN,
//       },
//       content: {
//         az: req.body.contentAZ,
//         en: req.body.contentEN,
//       },
//       date: req.body.date,
//       image: {
//         data: req.file.filename,
//         contentType: "image/png",
//       },
//     });
//     newNew
//       .save()
//       .then(() => {
//         console.log("New saved in DB");
//         res.send("New saved in DB");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   } else {
//     res.redirect("/admin");
//   }
// });

// //
// // ====================================================================
// // =============================| DELETE |=============================
// // ====================================================================
// //

// app.get("/admin/delete/:collection/:id", (req, res) => {
//   if (req.isAuthenticated()) {
//     eval(req.params.collection).findByIdAndRemove(
//       req.params.id,
//       (err, result) => {
//         if (err) {
//           console.log(err);
//         } else {
//           // console.log(`Member should be deleted ${req.params.id}`);
//           res.redirect(`/admin/${req.params.collection}s`);
//         }
//       }
//     );
//   } else {
//     res.redirect("/admin");
//   }
// });

// //
// // ====================================================================
// // =============================| UPDATE |=============================
// // ====================================================================
// //

// app.get("/admin/update/:collection/:id", (req, res) => {
//   if (req.isAuthenticated()) {
//     eval(req.params.collection).findById(req.params.id, (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         Member.find({}, (err, resultMember) => {
//           res.render(`admin/update${req.params.collection}`, {
//             title: req.params.collection,
//             current: result,
//             members: resultMember,
//           });
//         });
//       }
//     });
//   } else {
//     res.redirect("/admin");
//   }
// });

// app.post("/admin/update/Member/:id", (req, res) => {
//   if (req.isAuthenticated()) {
//     Member.findByIdAndUpdate(
//       req.params.id,
//       { UPDATES: "updates" },
//       (err, result) => {
//         if (err) {
//           console.log(err);
//         } else {
//           res.send("User updated!");
//         }
//       }
//     );
//   } else {
//     res.redirect("/admin");
//   }
// });
// app.post("/admin/update/User/:id", (req, res) => {
//   if (req.isAuthenticated()) {
//     const salt = crypto.randomBytes(32);
//     User.findByIdAndUpdate(
//       req.params.id,
//       {
//         username: req.body.username,
//         hashed_password: pbkdf2.pbkdf2Sync(
//           req.body.password,
//           salt,
//           2023,
//           32,
//           "sha512"
//         ),
//         Salt: salt,
//       },
//       (err, result) => {
//         if (err) {
//           console.log(err);
//         } else {
//           res.write("<h1>User updated!</h1>");
//         }
//       }
//     );
//   } else {
//     res.redirect("/admin");
//   }
// });
// app.post(
//   "/admin/update/New/:id",
//   upload.single("uploadedImage"),
//   (req, res) => {
//     if (req.isAuthenticated()) {
//       if (req.file === undefined) {
//         New.findByIdAndUpdate(
//           req.params.id,
//           {
//             title: {
//               az: req.body.titleAZ,
//               en: req.body.titleEN,
//             },
//             content: {
//               az: req.body.contentAZ,
//               en: req.body.contentEN,
//             },
//             date: req.body.date,
//           },
//           (err, result) => {
//             if (err) {
//               console.log(err);
//             } else {
//               res.send("New updated!");
//             }
//           }
//         );
//       } else {
//         New.findByIdAndUpdate(
//           req.params.id,
//           {
//             title: {
//               az: req.body.titleAZ,
//               en: req.body.titleEN,
//             },
//             content: {
//               az: req.body.contentAZ,
//               en: req.body.contentEN,
//             },
//             date: req.body.date,
//             image: {
//               data: req.file.filename,
//               contentType: "image/png",
//             },
//           },
//           (err, result) => {
//             if (err) {
//               console.log(err);
//             } else {
//               res.send("New updated!");
//             }
//           }
//         );
//       }
//     } else {
//       res.redirect("/admin");
//     }
//   }
// );
// app.post(
//   "/admin/update/Partner/:id",
//   upload.single("uploadedImage"),
//   (req, res) => {
//     if (req.isAuthenticated()) {
//       if (req.file === undefined) {
//         Partner.findByIdAndUpdate(
//           req.params.id,
//           {
//             name: req.body.name,
//             website: req.body.website,
//             details: {
//               az: req.body.detailsAZ,
//               en: req.body.detailsEN,
//             },
//           },
//           (err, result) => {
//             if (err) {
//               console.log(err);
//             } else {
//               res.send("Partner updated!");
//             }
//           }
//         );
//       } else {
//         Partner.findByIdAndUpdate(
//           req.params.id,
//           {
//             name: req.body.name,
//             website: req.body.website,
//             details: {
//               az: req.body.detailsAZ,
//               en: req.body.detailsEN,
//             },
//             image: {
//               data: req.file.filename,
//               contentType: "image/png",
//             },
//           },
//           (err, result) => {
//             if (err) {
//               console.log(err);
//             } else {
//               res.send("Partner updated!");
//             }
//           }
//         );
//       }
//     } else {
//       res.redirect("/admin");
//     }
//   }
// );
// app.post("/admin/update/Service/:id", (req, res) => {
//   if (req.isAuthenticated()) {
//     if (req.file === undefined) {
//       console.log("NO IMAGE UPLOADED");
//       console.log(req.body);
//       Service.findByIdAndUpdate(
//         req.params.id,
//         {
//           name: {
//             az: req.body.nameAZ,
//             en: req.body.nameEN,
//           },
//           details: {
//             az: req.body.detailsAZ,
//             en: req.body.detailsEN,
//           },
//           responsibleMembers: req.body.responsibleMembers,
//         },
//         (err, result) => {
//           if (err) {
//             console.log(err);
//           } else {
//             res.send("Service updated!");
//           }
//         }
//       );
//     } else {
//       Service.findByIdAndUpdate(
//         req.params.id,
//         {
//           name: {
//             az: req.body.nameAZ,
//             en: req.body.nameEN,
//           },
//           details: {
//             az: req.body.detailsAZ,
//             en: req.body.detailsEN,
//           },
//           image: {
//             data: req.file.filename,
//             contentType: "image/png",
//           },
//           responsibleMembers: req.body.responsibleMembers,
//         },
//         (err, result) => {
//           if (err) {
//             console.log(err);
//           } else {
//             res.send("Service updated!");
//           }
//         }
//       );
//     }
//   } else {
//     res.redirect("/admin");
//   }
// });

// //
// // ====================================================================
// // ==============================| READ |==============================
// // ====================================================================
// //

// app.get("/admin/:collection", (req, res) => {
//   if (req.isAuthenticated()) {
//     let collection_names = [];
//     mongoose.connection.db.listCollections().toArray((err, collections) => {
//       collections.forEach((collection) => {
//         collection_names.push(collection.name);
//       });
//       eval(
//         req.params.collection.charAt(0).toUpperCase() +
//           req.params.collection.slice(1, -1)
//       ).find({}, (error, resultCollection) => {
//         if (error) {
//           console.log(error);
//         } else {
//           Member.find({}, (err, resultMember) => {
//             res.render(`admin/${req.params.collection}`, {
//               title:
//                 req.params.collection.charAt(0).toUpperCase() +
//                 req.params.collection.slice(1),
//               collections: collection_names,
//               current: resultCollection,
//               members_data: resultMember,
//             });
//           });
//         }
//       });
//     });
//   } else {
//     res.redirect("/admin");
//   }
// });

// app.get("/admin/detail/Contact/:id", (req, res) => {
//   if (req.isAuthenticated()) {
//     Contact.findById(req.params.id, (err, resultData) => {
//       if (err) {
//         throw err;
//       }
//       res.render(`admin/detailContact`, {
//         title: "Contact",
//         contact: resultData,
//       });
//     });
//   } else {
//     res.redirect("/admin");
//   }
// });

// app.get("/admin/detail/Member/:id", (req, res) => {
//   if (req.isAuthenticated()) {
//     Member.findById(req.params.id, (err, resultData) => {
//       if (err) {
//         throw err;
//       }
//       res.render(`admin/detailMember`, {
//         title: "Member",
//         member: resultData,
//       });
//     });
//   } else {
//     res.redirect("/admin");
//   }
// });

// app.get("/admin/detail/New/:id", (req, res) => {
//   if (req.isAuthenticated()) {
//     New.findById(req.params.id, (err, resultData) => {
//       if (err) {
//         throw err;
//       }
//       res.render(`admin/detailNew`, {
//         title: "New",
//         news: resultData,
//       });
//     });
//   } else {
//     res.redirect("/admin");
//   }
// });

// app.get("/admin/detail/Partner/:id", (req, res) => {
//   if (req.isAuthenticated()) {
//     Partner.findById(req.params.id, (err, resultData) => {
//       if (err) {
//         throw err;
//       }
//       res.render(`admin/detailPartner`, {
//         title: "Partner",
//         partner: resultData,
//       });
//     });
//   } else {
//     res.redirect("/admin");
//   }
// });

// app.get("/admin/detail/Service/:id", (req, res) => {
//   if (req.isAuthenticated()) {
//     Service.findById(req.params.id, (err, resultData) => {
//       if (err) {
//         throw err;
//       }
//       Member.find({}, (err, resultMember) => {
//         if (err) {
//           throw err;
//         }
//         res.render(`admin/detailService`, {
//           title: "Service",
//           service: resultData,
//           members: resultMember,
//         });
//       });
//     });
//   } else {
//     res.redirect("/admin");
//   }
// });
// app.get("/register", (req, res) => {
//   res.render("admin/login_tmp");
// });
// app.post("/register", (req, res) => {
//   const salt = crypto.randomBytes(32);
//   const user = new User({
//     username: req.body.usrname,
//     hashed_password: pbkdf2.pbkdf2Sync(
//       req.body.passwd,
//       salt,
//       2023,
//       32,
//       "sha512"
//     ),
//     Salt: salt,
//   });
//   user.save();
//   res.send("User saved!");
//   res.redirect("/admin");
// });
