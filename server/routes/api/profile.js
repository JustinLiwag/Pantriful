const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Profile Model
const Profile = require("../../models/FoodProfile");
// Load User Model
const User = require("../../models/User");

// Load Validations
const validateProfileInput = require("../../validation/profile");

// @route   GET api/profile/
// @desc    Get current users profile
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Profile.findOne({ user: req.user.id })
      .then(profile => {
        if (!profile) {
          errors.noprofile = "There is no profile for this user";
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route   POST api/profile/
// @desc    Create user profile
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    // Get fields
    const profileFields = {};
    profileFields.user = req.user.id;

    // General Profile Information
    if (req.body.username) profileFields.username = req.body.username;
    if (req.body.age) profileFields.age = req.body.age;
    if (req.body.height) profileFields.height = req.body.height;
    if (req.body.weight) profileFields.weight = req.body.weight;
    if (req.body.dietOrientation)
      profileFields.dietOrientation = req.body.dietOrientation;
    if (req.body.dietaryRestrictions)
      profileFields.dietaryRestrictions = req.body.dietaryRestrictions;

    // Diet Infromation

    // ------------------
    // Proteins
    // ------------------
    profileFields.protein = {};
    profileFields.protein.chickenLegQuarters = {};
    profileFields.protein.wholeChicken = {};
    profileFields.protein.chickenDrumstick = {};
    profileFields.protein.boneInChickenThigh = {};
    profileFields.protein.splitChickenBreast = {};
    profileFields.protein.bonelessSkinlessChickenThighs = {};
    profileFields.protein.chickenWings = {};
    profileFields.protein.bonelessChickenBreast = {};

    if (req.body.chickenLegQuarters === "true")
      profileFields.protein.chickenLegQuarters.active = true;
    if (req.body.chickenLegQuartersNotes)
      profileFields.protein.chickenLegQuarters.notes =
        req.body.chickenLegQuartersNotes;

    if (req.body.wholeChicken === "true")
      profileFields.protein.wholeChicken.active = true;

    if (req.body.chickenDrumstick === "true")
      profileFields.protein.chickenDrumstick.active = true;

    if (req.body.boneInChickenThigh === "true")
      profileFields.protein.boneInChickenThigh.active = true;

    if (req.body.splitChickenBreast === "true")
      profileFields.protein.splitChickenBreast.active = true;

    if (req.body.bonelessSkinlessChickenThighs === "true")
      profileFields.protein.bonelessSkinlessChickenThighs.active = true;

    if (req.body.chickenWings === "true")
      profileFields.protein.chickenWings.active = true;

    if (req.body.bonelessChickenBreast === "true")
      profileFields.protein.bonelessChickenBreast.active = true;

    // ------------------
    // Vegetarian Protein And Alternatives
    // ------------------
    profileFields.vegetarianProteinAndAlternatives = {};
    profileFields.vegetarianProteinAndAlternatives.eggs = {};

    if (req.body.eggs === "true")
      profileFields.vegetarianProteinAndAlternatives.eggs = true;

    // ------------------
    // Vegetables
    // ------------------
    profileFields.vegetables = {};
    if (req.body.potato) profileFields.potato = req.body.potato;

    // ------------------
    // Fruits
    // ------------------
    profileFields.fruits = {};
    if (req.body.apples) profileFields.apples = req.body.apples;

    // ------------------
    // Grains
    // ------------------
    profileFields.grains = {};
    if (req.body.slicedBread) profileFields.slicedBread = req.body.slicedBread;

    // ------------------
    // Dairy
    // ------------------
    profileFields.dairy = {};
    if (req.body.milk) profileFields.milk = req.body.milk;

    // console.log(profileFields);

    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        // Update
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        ).then(profile => res.json(profile));
        // console.log(profile);
      } else {
        // Create

        // Check if username exists
        Profile.findOne({ username: profileFields.username }).then(profile => {
          if (profile) {
            errors.handle = "That username already exists";
            res.status(400).json(errors);
          }

          new Profile(profileFields).save().then(profile => res.json(profile));
        });
      }
    });
  }
);

module.exports = router;
