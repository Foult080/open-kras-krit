import { combineReducers } from "redux";
import auth from "./auth";
import alert from "./alert";
import applicant from "./applicant";

export default combineReducers({
  auth,
  alert,
  applicant
});
