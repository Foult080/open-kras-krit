import { combineReducers } from "redux";
import auth from "./auth";
import alert from "./alert";
import applicant from "./applicant";
import test from "./test";
import contactForm from "./contactForm";

export default combineReducers({
  auth,
  alert,
  applicant,
  test,
  contactForm
});
