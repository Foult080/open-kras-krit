import axios from "axios";
import { GET_EVENTS, EVENTS_ERROR } from "./types";

//get events from api
export const getEvents = () => async dispatch => {
    try {
        const res = await axios.get('/api/events');
        dispatch({
            type: GET_EVENTS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: EVENTS_ERROR,
            payload: { msg: err.response.status.text, status: err.response.status }
        });
    }
}

//get all events
export const getAllEvents = () => async dispatch => {
    try {
        const res = await axios.get('/api/events/all');
        dispatch({
            type: GET_EVENTS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: EVENTS_ERROR,
            payload: { msg: err.response.status.text, status: err.response.status }
        });
    }
}
