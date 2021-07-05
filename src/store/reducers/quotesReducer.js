import {
  GET_QUOTES_FAILED,
  GET_QUOTES_SUCCESS,
  GET_QUOTES_LOADING,
  SET_QUOTES,
} from "../actions/types";

const initialState = {
  quotes: [],
  success: false,
  loading: false,
  failed: false,
  error: null,
};
export default function quotesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_QUOTES:
      return {
        ...state,
        quotes: action.payload,
      };
      break;
    case GET_QUOTES_SUCCESS:
      return {
        ...state,
        quotes: action.payload,
        success: true,
        loading: false,
        failed: false,
        error: null,
      };
    case GET_QUOTES_LOADING:
      return {
        ...state,
        success: false,
        loading: true,
        failed: false,
        error: null,
      };
    case GET_QUOTES_FAILED:
      return {
        ...state,
        success: false,
        loading: false,
        failed: true,
        error: action.error,
      };

    default:
      return state;
  }
}
