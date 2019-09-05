const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Profile Model
const Profile = require("../../models/Profile");
// Load User Model
const User = require("../../models/User");

// Load Validations
const validateProfileInput = require("../../validation/profile");

// ----------------------------------
//  NEW PROFILE ROUTES
// ----------------------------------

// @route   POST api/profile/food-profile
// @desc    Create users profile
// @access  Private
router.post(
  "/food-profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log("USER: ", req.user);
    console.log("BODY: ", req.body);

    const profileFields = {};
    profileFields.user = req.user.id;
    if (req.body.username) profileFields.username = req.body.username;
    if (req.body.age) profileFields.age = req.body.age;
    if (req.body.height) profileFields.height = req.body.height;
    if (req.body.weight) profileFields.weight = req.body.weight;

    console.log("PROFILE FIELDS: ", profileFields);

    Profile.findOne({ user: req.user.id }).then(profile => {
      // If profile exists...
      if (profile) {
        // Update the profile
        res.json({ profileExists: true });
      } else {
        // Create new profile
        Profile.findOne({ username: profileFields.username })
          .populate("user", ["name"])
          .then(profile => {
            if (profile) {
              res.status(400).json({ error: "Username already exists" });
            }

            new Profile(profileFields)
              .save()
              .then(profile => res.json(profile));
          });
      }
    });
  }
);

// @route   POST api/profile/food-profile/foodProfile
// @desc    Add pantry to users profile
// @access  Private
router.post(
  "/food-profile/foodProfile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Find Profile
    Profile.findOne({ user: req.user.id }).then(profile => {
      // If no profile
      if (profile === null) {
        const foodProfileArray = [];
        var foodProfileData = req.body.foodProfile;
        for (var i = 0; i < foodProfileData.length; i++) {
          const newFoodProfileItem = {
            name: foodProfileData[i].name,
            item_id: foodProfileData[i].item_id,
            category: foodProfileData[i].category,
            measurementUnit: foodProfileData[i].measurementUnit,
            basePrice: foodProfileData[i].basePrice,
            lowPrice: foodProfileData[i].lowPrice,
            upperPrice: foodProfileData[i].upperPrice
          };
          foodProfileArray.push(newFoodProfileItem);
        }
        var profileData = {
          user: req.user.id,
          email: req.user.email,
          foodProfile: req.body.foodProfile,
          dietProfile: req.body.dietProfile,
          dietaryRestrictions: req.body.dietaryRestrictions
        };
        new Profile(profileData).save().then(profile => res.json(profile));
      }
    });
  }
);

// @route   POST api/profile/food-profile/shopping-cart
// @desc    Add Shopping Cart to users profile
// @access  Private
router.post(
  "/food-profile/shopping-cart", 
  passport.authenticate("jwt", { session: false }), 
  (req, res) => {
    Profile.findOneAndUpdate(
      { user: req.user.id },
      {
        $push: {
          "shoppingListOne": req.body.shoppingListOne,
          "shoppingListTwo": req.body.shoppingListTwo  
      } },
      { safe: true, upsert: true },
      function (err, doc) {
        if (err) {
          console.log(err);
        } else {
          res.send(doc)
        }
      }
    )
  }
);

// @route   POST api/profile/food-profile/delivery-details
// @desc    update delivery details
// @access  Private
router.post(
  "/food-profile/delivery-details",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOneAndUpdate(
      { user: req.user.id },
      {
        $push: {
          "street": req.body.street,
          "city": req.body.city,
          "state": req.body.state,
          "country": req.body.country,
          "zipcode": req.body.zipcode,
          "aptOrBldgNumber": req.body.aptOrBldgNumber,
          "deliveryDay": req.body.deliveryDay,
          "deliveryTime": req.body.deliveryTime,
          "phoneNumber": req.body.phoneNumber
        }
      },
      { safe: true, upsert: true },
      function (err, doc) {
        if (err) {
          console.log(err);
        } else {
          res.send(doc)
        }
      }
    )
  }
);

// @route   GET api/profile/
// @desc    Get current users profile
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res) => {
    const errors = {};
    Profile.findOne({
        user: req.user.id
      })
      .populate("user", ["name", "lastName", "email"])
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




module.exports = router;
