import { GET_FOOD_PROFILE, FOOD_PROFILE_LOADING } from "../actions/types";

const initialState = {
  foodProfile: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FOOD_PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_FOOD_PROFILE:
      return {
        ...state,
        foodProfile: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
