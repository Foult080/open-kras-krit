import {
    EMPLOYERS_ERROR,
    GET_EMPLOYERS
} from '../actions/types';

const initialState = {
    employers: [],
    loading: true,
    error: {}    
}

export default function (state = initialState, actions) {
    const { type, payload } = actions;
    switch(type) {
        case GET_EMPLOYERS:
            return {
                ...state,
                employers: payload,
                loading: false
            }
        case EMPLOYERS_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default:
            return {
                ...state
            }
    }
}