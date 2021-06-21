import {
  FETCH_START,
  FETCH_FAILURE,
  FETCH_SUCCESS,
} from "../actions/types";

const initialState = {
  books: [],
  loading: false,
  error: null,
};

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        books: action.payload,
      };

    default:
      return state;
  }
}
