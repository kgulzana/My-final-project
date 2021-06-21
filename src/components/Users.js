import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchUsers } from "../store/actions/users";
import { fetchUser } from "../store/actions/users";
import { getMeAction } from "../store/actions/auth";
import User from "../components/User";

export default function Users() {

  let { users } = useSelector((state) => state.users);
  let dispatch = useDispatch();

  let { logined } = useSelector((state) => state.auth);

  let { id } = useParams();

  useEffect(() => {
    dispatch(fetchUser(id));
  }, [id]);

    useEffect(() => {
      dispatch(fetchUsers());
    }, []);

  useEffect(() => {
    let token = localStorage.getItem("x_token");
    dispatch(getMeAction(token));
  }, []);

  let { error, loading } = useSelector((state) => state.users);
  return (
    <>
      {logined ? (
        <>
          loading={loading} id={id}
          {loading && <h2>Loading</h2>}
          {error && <div className="alert alert-danger">Error!</div>}
          {!!users.length &&
            users.map((user) => (
              <User key={user.id} data={user} />
            ))}

        </>
      ) : (
        <div className="alert alert-danger">
          You are not authorized! <Link to="/login">Login!</Link>
        </div>
      )}
    </>
  );
}
