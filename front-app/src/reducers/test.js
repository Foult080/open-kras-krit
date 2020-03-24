import { GET_TEST, TEST_ERR } from "../actions/types";

const initialState = {
  test: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case GET_TEST:
      return {
        ...state,
        test: payload,
        loading: false
      };
    case TEST_ERR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
