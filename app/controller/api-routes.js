// Requiring our models
var db = require("../models");

// Routes
// =============================================================

module.exports = function(app) {
  // dcreates a new patient
  app.post("/api/newPatient", function(req, res) {
    console.log(req.body);
    db.PTData.create({
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      birth: req.body.birth,
      Antibodies: req.body.Antibodies,
      TypeAndScreen: req.body.TypeAndScreen,
      Product: req.body.Product ,
      ProductQuantity: req.body.ProductQuantity,

    })
      .then(function(result) {
        res.json(result);
      })
      // .catch(function(err) {
      //   res.sendStatus(500).end(err);
      // });
      // return result;
  });

  ///find all patients
  app.get("/", function(req, res) {
    db.PTData.findAll().then(function(results) {
      console.log(results);
      res.render("client", { patients: results });
    });
  });
  app.get("/index", function(req, res) {
    db.PTData.findAll().then(function(results) {
      console.log(results);
      res.render("index", { patients: results });
    });
  });

  // find one pateint if fail find them all
  app.get("/api/:id", function(req, res) {
    if (req.params.id) {
      db.PTData.findOne({
        where: {
          id: req.params.id
        }
      }).then(function(result) {
        return res.json(result);
      });
    } else {
      db.findAll().then(function(result) {
        res.json(result);
      });
    }
  });

  //update the patient record

  // // PUT route for updating patientDatas. We can get the updated patientData data from req.body
  app.put("/api/updatePTData", function(req, res) {
    db.PTData.update(
      {
        Antibodies: req.body.antibodies
      },
      {
        where: {
          id: req.body.id
        }
      }
    )
      .then(function(dbpatientData) {
        res.json(dbpatientData);
      })
      .catch(function(err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

  // app.get("/api/patientData/:id", function (req, res) {
  //   db.PTData.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function (result) {
  //     res.json(result);
  //   });
  // });

  // // DELETE route for deleting patientDatas. We can get the id of the patientData to be deleted from
  // // req.params.id
  // app.delete("/api/patientDatas/:id", function (req, res) {
  //   // We just have to specify which patientData we want to destroy with "where"
  //   db.patientData.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function (results) {
  //     res.json(results);
  //   });

  // });
};
