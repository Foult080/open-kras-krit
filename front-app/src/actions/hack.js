import axios from "axios";
import { GET_HACKATONS, HACK_ERROR, GET_HACK, GET_TEAM } from "./types";
//import { setAlert } from "./alert";

export const getHackatons = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/hack/all");
    dispatch({
      type: GET_HACKATONS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: HACK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getTeam = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/hack/team/me");
    dispatch({
      type: GET_TEAM,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: HACK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getHack = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/hack/");
    dispatch({
      type: GET_HACK,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: HACK_ERROR,
      payload: { masg: err.response.statusText, status: err.response.status },
    });
  }
};