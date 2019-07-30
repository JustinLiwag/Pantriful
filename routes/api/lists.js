const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load List Model
const Lists = require("../../models/Lists");
// Load User Model
const User = require("../../models/User");

// Load Validations
const validateProfileInput = require("../../validation/profile");

// ----------------------------------
//  NEW LISTS ROUTES
// ----------------------------------

// @route   POST api/lists/
// @desc    Create/Update Master Food Profile
// @access  Private (Admin)
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {

    // Check role
    console.log(req.body);

    // Check if Admin Role
    if (req.user.role === 0) {
      return res.status(404).json({ AuthorizedToUse: false });
    }

    const newItem = {
        list: req.body.listItems,
        status: req.body.status,
        deliveryDate: req.body.deliveryDate,
        email: req.body.email,
        deliveryDate: req.body.deliveryDate
    };

      new Lists(newItem).save().then(profile => res.json(profile));
  }
);

// @route   GET api/lists/
// @desc    Get all grocery lists for user
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res) => {
    const errors = {};
    Lists.find({
        email: req.user.email
      })
      .then(lists => {
        if (lists.length === 0) {
          errors.noprofile = "There are no grocery lists for this user";
          return res.status(404).json(errors);
        }
        res.json(lists);
      })
      .catch(err => res.status(404).json(err));
  }
);

module.exports = router;
