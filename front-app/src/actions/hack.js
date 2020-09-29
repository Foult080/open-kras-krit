import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_HACKATONS,
  HACK_ERROR,
  GET_HACK,
  GET_TEAM,
  UPDATE_TEAM,
  DELETE_TEAM
} from "./types";
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
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const addTeamMate = (email) => async (dispatch) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  try {
    const body = JSON.stringify({ email: email });
    const res = await axios.put("/api/hack/team/add", body, config);
    dispatch({
      type: UPDATE_TEAM,
      payload: res.data,
    });
    dispatch(setAlert("Пользователь добавлен", "success"));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: HACK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deleteTeamMate = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/hack/team/team-mate/${id}`);
    dispatch({
      type: UPDATE_TEAM,
      payload: res.data
    })
    dispatch(setAlert("Запись удалена", "success"));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: HACK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deleteTeam = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/hack/team/${id}`);
    dispatch({
      type: DELETE_TEAM,
      payload: res.data
    })
    dispatch(setAlert("Запись удалена", "success"));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: HACK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deleteFromTeam = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/hack/team/del-from-team/${id}`);
    dispatch({
      type: DELETE_TEAM,
      payload: res.data
    })
    dispatch(setAlert("Запись удалена", "success"));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: HACK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
}