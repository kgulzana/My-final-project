import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { login } from "../store/actions/auth";

export default function Login() {
  let [loginForm, setLoginForm] = useState({});
  let dispatch = useDispatch();
  const history = useHistory();

  const { logined } = useSelector((state) => state.auth);

  let handleChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  let loginHandler = (e) => {
    e.preventDefault();
    let request = {
      method: "POST",
      body: JSON.stringify(loginForm),
      headers: {
        "Content-Type": "application/json",
      },
    };
    dispatch(login(request));

 
  };

  useEffect(() => {
    if (logined) {
      history.push("/");
    }
  }, [logined]);

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Login</h3>
        </div>

        <div className="card-body">
          <form onSubmit={loginHandler}>
            <div className="mb-3">
              <label for="username" className="form-label">
                username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                onChange={handleChange}
                value={loginForm.username}
              ></input>
            </div>
            <div className="mb-3">
              <label for="password" className="form-label">
                Password
              </label>
              <input
                type="text"
                className="form-control"
                id="password"
                name="password"
                onChange={handleChange}
                value={loginForm.password}
              ></input>
            </div>
            <div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="card-footer">
          Have no account?
          <Link to="/register">register</Link>
        </div>
      </div>
    </>
  );
}
