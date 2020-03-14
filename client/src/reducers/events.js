import {
    EVENTS_ERROR,
    GET_EVENTS
} from '../actions/types';

const initialState = {
    events: [],
    loading: true,
    error: {}
}

export default function (state = initialState, actions ) {
    const { type, payload } = actions;
    switch(type) {
        case GET_EVENTS:
            return {
                ...state,
                events: payload,
                loading: false
            }
        case EVENTS_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default: 
            return{
                ...state
            }
    }
}