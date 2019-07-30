import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";
import foodProfileReducer from "./foodProfileReducer";
import listReducer from "./listReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  foodProfile: foodProfileReducer,
  lists: listReducer
});
