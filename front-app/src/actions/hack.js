import axios from "axios";
import { GET_HACKATONS, HACK_ERROR } from "./types";
//import { setAlert } from "./alert";

export const getHackatons = () => async (dispatch) => {
  try {
      const res = await axios.get("/api/hack/all");
      dispatch({
          type: GET_HACKATONS,
          payload: res.data
      });
  } catch (err) {
    dispatch({
      type: HACK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
