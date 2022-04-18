//var express = require("express");
//var router = express.Router();
const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const gpsdata = require("../models/gpsdata");
/* GET home page. */
/*router.get("/", function (req, res, next) {
  res.render("index", { title: "IoT project" });
});*/

router.post("/addgpsdata", (req, res) => {
  const { assetnumber, latitude, longitude } = req.body;
  let errors = [];
  console.log([assetnumber, latitude, longitude]);

  if (!assetnumber || !latitude || !longitude) {
    errors.push({ msg: "Parameters are missing" });
  }
  if (errors.length > 0) {
    res.json({ Message: errors });
  } else {
    const newgpsdata = new gpsdata({
      assetnumber,
      latitude,
      longitude,
    });

    newgpsdata
      .save()
      .then((newgpsdata) => {
        res.json({ Message: "Data Inserted" });
      })
      .catch((err) => console.log(err));
  }
});
module.exports = router;

router.get("/getdata/:assetnumber", (req, res) => {
  var assetnumber = req.params.assetnumber;
  console.log(assetnumber);

  gpsdata
    .find({ assetnumber: assetnumber })
    .sort({ _id: -1 })
    .limit(1)
    .exec((err, assetnumber) => {
      console.log(assetnumber);
      res.json(assetnumber);
    });
});
/*
{
  "assetnumber" : "1234324",
  "latitude" : "1231313",
  "longitude" : "123145646"
}
*/
