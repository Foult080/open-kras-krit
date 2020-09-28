import {
  GET_HACK,
  GET_HACKATONS,
  CLEAR_HACK,
  HACK_ERROR,
  UPDATE_HACK,
  GET_TEAM,
} from "../actions/types";

const initialState = {
  hackatons: [],
  hack: null,
  team: null,
  loading: true,
  error: {},
};

export default function (state = initialState, actions) {
  const { type, payload } = actions;
  switch (type) {
    case GET_HACK:
    case UPDATE_HACK:
      return {
        ...state,
        hack: payload,
        loading: false,
      };
    case GET_HACKATONS:
      return {
        ...state,
        hackatons: payload,
        loading: false,
      };
    case GET_TEAM:
      return {
        ...state,
        team: payload,
        loading: false,
      };
    case CLEAR_HACK:
      return {
        ...state,
        hack: null,
      };
    case HACK_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
