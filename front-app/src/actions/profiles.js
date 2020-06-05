import axios from "axios";
import { GET_PROFILE, GET_PROFILES, PROFILE_ERROR } from "./types";

//get my profile
export const getProfile = (history) => async (dispatch) => {
  try {
    const res = await axios.get("/api/profile/me");
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
      console.log(err.response.status);
    if (err.response.status === 404) history.push("/ex404");
    else
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
  }
};

// get all profiles
export const getProfiles = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/profiles");
    dispatch({
      type: GET_PROFILES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//get user profile by id
export const getUserProfile = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/profiles/${id}`);
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
