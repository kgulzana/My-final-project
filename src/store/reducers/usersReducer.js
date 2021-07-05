import {
  SET_USERS,
  FETCH_END_USERS,
  FETCH_START_USERS,
  FETCH_FAILURE_USERS,
  FETCH_SUCCESS_USERS,
} from "../actions/types";

const initialState = {
  users: [],
  loading: false,
  error: false,
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
      break;
    case FETCH_START_USERS:
      return {
        ...state,
        loading: true,
      };
      break;
    case FETCH_END_USERS:
      return {
        ...state,
        loading: false,
      };
      break;
    case FETCH_FAILURE_USERS:
      return {
        ...state,
        error: true,
      };
      break;
    case FETCH_SUCCESS_USERS:
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
