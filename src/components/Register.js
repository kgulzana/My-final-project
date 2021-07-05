import { useState } from "react";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function Register() {
  let [regForm, setRegForm] = useState({});
  let dispatch = useDispatch();

  let handleChange = (e) => {
    setRegForm({
      ...regForm,
      [e.target.name]: e.target.value,
    });

    console.log(regForm);
  };

  let getPythonDate = (date) => {
    let _month = date.getMonth() + 1;
    if (_month < 10) {
      _month = "0" + _month;
    } else {
      _month = String(_month);
    }

    let _day = date.getDate();
    if (_day < 10) {
      _day = "0" + _day;
    } else {
      _day = String(_day);
    }

    // return _month + "-" + _day + "-" + String(date.getFullYear());
    return String(date.getFullYear()) + "-" + _month + "-" + _day;
  };

  let registerHandler = (e) => {
    e.preventDefault();

    let request = {
      method: "POST",
      body: JSON.stringify({
        ...regForm,
        dob: getPythonDate(regForm.dob),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("http://zahazaha.pythonanywhere.com/user/register", request)
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
            <label for="login" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              onChange={handleChange}
              value={regForm.username}
            ></input>
          </div>
          <div className="mb-3">
            <label for="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={handleChange}
              value={regForm.password}
            ></input>
          </div>
          <div className="mb-3">
            <label for="firstname" className="form-label">
              Firstname
            </label>
            <input
              type="text"
              className="form-control"
              id="first_name"
              name="first_name"
              onChange={handleChange}
              value={regForm.first_name}
            ></input>
          </div>
          <div className="mb-3">
            <label for="last_name" className="form-label">
              Lastname
            </label>
            <input
              type="text"
              className="form-control"
              id="last_name"
              name="last_name"
              onChange={handleChange}
              value={regForm.last_ame}
            ></input>
          </div>
          <div className="mb-3">
            <p>Age</p>
            <DatePicker
              dateFormat="dd/MM/yyyy"
              selected={regForm.dob}
              onChange={(date) => {
                setRegForm({
                  ...regForm,
                  dob: date,
                });
              }}
            />
          </div>
          <div className="mb-3">
            <label for="phone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              onChange={handleChange}
              value={regForm.phone}
            ></input>
          </div>
          <div className="mb-3">
            <label for="phone" className="form-label">
              Bio
            </label>
            <input
              type="text"
              className="form-control"
              id="bio"
              name="bio"
              onChange={handleChange}
              value={regForm.bio}
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
