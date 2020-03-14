import axios from 'axios';
import {
    GET_EMPLOYERS, EMPLOYERS_ERROR
} from './types';

export const getEmployers = () => async dispatch => {
    try {
        const res = await axios.get('/api/employers');
        dispatch({
            type: GET_EMPLOYERS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: EMPLOYERS_ERROR,
            payload: { msg: err.response.status.text, status: err.response.status }
        });
    }
}