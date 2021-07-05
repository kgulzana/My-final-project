import {
  GET_EXCHANGES_SUCCESS,
  GET_EXCHANGES_LOADING,
  GET_EXCHANGES_FAILED,
  GET_MY_EXCHANGES_SUCCESS,
  DELETE_BOOK,
  DELETE_EXCHANGE,
  EXCHANGE_BOOK,
  ADD_PROPOSAL,
} from "../actions/types";
import { EXCHANGE_URL } from "../constants/projectsUrls";

export const fetchExchanges = (books, userId) => (dispatch) => {
  dispatch({ type: GET_EXCHANGES_LOADING });
  fetch(EXCHANGE_URL)
    .then((r) => r.json())
    .then((data) => {
      let filteredBooks = books.filter((b) => +b.owner.id === +userId);
      let booksIds = filteredBooks.map((b) => b.id);
      let filtereData = data.filter((exc) => booksIds.includes(exc.book.id));
      dispatch({ type: GET_EXCHANGES_SUCCESS, payload: filtereData });
    })
    .catch((e) => {
      dispatch({ type: GET_EXCHANGES_FAILED, error: "Exchanges fetch error" });
    });
};

export const fetchMyExchanges = (user_id) => (dispatch) => {
  dispatch({ type: GET_EXCHANGES_LOADING });
  fetch(EXCHANGE_URL)
    .then((r) => r.json())
    .then((data) => {
      let filtereData = data.filter((exc) => +exc.owner.id === +user_id);
      dispatch({ type: GET_MY_EXCHANGES_SUCCESS, payload: filtereData });
    })
    .catch((e) => {
      dispatch({ type: GET_EXCHANGES_FAILED, error: "Exchanges fetch error" });
    });
};

export const fetchDelete = (exchange_id) => (dispatch) => {
  let request = {
    method: "DELETE",
    headers: {
      Authorization: "Token " + localStorage.getItem("key"),
    },
  };

  fetch("http://zahazaha.pythonanywhere.com/exchange/" + exchange_id, request)
    .then((r) => r.json())
    .then((data) => {
      dispatch({ type: DELETE_EXCHANGE, payload: exchange_id });
    });
};
