import {
  SET_USERS,
  FETCH_END,
  FETCH_START,
  FETCH_FAILURE,
  FETCH_SUCCESS,
} from "../actions/types";

const initialState = {
  users: [],
  loading: true,
  error: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
      break;
    case FETCH_START:
      return {
        ...state,
        loading: true,
      };
      break;
    case FETCH_END:
      return {
        ...state,
        loading: false,
      };
      break;
    case FETCH_FAILURE:
      return {
        ...state,
        error: true,
      };
      break;
    case FETCH_SUCCESS:
      return {
        ...state,
        error: false,
      };
      break;

    default:
      return state;
      break;
  }
}
