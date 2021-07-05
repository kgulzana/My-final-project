import img from "../images/logo.jpg";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setSearchAction } from "../store/actions/settings";
import { Link } from "react-router-dom";
import { RiNotification2Line } from "react-icons/ri";
import { EXCHANGE_URL } from "../store/constants/projectsUrls";

export default function HeaderActions() {
  let dispatch = useDispatch();
  let searchString = useSelector((state) => state.settings.search);
  let user = useSelector((state) => state.user);
  let { logined } = useSelector((state) => state.auth);

  let handleNotice = (e) => {
    e.preventDefault();

    let request = {
      method: "POST",
      body: JSON.stringify(),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(EXCHANGE_URL, request)
      .then((r) => r.json())
      .then((data) => {
        dispatch({ type: "SET_NOTICE", payload: true });
      });
  };

  let handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <div className="wrapper">
      <div className="container">
        <div className="row section-logo">
          <div className="col-md-4">
            <div className="logo">
              <Link to="/">
                <img src={img} alt="logo" className="logo-img"></img>
              </Link>

              <h3 className="logo-name">BOOKEXCHANGE.KG</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form">
              <form className="search-form">
                <input
                  type="text"
                  placeholder="Поиск по каталогу"
                  className="search-input"
                  value={searchString}
                  onChange={(e) => dispatch(setSearchAction(e.target.value))}
                ></input>
                <FiSearch />
              </form>
            </div>
          </div>
          {logined ? (
            <div className="col-md-4 personal-profile">
              <div className="profile-btn">
                <h5 className="profile-notice">Личный кабинет</h5>
                <Link to="/notifications">
                  <RiNotification2Line className="notice" />
                </Link>
              </div>
            </div>
          ) : (
            <div className="col-md-4 login">
              <div className="authorization">
                <div className="auth-signin">
                  <Link to="/login">Войти</Link>
                </div>
                <div className="auth-register">
                  <Link to="/register">
                    Регистрация{" "}
                  </Link>
                </div>
                <Link to="/notifications">
                  <RiNotification2Line className="notice" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
