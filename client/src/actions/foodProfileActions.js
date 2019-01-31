import axios from "axios";

import { GET_FOOD_PROFILE, FOOD_PROFILE_LOADING } from "./types";

// Get current profile
export const getFoodProfile = () => dispatch => {
  dispatch(setFoodProfileLoading());
  axios
    .get("/api/master-food-profile/")
    .then(res =>
      dispatch({
        type: GET_FOOD_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_FOOD_PROFILE,
        payload: { error: true }
      })
    );
};

//  Profile loading
export const setFoodProfileLoading = () => {
  return {
    type: FOOD_PROFILE_LOADING
  };
};