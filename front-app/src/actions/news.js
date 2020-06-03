import axios from "axios";
import { GET_NEWS, GET_NEWS_EL, NEWS_ERR} from "./types";

export const getNews = () => async dispatch => {
    try {
        const res = await axios.get('/api/news');
        dispatch({
            type: GET_NEWS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: NEWS_ERR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
};

export const getNewsEl = id => async dispatch => {
    try {
        const res = await axios.get(`/api/news/${id}`);
        dispatch({
            type: GET_NEWS_EL,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: NEWS_ERR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
}