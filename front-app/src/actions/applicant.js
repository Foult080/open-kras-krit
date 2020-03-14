import axios from "axios";
import { APPLICANT_ERROR, GET_APPLICANT } from "./types";
//import { setAlert } from "./alert";

export const getRating = () => async dispatch => {
    try {
        const res = await axios.get('/api/applicant/me');
        dispatch({
            type: GET_APPLICANT,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: APPLICANT_ERROR,
            payload: { msg: err.response.status.text, status: err.response.status }
        });
    }
}