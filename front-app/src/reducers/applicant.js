import {
  GET_APPLICANT,
  APPLICANT_ERROR,
  CLEAR_APPLICANT,
  UPDATE_APPLICANT
} from "../actions/types";

const initialState = {
  applicant: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_APPLICANT:
    case UPDATE_APPLICANT:
      return {
        ...state,
        applicant: payload,
        loading: false
      };
    case APPLICANT_ERROR:
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
