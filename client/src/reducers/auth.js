import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS
} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuth: null,
    loading: true,
    user: null
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case USER_LOADED:
            return {
                ...state,
                isAuth: true,
                loading: false,
                user: payload
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuth: true,
                loading: false
            }
        case REGISTER_FAIL:
        case AUTH_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuth: false,
                loading: false
            }
        default:
            return state;
    }
}