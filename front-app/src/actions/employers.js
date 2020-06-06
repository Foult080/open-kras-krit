import axios from "axios";
import { GET_EMPLOYERS, EMPLOYER_ERROR, GET_EMPLOYER } from "./types";

export const getEmployers = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/employers/all");
    dispatch({
      type: GET_EMPLOYERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: EMPLOYER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getEmployer = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/employers/${id}`);
    dispatch({
      type: GET_EMPLOYER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: EMPLOYER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getRandomEmployers = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/employers");
    dispatch({
      type: GET_EMPLOYERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: EMPLOYER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
