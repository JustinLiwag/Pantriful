const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Profile Model
const MasterFoodProfile = require("../../models/MasterFoodProfile");

// Load Validations
const validateProfileInput = require("../../validation/profile");

// @route   GET api/master-food-profile/
// @desc    Get current users profile
// @access  Public
router.get("/", (req, res) => {
  const errors = {};

  MasterFoodProfile.find({})
    .then(profile => {
      if (!profile) {
        errors.noprofile = "Master Food Profile not available";
        return res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch(err => res.status(404).json(err));
});

// @route   POST api/master-food-profile/
// @desc    Create/Update Master Food Profile
// @access  Private (Admin)
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);

    // Check role
    // console.log(req.user);

    // Check if Admin Role
    if (req.user.role === 0) {
      return res.status(404).json({ AuthorizedToUse: false });
    }

    const newItem = {
      name: req.body.name,
      item_id: req.body.item_id,
      lowPrice: req.body.lowPrice,
      upperPrice: req.body.upperPrice,
      measurementUnit: req.body.measurementUnit,
      category: req.body.category
    };

    MasterFoodProfile.findOne({ name: req.body.name }).then(item => {
      if (item) {
        // Update
        console.log(req.body);
        console.log(item);
        MasterFoodProfile.findOneAndUpdate(
          { name: item.name },
          { $set: req.body },
          { new: true }
        )
          .then(profile => res.json(profile))
          .catch(err => console.log(err));
      } else {
        new MasterFoodProfile(newItem)
          .save()
          .then(item => res.json(item))
          .catch(err => console.log(err));
      }
    });
  }
);

module.exports = router;
