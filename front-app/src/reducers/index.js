import { combineReducers } from "redux";
import auth from "./auth";
import alert from "./alert";
import applicant from "./applicant";
import test from "./test";
import contactForm from "./contactForm";
import news from "./news";
import profiles from "./profiles";
import employers from "./employers";
import hack from "./hack";

export default combineReducers({
  auth,
  alert,
  applicant,
  test,
  contactForm,
  news,
  profiles,
  employers,
  hack,
});
