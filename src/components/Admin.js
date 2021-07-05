import React, { useEffect } from "react";
import { fetchUsers } from "../store/actions/users";
import UserAdmin from "../components/UserAdmin";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOGIN_SUCCESS } from "../store/actions/types";

export default function Admin() {
  let dispatch = useDispatch();

  let { loading, users, error } = useSelector((state) => state.users);
  let { logined } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  useEffect(()=> {
     if (localStorage.getItem("key")) {
       dispatch({ type: LOGIN_SUCCESS, payload: localStorage.getItem('user_id') });
     };
  }, []);


  return (
    <div className="users-page">
      {logined ? (
        <div className="container users">
          <Link to="/">
            <h6 className='link-to-main'>Back to main page!</h6>
          </Link>
          <h3>Пользователи сети</h3>
          <br />
          {loading && <h2>Loading</h2>}
          {error && <div className="alert alert-danger">Error!</div>}
          {!!users?.length &&
            users?.map((user) => <UserAdmin key={user.id} data={user} />)}
        </div>
      ) : (
        <div className="alert alert-danger">
          You are not logged in! <Link to="/login">Login</Link> or{" "}
          <Link to="/register">Register</Link>
        </div>
      )}
    </div>
  );
}
