import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "./types";

export const logoutAction = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  localStorage.removeItem("key");
};

export const login = (request) => (dispatch) => {
  fetch("http://zahazaha.pythonanywhere.com/user/login", request)
    .then((r) => r.json())
    .then((data) => {
      if (typeof data === "string") {
        dispatch({ type: LOGIN_FAILURE });
      } else {
        dispatch({ type: LOGIN_SUCCESS, payload: data.id - 1 });
        console.log("LOGIN DATA", data);
        if (data.key) {
          localStorage.setItem("key", data.key);
          localStorage.setItem("user_id", data.id - 1);
          alert("You have loginned successfully!");
          //window.location.href = "/";
        } else {
          alert("login error!");
        }
      }
    });
};
