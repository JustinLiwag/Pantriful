import axios from "axios";

import { GET_FOOD_PROFILE, FOOD_PROFILE_LOADING } from "./types";

// Get current profile
export const getFoodProfile = () => dispatch => {
  dispatch(setFoodProfileLoading());
  axios
    .get("/api/master-food-profile")
    .then(res =>
      dispatch({
        type: GET_FOOD_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_FOOD_PROFILE,
        payload: {}
      })
    );
};

// Send in Food Profile to API
export const sendFoodProfile = (userData, history) => dispatch => {
  axios
    .post("/api/profile/food-profile/foodProfile", userData)
    .then(res => history.push("/dashboard"))
    .catch(err => console.log(err));
};

// Send in ShoppingLists to API
export const sendShoppingLists = (userData, history) => dispatch => {
  axios
    .post("/api/profile/food-profile/shopping-cart", userData)
    .then(res => history.push("/dashboard"))
    .catch(err => console.log(err));
};

// Send in delivery details to API
export const sendDeliveryDetails = (userData, history) => dispatch => {
  axios
    .post("/api/profile/food-profile/delivery-details", userData)
    .then(res => history.push("/dashboard"))
    .catch(err => console.log(err));
};

//  Profile loading
export const setFoodProfileLoading = () => {
  return {
    type: FOOD_PROFILE_LOADING
  };
};
