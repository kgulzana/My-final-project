import { SET_QUOTES } from "../actions/types";


let initialState = {
    quotes: []
}

export default function quotesReducer(state=initialState, action) {
  switch (action.type) {
    case SET_QUOTES:
      return {
        ...state,
        quotes: action.payload,
      };
      break;
    default:
      return state;
      break;
  }
}