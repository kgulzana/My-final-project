import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Register() {
  let [regForm, setRegForm] = useState({});
  let dispatch = useDispatch();

  let handleChange = (e) => {
    setRegForm({
      ...regForm,
      [e.target.name]: e.target.value,
    });
  };

  let registerHandler = (e) => {
    e.preventDefault();

    let request = {
      method: "POST",
      body: JSON.stringify(regForm),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("http://zahiddin.pythonanywhere.com/user/register", request)
      .then((r) => r.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("key", data.token);
          dispatch({ type: "SET_STATUS", payload: true });
          window.location.href = "/";
        }
      });
  };
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Register</h3>
      </div>

      <div className="card-body">
        <form onSubmit={registerHandler}>
          <div className="mb-3">
            <label for="login" class="form-label">
              Username
            </label>
            <input
              type="text"
              class="form-control"
              id="username"
              name="username"
              onChange={handleChange}
              value={regForm.username}
            ></input>
          </div>
          <div className="mb-3">
            <label for="password" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
              onChange={handleChange}
              value={regForm.password}
            ></input>
          </div>
          <div className="mb-3">
            <label for="firstname" class="form-label">
              Firstname
            </label>
            <input
              type="text"
              class="form-control"
              id="first_name"
              name="first_name"
              onChange={handleChange}
              value={regForm.first_name}
            ></input>
          </div>
          <div className="mb-3">
            <label for="last_name" class="form-label">
              Lastname
            </label>
            <input
              type="text"
              class="form-control"
              id="last_name"
              name="last_name"
              onChange={handleChange}
              value={regForm.last_ame}
            ></input>
          </div>

          <div className="mb-3">
            <label for="password" class="form-label">
              Age
            </label>
            <input
              type="text"
              class="form-control"
              id="age"
              name="age"
              onChange={handleChange}
              value={regForm.age}
            ></input>
          </div>
          <div className="mb-3">
            <label for="phone" class="form-label">
              Phone
            </label>
            <input
              type="text"
              class="form-control"
              id="phone"
              name="phone"
              onChange={handleChange}
              value={regForm.phone}
            ></input>
          </div>
          <div className="mb-3">
            <label for="phone" class="form-label">
              Bio
            </label>
            <input
              type="text"
              class="form-control"
              id="bio"
              name="bio"
              onChange={handleChange}
              value={regForm.bio}
            ></input>
          </div>
          <div className="mb-3">
            <label for="avatar" class="form-label">
              Avatar
            </label>
            <input
              type="file"
              class="form-control"
              id="avatar"
              name="avatar"
              onChange={handleChange}
              value={regForm.avatar}
            ></input>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
