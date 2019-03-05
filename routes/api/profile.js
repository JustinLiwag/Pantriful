const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Profile Model
const Profile = require("../../models/FoodProfile");
const ProfileTest = require("../../models/Profile");
// Load User Model
const User = require("../../models/User");

// Load Validations
const validateProfileInput = require("../../validation/profile");

// ----------------------------------
//  NEW PROFILE ROUTES
// ----------------------------------

// @route   POST api/profile/food-profile-test
// @desc    Create users profile
// @access  Private
router.post(
  "/food-profile-test",
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

    ProfileTest.findOne({ user: req.user.id }).then(profile => {
      // If profile exists...
      if (profile) {
        // Update the profile
        res.json({ profileExists: true });
      } else {
        // Create new profile
        ProfileTest.findOne({ username: profileFields.username })
          .populate("user", ["name"])
          .then(profile => {
            if (profile) {
              res.status(400).json({ error: "Username already exists" });
            }

            new ProfileTest(profileFields)
              .save()
              .then(profile => res.json(profile));
          });
      }
    });
  }
);

// @route   POST api/profile/food-profile-test/foodProfile
// @desc    Add pantry to users profile
// @access  Private
router.post(
  "/food-profile-test/foodProfile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Find Profile
    ProfileTest.findOne({ user: req.user.id }).then(profile => {
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
          username: req.body.username,
          age: req.body.age,
          height: req.body.height,
          weight: req.body.weight,
          foodProfile: req.body.foodProfile,
          dietProfile: req.body.dietProfile,
          dietaryRestrictions: req.body.dietaryRestrictions
        };

        new ProfileTest(profileData).save().then(profile => res.json(profile));
      }
    });
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

    ProfileTest.findOne({
        user: req.user.id
      })
      .populate("user", ["name", "lastName"])
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

// ----------------------------------
//  ORIGINAL PROFILE ROUTES
// ----------------------------------

// @route   GET api/profile/
// @desc    Get current users profile
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Profile.findOne({ user: req.user.id })
      .populate("user", ["name", "lastName"])
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

