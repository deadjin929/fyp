const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = mongoose.model("User");
const { jwtkey } = require("../key");

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  console.log([email, password]);

  try {
    const user = new User({ email, password });
    await user.save();
    const token = jwt.sign({ userId: user._id }, jwtkey);
    res.send({ token });
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.table([email, password]);
  if (!email || !password) {
    return res.status(422).send({ error: "must provide email or password" });
  }
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(422).send({ error: "Invalid Email" });
  }
  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, jwtkey);
    res.send({ token });
  } catch (err) {
    return res.status(500).send({ error: "Internal Sever Error" });
  }
});

// router.get("/", async (req, res) => {
//   User
//     .find({})
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// router.post("/send-data", async (req, res) => {
//   const user = new User({
//     name: req.body.name,
//     phone: req.body.phone,
//     picture: req.body.picture,
//   });
//   await user
//     .save()
//     .then((data) => {
//       console.log(data);
//       res.send(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// router.post("/delete", (req, res) => {
//   user
//     .findByIdAndRemove(req.body.id)
//     .then((data) => {
//       console.log(data);
//       res.send(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// router.post("/update", (req, res) => {
//   user
//     .findByIdAndUpdate(req.body.id, {
//       name: req.body.name,
//       email: req.body.email,
//       phone: req.body.phone,
//       picture: req.body.picture,
//     })
//     .then((data) => {
//       console.log(data);
//       res.send(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

module.exports = router;
