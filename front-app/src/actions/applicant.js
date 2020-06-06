import axios from "axios";
import {
  APPLICANTS_ERROR,
  GET_APPLICANTS,
  TEST_ERR,
  GET_TEST,
  SEND_APPLICANT,
  SEND_ERROR,
} from "./types";
import { setAlert } from "./alert";

export const getData = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/applicant/data");
    dispatch({
      type: GET_APPLICANTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: APPLICANTS_ERROR,
      payload: { msg: err.response.status.text, status: err.response.status },
    });
  }
};

export const getTest = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/applicant/test");
    dispatch({
      type: GET_TEST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TEST_ERR,
      payload: { msg: err.response.status.text },
    });
  }
};

export const sendApplicant = ({ email, agreed, skills }) => async dispatch => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const body = JSON.stringify({ email, agreed, skills });
  try {
    const res = await axios.post("/api/applicant/", body, config);
    dispatch({
      type: SEND_APPLICANT,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      dispatch({
        type: SEND_ERROR,
      });
    }
  }
};