// @route   GET api/profile/handle/:handle
// @desc    Get profile by handle
// @access  public
router.get("/handle/:handle", (req, res) => {
  const errors = {};
  Profile.findOne({ username: req.params.handle })
    .populate("user", ["name", "lastName"])
    .then(profile => {
      if (!profile) {
        errors.noprofile = "There is no profile for this user";
        res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch(err => res.status(404).json(err));
});

// @route   GET api/profile/user/:user_id
// @desc    Get profile by userID
// @access  public
router.get("/user/:user_id", (req, res) => {
  const errors = {};
  Profile.findOne({ user: req.params.user_id })
    .populate("user", ["name", "lastName"])
    .then(profile => {
      if (!profile) {
        errors.noprofile = "There is no profile for this user";
        res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch(err =>
      res.status(404).json({ profile: "There is no profile for this user" })
    );
});

// @route   GET api/profile/all
// @desc    Get all profile
// @access  public
router.get("/all", (req, res) => {
  Profile.find()
    .populate("user", ["name", "lastName"])
    .then(profiles => {
      if (!profiles) {
        errors.noprofile = "There are no profiles";
        return res.status(404).json(errors);
      }

      res.json(profiles);
    })
    .catch(err => res.status(404).json({ profile: "There are no profiles" }));
});

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
    if (req.body.completed) {
      profileFields.completed = req.body.completed;
    }
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
    profileFields.vegetarianProteinAndAlternatives.peanuts = {};
    profileFields.vegetarianProteinAndAlternatives.cashews = {};
    profileFields.vegetarianProteinAndAlternatives.almonds = {};
    profileFields.vegetarianProteinAndAlternatives.peanutButter = {};
    profileFields.vegetarianProteinAndAlternatives.eggs = {};
    profileFields.vegetarianProteinAndAlternatives.soybeansTofu = {};
    profileFields.vegetarianProteinAndAlternatives.beans = {};
    profileFields.vegetarianProteinAndAlternatives.lentils = {};

    if (req.body.peanuts === "true")
      profileFields.vegetarianProteinAndAlternatives.peanuts.active = true;

    if (req.body.cashews === "true")
      profileFields.vegetarianProteinAndAlternatives.cashews.active = true;

    if (req.body.almonds === "true")
      profileFields.vegetarianProteinAndAlternatives.almonds.active = true;

    if (req.body.peanutButter === "true")
      profileFields.vegetarianProteinAndAlternatives.peanutButter.active = true;

    if (req.body.eggs === "true")
      profileFields.vegetarianProteinAndAlternatives.eggs.active = true;

    if (req.body.soybeansTofu === "true")
      profileFields.vegetarianProteinAndAlternatives.soybeansTofu.active = true;

    if (req.body.beans === "true")
      profileFields.vegetarianProteinAndAlternatives.beans.active = true;

    if (req.body.lentils === "true")
      profileFields.vegetarianProteinAndAlternatives.lentils.active = true;

    // ------------------
    // Vegetables
    // ------------------
    profileFields.vegetables = {};
    profileFields.vegetables.potato = {};
    profileFields.vegetables.sweetPotato = {};
    profileFields.vegetables.pumpkin = {};
    profileFields.vegetables.cauliflower = {};
    profileFields.vegetables.greenBeans = {};
    profileFields.vegetables.spinach = {};
    profileFields.vegetables.cabbage = {};
    profileFields.vegetables.brusselSprouts = {};
    profileFields.vegetables.peas = {};
    profileFields.vegetables.broccoli = {};
    profileFields.vegetables.carrots = {};
    profileFields.vegetables.zucchini = {};
    profileFields.vegetables.eggplant = {};
    profileFields.vegetables.squash = {};
    profileFields.vegetables.bellPeppers = {};
    profileFields.vegetables.corn = {};
    profileFields.vegetables.mushrooms = {};
    profileFields.vegetables.tomatoes = {};
    profileFields.vegetables.lettuce = {};
    profileFields.vegetables.celery = {};
    profileFields.vegetables.avocado = {};
    profileFields.vegetables.onions = {};
    profileFields.vegetables.bokChoy = {};
    profileFields.vegetables.asparagus = {};

    if (req.body.potato === "true")
      profileFields.vegetables.potato.active = true;

    if (req.body.sweetPotato === "true")
      profileFields.vegetables.sweetPotato.active = true;

    if (req.body.pumpkin === "true")
      profileFields.vegetables.pumpkin.active = true;

    if (req.body.cauliflower === "true")
      profileFields.vegetables.cauliflower.active = true;

    if (req.body.greenBeans === "true")
      profileFields.vegetables.greenBeans.active = true;

    if (req.body.spinach === "true")
      profileFields.vegetables.spinach.active = true;

    if (req.body.cabbage === "true")
      profileFields.vegetables.cabbage.active = true;

    if (req.body.brusselSprouts === "true")
      profileFields.vegetables.brusselSprouts.active = true;

    if (req.body.peas === "true") profileFields.vegetables.peas.active = true;

    if (req.body.broccoli === "true")
      profileFields.vegetables.broccoli.active = true;

    if (req.body.carrots === "true")
      profileFields.vegetables.carrots.active = true;

    if (req.body.zucchini === "true")
      profileFields.vegetables.zucchini.active = true;

    if (req.body.eggplant === "true")
      profileFields.vegetables.eggplant.active = true;

    if (req.body.squash === "true")
      profileFields.vegetables.squash.active = true;

    if (req.body.bellPeppers === "true")
      profileFields.vegetables.bellPeppers.active = true;

    if (req.body.corn === "true") profileFields.vegetables.corn.active = true;

    if (req.body.mushrooms === "true")
      profileFields.vegetables.mushrooms.active = true;

    if (req.body.tomatoes === "true")
      profileFields.vegetables.tomatoes.active = true;

    if (req.body.lettuce === "true")
      profileFields.vegetables.lettuce.active = true;

    if (req.body.celery === "true")
      profileFields.vegetables.celery.active = true;

    if (req.body.avocado === "true")
      profileFields.vegetables.avocado.active = true;

    if (req.body.onions === "true")
      profileFields.vegetables.onions.active = true;

    if (req.body.bokChoy === "true")
      profileFields.vegetables.bokChoy.active = true;

    if (req.body.asparagus === "true")
      profileFields.vegetables.asparagus.active = true;

    // ------------------
    // Fruits
    // ------------------
    profileFields.fruits = {};
    profileFields.fruits.apples = {};
    profileFields.fruits.pears = {};
    profileFields.fruits.oranges = {};
    profileFields.fruits.grapfruit = {};
    profileFields.fruits.banana = {};
    profileFields.fruits.peach = {};
    profileFields.fruits.plum = {};
    profileFields.fruits.nectarine = {};
    profileFields.fruits.apricot = {};
    profileFields.fruits.mango = {};
    profileFields.fruits.pineapple = {};
    profileFields.fruits.grapes = {};
    profileFields.fruits.strawberries = {};
    profileFields.fruits.blueberries = {};
    profileFields.fruits.watermelon = {};
    profileFields.fruits.cantelope = {};

    if (req.body.apples === "true") profileFields.fruits.apples.active = true;

    if (req.body.pears === "true") profileFields.fruits.pears.active = true;

    if (req.body.oranges === "true") profileFields.fruits.oranges.active = true;

    if (req.body.grapfruit === "true")
      profileFields.fruits.grapfruit.active = true;

    if (req.body.banana === "true") profileFields.fruits.banana.active = true;

    if (req.body.peach === "true") profileFields.fruits.peach.active = true;

    if (req.body.plum === "true") profileFields.fruits.plum.active = true;

    if (req.body.nectarine === "true")
      profileFields.fruits.nectarine.active = true;

    if (req.body.apricot === "true") profileFields.fruits.apricot.active = true;

    if (req.body.mango === "true") profileFields.fruits.mango.active = true;

    if (req.body.pineapple === "true")
      profileFields.fruits.pineapple.active = true;

    if (req.body.grapes === "true") profileFields.fruits.grapes.active = true;

    if (req.body.strawberries === "true")
      profileFields.fruits.strawberries.active = true;

    if (req.body.blueberries === "true")
      profileFields.fruits.blueberries.active = true;

    if (req.body.watermelon === "true")
      profileFields.fruits.watermelon.active = true;

    if (req.body.cantelope === "true")
      profileFields.fruits.cantelope.active = true;

    // ------------------
    // Grains
    // ------------------
    profileFields.grains = {};
    profileFields.grains.slicedBread = {};
    profileFields.grains.bagels = {};
    profileFields.grains.oatmeal = {};
    profileFields.grains.porridge = {};
    profileFields.grains.pitaBread = {};
    profileFields.grains.tortillas = {};
    profileFields.grains.pasta = {};
    profileFields.grains.noodles = {};
    profileFields.grains.muffins = {};
    profileFields.grains.cereal = {};
    profileFields.grains.quinoa = {};

    if (req.body.slicedBread === "true")
      profileFields.grains.slicedBread.active = true;

    if (req.body.bagels === "true") profileFields.grains.bagels.active = true;

    if (req.body.oatmeal === "true") profileFields.grains.oatmeal.active = true;

    if (req.body.porridge === "true")
      profileFields.grains.porridge.active = true;

    if (req.body.pitaBread === "true")
      profileFields.grains.pitaBread.active = true;

    if (req.body.tortillas === "true")
      profileFields.grains.tortillas.active = true;

    if (req.body.pasta === "true") profileFields.grains.pasta.active = true;

    if (req.body.noodles === "true") profileFields.grains.noodles.active = true;

    if (req.body.muffins === "true") profileFields.grains.muffins.active = true;

    if (req.body.cereal === "true") profileFields.grains.cereal.active = true;

    if (req.body.quinoa === "true") profileFields.grains.quinoa.active = true;

    // ------------------
    // Dairy
    // ------------------
    profileFields.dairy = {};
    profileFields.dairy.milk = {};
    profileFields.dairy.iceCream = {};
    profileFields.dairy.yogurt = {};
    profileFields.dairy.cottageCheese = {};
    profileFields.dairy.cheese = {};
    profileFields.dairy.cheeseSpread = {};

    if (req.body.milk === "true") profileFields.dairy.milk.active = true;
    if (req.body.iceCream === "true")
      profileFields.dairy.iceCream.active = true;
    if (req.body.yogurt === "true") profileFields.dairy.yogurt.active = true;
    if (req.body.cottageCheese === "true")
      profileFields.dairy.cottageCheese.active = true;
    if (req.body.cheese === "true") profileFields.dairy.cheese.active = true;
    if (req.body.cheeseSpread === "true")
      profileFields.dairy.cheeseSpread.active = true;

    console.log(req.body);

    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        // Update
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        )
          .populate("user", ["name"])
          .then(profile => res.json(profile));
        // console.log(profile);
      } else {
        // Create

        // Check if username exists
        Profile.findOne({ username: profileFields.username })
          .populate("user", ["name"])
          .then(profile => {
            if (profile) {
              errors.handle = "That username already exists";
              res.status(400).json(errors);
            }

            new Profile(profileFields)
              .save()
              .then(profile => res.json(profile));
          });
      }
    });
  }
);

module.exports = router;
