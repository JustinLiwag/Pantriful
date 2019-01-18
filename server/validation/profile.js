const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.username = !isEmpty(data.username) ? data.username : "";
  data.age = !isEmpty(data.age) ? data.age : "";
  data.height = !isEmpty(data.height) ? data.height : "";
  data.weight = !isEmpty(data.weight) ? data.weight : "";

  if (!Validator.isLength(data.username, { min: 2, max: 40 })) {
    errors.username = "Username needs to be between 2 and 40 characters";
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = "Username is required";
  }

  if (Validator.isEmpty(data.age)) {
    errors.age = "Age is required";
  }

  if (Validator.isEmpty(data.height)) {
    errors.height = "Height is required";
  }

  if (Validator.isEmpty(data.weight)) {
    errors.weight = "Weight is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
