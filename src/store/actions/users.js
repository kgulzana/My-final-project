import {
  SET_USERS,
  SET_USER,
  FETCH_START,
  FETCH_END,
  FETCH_FAILURE,
  FETCH_SUCCESS,
  ADD_BOOK
} from "./types";
import { USERS_URL } from "../constants/booksUrl";

export function setUsers(payload) {
  return {
    type: SET_USERS,
    payload,
  };
}

export function setUser(payload) {
  return {
    type: SET_USER,
    payload,
  };
}

export function fetchUsersFailure(payload) {
  return {
    type: FETCH_FAILURE,
    payload,
  };
}

export function fetchUserFailure(payload) {
  return {
    type: FETCH_FAILURE,
    payload,
  };
}

export function fetchUsersSuccess(payload) {
  return {
    type: FETCH_SUCCESS,
    payload,
  };
}

export function fetchUserSuccess(payload) {
  return {
    type: FETCH_SUCCESS,
    payload,
  };
}

export function startFetchUsers() {
  return {
    type: FETCH_START,
  };
}

export function startFetchUser() {
  return {
    type: FETCH_START,
  };
}

export function endFetchUsers() {
  return {
    type: FETCH_END,
  };
}

export function endFetchUser() {
  return {
    type: FETCH_END,
  };
}

export const fetchUsers = () => (dispatch) => {
  dispatch(startFetchUsers());
  dispatch(setUsers([]));

  fetch(USERS_URL)
    .then((r) => r.json())
    .then((data) => {
      if (typeof data === "string") {
        dispatch(fetchUsersFailure(data));
      } else {
        dispatch(setUsers(data));
        dispatch(fetchUsersSuccess(data));
      }

      dispatch(endFetchUsers());
    })
    .catch((e) => {
      console.error("Error", e);
    });
};

export const fetchUser = (id) => (dispatch) => {
  dispatch(startFetchUser());
  dispatch(setUser([]));

  fetch(USERS_URL + id)
    .then((r) => r.json())
    .then((data) => {
      if (typeof data === "string") {
        dispatch(fetchUserFailure(data));
      } else {
        dispatch(setUser(data));
        dispatch(fetchUserSuccess(data));
      }

      dispatch(endFetchUser());
    })
    .catch((e) => {
      console.error("Error", e);
    });
};

export function addNewBookAction(data) {
  return {
    type: ADD_BOOK,
    payload: data,
  };
}
