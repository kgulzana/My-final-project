import { QUOTES_URL } from "../constants/projectsUrls";
import {
  SET_QUOTES,
  GET_QUOTES_LOADING,
  GET_QUOTES_SUCCESS,
  GET_QUOTES_FAILED,
} from "./types";

export function setQuotes(payload) {
  return {
    type: SET_QUOTES,
    payload,
  };
}

export const fetchQuotes = () => (dispatch) => {
  dispatch({ type: GET_QUOTES_LOADING });
  fetch(QUOTES_URL)
    .then((r) => r.json())
    .then((data) => {
      dispatch({ type: GET_QUOTES_SUCCESS, payload: data });
    })
    .catch((error) => {
      dispatch({ type: GET_QUOTES_FAILED, payload: error.message });
    });
};
