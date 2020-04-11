import axios from "axios";
import { APPLICANT_ERROR, GET_APPLICANT, TEST_ERR, GET_TEST } from "./types";
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

export const getTest = () => async dispatch => {
    try {
        const res = await axios.get('/api/applicant/test');
        dispatch({
            type: GET_TEST,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
        dispatch({
            type: TEST_ERR,
            payload: { msg: err.response.status.text }
        });
    }
}