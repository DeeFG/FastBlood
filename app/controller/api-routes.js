// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================



module.exports = function (app) {
  app.get("/api/patientData/:id", function (req, res) {
    db.patientData.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (result) {
      res.json(result);
    });
  });



  app.post("/api/newPatient", function (req, res) {
    console.log(req.body);
    db.PTData.create({
      HRN: req.body.HRN,
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      birth: req.body.birth,

    }).then(function (data) {
      res.json(data);
    });
  });







  // POST route for saving a new patientData
  app.post("/api/patientData", function (req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.patientData.create({
      antibodies: req.body.antibodies

    }).then(function (results) {
      // We have access to the new patientData as an argument inside of the callback function
      res.json(results);
    })
      .catch(function (err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

  // DELETE route for deleting patientDatas. We can get the id of the patientData to be deleted from
  // req.params.id
  app.delete("/api/patientDatas/:id", function (req, res) {
    // We just have to specify which patientData we want to destroy with "where"
    db.patientData.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (results) {
      res.json(results);
    });

  });

  // PUT route for updating patientDatas. We can get the updated patientData data from req.body
  app.put("/api/patientDatas", function (req, res) {

    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.patientData.update({
      text: req.body.text,
      complete: req.body.complete
    }, {
        where: {
          id: req.body.id
        }
      }).then(function (dbpatientData) {
        res.json(dbpatientData);
      })
      .catch(function (err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });
};
