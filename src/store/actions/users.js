import {
  SET_USERS,
  FETCH_START_USERS,
  FETCH_END_USERS,
  FETCH_FAILURE_USERS,
  FETCH_SUCCESS_USERS,
} from "./types";
import { USERS_URL } from "../constants/projectsUrls";

export function setUsers(payload) {
  return {
    type: SET_USERS,
    payload,
  };
}


export function fetchUsersFailure(payload) {
  return {
    type: FETCH_FAILURE_USERS,
    payload,
  };
}



export function fetchUsersSuccess(payload) {
  return {
    type: FETCH_SUCCESS_USERS,
    payload,
  };
}


export function startFetchUsers() {
  return {
    type: FETCH_START_USERS,
  };
}


export function endFetchUsers() {
  console.log('wwww')
  return {
    type: FETCH_END_USERS,
  };
}


export const fetchUsers = () => (dispatch) => {
  dispatch(startFetchUsers());
  dispatch(setUsers([]));

  fetch(USERS_URL)
    .then((r) => r.json())
    .then((data) => {
      console.log("DATA", data);
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



