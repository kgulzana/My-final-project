import { Link } from "react-router-dom";
import React from "react";
import Auth from '../components/Auth';
import { useSelector } from "react-redux";


export default function UserAdmin({ data }) {
  let { logined } = useSelector((state) => state.auth);
  return (
    <>
      <div className="users-list">
        <form>
          <div className="form-group list">
            <div className="form-control">
              <div className="row">
                <div className="col-8 users-firstname ">
                  <Link to={`user/${data.id}`}>
                    <h5>{data.username}</h5>
                  </Link>
                </div>
                <div className="col-4">{data.phone}</div>
              </div>
            </div>
          </div>
        </form>
        <Auth logined={logined} />
      </div>
    </>
  );
}
