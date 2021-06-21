import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "./types";

export const logoutAction = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  localStorage.removeItem("key");
};

export const getMeAction = (token) => (dispatch) => {
  let request = {
    headers: {
      "KEY": token,
    },
  };

  fetch("http://zahiddin.pythonanywhere.com/me", request)
    .then((r) => r.json())
    .then((data) => {
      if (typeof data === "string") {
        dispatch({ type: LOGIN_FAILURE });
      } else {
        dispatch({ type: LOGIN_SUCCESS });
      }
    });
};
