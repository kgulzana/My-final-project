import {
  GET_BOOKS_SUCCESS,
  GET_BOOKS_LOADING,
  GET_BOOKS_FAILED,
  DELETE_BOOK,
  EXCHANGE_BOOK,
  ADD_PROPOSAL,
  ADD_BOOK,
} from "../actions/types";
import { BOOKS_URL } from "../constants/projectsUrls";

export const fetchBooks = () => (dispatch) => {
  dispatch({ type: GET_BOOKS_LOADING });
  fetch(BOOKS_URL)
    .then((r) => r.json())
    .then((data) => {
      dispatch({ type: GET_BOOKS_SUCCESS, payload: data });
    })
    .catch((e) => {
      dispatch({ type: GET_BOOKS_FAILED, error: "Book fetch error" });
    });
};

export const fetchExchangeBook = (bookId) => (dispatch) => {
  // dispatch({ type: EXCHANGE_BOOK });
  let request = {
    method: "POST",
    body: JSON.stringify({ book_id: bookId }),
    headers: {
      Authorization: "Token " + localStorage.getItem("key"),
      "Content-Type": "application/json",
    },
  };

  fetch("http://zahazaha.pythonanywhere.com/exchange/", request)
    .then((r) => r.json())
    .then((data) => {
      console.log(data);
    })
    .catch((e) => {
      console.error(e.message);
    });
};

export const fetchDelete = (book_id) => (dispatch) => {
  let request = {
    method: "DELETE",
    headers: {
      Authorization: "Token " + localStorage.getItem("key"),
    },
  };

  fetch("http://zahazaha.pythonanywhere.com/book/" + book_id, request)
    .then((r) => r.json())
    .then((data) => {
      dispatch({ type: DELETE_BOOK, payload: book_id });
    });
};

export function addNewBookAction(data) {
  return {
    type: ADD_BOOK,
    payload: data,
  };
}
