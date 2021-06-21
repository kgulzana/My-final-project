import img from "../images/logo.jpg";
import { FiSearch } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setSearchAction } from "../store/actions/settings";
import { Link } from 'react-router-dom'
import { Nav } from "react-bootstrap";


export default function HeaderActions() {
  let dispatch = useDispatch();
  let searchString = useSelector((state) => state.settings.search);

  let handleClick = (e)=> {
    e.preventDefault()

  }
  return (
    <div className="container">
      <div className="row section-logo">
        <div className="col-4">
          <div className="logo">
            <img src={img} alt="logo" className="logo-img"></img>
            <h3 className="logo-name">BookExchange.kg</h3>
          </div>
        </div>
        <div className="col-4">
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
        <div className="col-4 login">
          <div className="authorization">
            <BsFillPersonFill className="icon-person" />
            <button type='submin' className="btn btn-primary" onClick={handleClick}>
              <Nav.Link>
                <Link to="/Login">Войти</Link>
              </Nav.Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
