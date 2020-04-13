import {
  GET_APPLICANTS,
  CLEAR_APPLICANT,
  APPLICANTS_ERROR,
  SEND_APPLICANT,
  SEND_ERROR,
} from "../actions/types";

const initialState = {
  applicant: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SEND_APPLICANT:
      return {
        ...state,
        applicant: payload,
        loading: false
      }
    case GET_APPLICANTS:
      return {
        ...state,
        applicant: payload,
        loading: false
      };
    case APPLICANTS_ERROR:
    case SEND_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CLEAR_APPLICANT:
      return {
        ...state,
        applicant: null,
        loading: false
      };
    default:
      return state;
  }
}
