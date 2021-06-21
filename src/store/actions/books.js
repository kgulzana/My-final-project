import { FETCH_START, FETCH_FAILURE, FETCH_SUCCESS } from "../actions/types";
import { BOOKS_URL } from "../constants/booksUrl";

export function fetchFailure(payload) {
  return {
    type: FETCH_FAILURE,
    payload,
  };
}

export function fetchSuccess(payload) {
  return {
    type: FETCH_SUCCESS,
    payload,
  };
}

export function fetchStart() {
  return {
    type: FETCH_START,
  };
}

export const fetchBooks = () => (dispatch) => {
  dispatch(fetchStart());
  console.log(1);
  fetch(BOOKS_URL)
    .then((r) => r.json())
    .then((data) => {
      console.log("DATA", data);
      if (Array.isArray(data)) {
        dispatch(fetchSuccess(data));
        return;
      }

      dispatch(fetchFailure("Данные не загрузились"));
    })
    .catch((e) => {
      dispatch(fetchFailure(e.message));
    });
};
