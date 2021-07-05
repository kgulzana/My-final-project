import {
  GET_EXCHANGES_SUCCESS,
  GET_MY_EXCHANGES_SUCCESS,
  GET_EXCHANGES_LOADING,
  GET_EXCHANGES_FAILED,
  DELETE_EXCHANGE,
} from "../actions/types";

const initialState = {
  exchanges: [],
  myExchanges: [],
  success: false,
  loading: false,
  failed: false,
  error: null,
};

export default function exchangesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_EXCHANGES_SUCCESS:
      return {
        ...state,
        exchanges: action.payload,
        success: true,
        loading: false,
        failed: false,
        error: null,
      };
    case GET_MY_EXCHANGES_SUCCESS:
      return {
        ...state,
        myExchanges: action.payload,
        success: true,
        loading: false,
        failed: false,
        error: null,
      };
    case GET_EXCHANGES_LOADING:
      return {
        ...state,
        success: false,
        loading: true,
        failed: false,
        error: null,
      };
    case GET_EXCHANGES_FAILED:
      return {
        ...state,
        success: false,
        loading: false,
        failed: true,
        error: action.error,
      };
    case DELETE_EXCHANGE:
      return {
        ...state,
        myExchanges: state.exchanges.filter((exc) => exc.id !== action.payload),
        success: true,
        loading: false,
        failed: false,
        error: null,
      };

    default:
      return state;
  }
}
