import {
  GET_BOOKS_SUCCESS,
  GET_BOOKS_LOADING,
  GET_BOOKS_FAILED,
  ADD_BOOK,
} from "../actions/types";

const initialState = {
  data: [],
  success: false,
  loading: false,
  failed: false,
  error: null,
};

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BOOKS_SUCCESS:
      return {
        data: action.payload,
        success: true,
        loading: false,
        failed: false,
        error: null,
      };
    case GET_BOOKS_LOADING:
      return {
        ...state,
        success: false,
        loading: true,
        failed: false,
        error: null,
      };
    case GET_BOOKS_FAILED:
      return {
        ...state,
        success: false,
        loading: false,
        failed: true,
        error: action.error,
      };
    case ADD_BOOK:
      return {
        ...state,
        books: [action.payload, ...state.books],
      };
      break;

    default:
      return state;
  }
}
