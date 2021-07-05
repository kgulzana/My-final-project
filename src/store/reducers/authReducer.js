import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "../actions/types";

let initialState = {
  logined: false,
  userId: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        logined: true,
        userId: action.payload,
      };
      break;
    case LOGIN_FAILURE:
      return {
        ...state,
        logined: false,
        userId: null,
      };
      break;
    case LOGOUT:
      return {
        ...state,
        logined: false,
        userId: null,
      };
      break;
    default:
      return state;
      break;
  }
}
