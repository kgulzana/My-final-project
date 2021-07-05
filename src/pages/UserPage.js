import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { addNewBookAction } from "../store/actions/books";
import { Link } from "react-router-dom";
import { RiNotification2Line } from "react-icons/ri";
import Footer from "../components/Footer";
import { fetchDelete } from "../store/actions/books";
import { fetchUsers } from "../store/actions/users";
import Quotes from "../components/Quotes";
import HeaderActions from "../components/HeaderActions";
import FilterMenu from "../components/FilterMenu";

export default function UserPage({ loading }) {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({});
  let { id } = useParams();

  const toggle = () => {
    setModal((prevValue) => {
      console.log("PREVVALUE", prevValue);
      return !prevValue;
    });
  };

  let { users } = useSelector((state) => state.users);
  let [user] = users.filter((u) => u.id === +id);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers());
    }
  }, []);

  let addBookHandler = (event) => {
    event.preventDefault();

    let request = {
      method: "POST",
      body: new FormData(form),
      headers: {
        Authorization: "Token " + localStorage.getItem("key"),
        "Content-Type": "multipart/form-data",
      },
    };

    fetch("http://zahazaha.pythonanywhere.com/book/", request)
      .then((r) => r.json())
      .then((data) => {
        if (typeof data === "string") {
          alert("Error!");
        } else {
          setModal(false);
          dispatch(addNewBookAction(data));
        }
      });
  };

  let handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Quotes />
      <HeaderActions />
      <FilterMenu />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="user-details">
              <h5 className="name">Имя пользователя: {user?.username}</h5>
              <h3 className="name">Имя: {user?.first_name}</h3>
              <h3 className="name">Фамилия: {user?.last_name}</h3>
              <p className="name">Номер телефона: {user?.phone}</p>
              <p className="name">Bio: "{user?.bio}"</p>
            </div>
          </div>
          <div className="col-md-4 btns">
            <Link to="/notifications">
              <RiNotification2Line className="notice" />
            </Link>
            <button
              disabled={loading}
              onClick={toggle}
              className="btn btn-primary add-btn"
            >
              Add new book
            </button>
          </div>
        </div>
        <div className="row">
          {user?.books?.map((book) => (
            <div className="card shadow col-md-3 book">
              <div className="lbl-exchange">Обмен</div>
              <div className="lbl-sale">Продажа</div>

              <div className="book-img" key={book.id}>
                {" "}
                <img
                  className="card-img-top"
                  src={book?.image}
                  alt={user?.name}
                />
                <div className="card-body text-center book-desc">
                  <p className="card-title book-title">{book?.name}</p>
                  <p className="book-author">{book?.writer}</p>
                  <button
                    onClick={() => {
                      dispatch(fetchDelete(book?.id));
                    }}
                    className="btn btn-primary delete-btn"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
      <div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}></ModalHeader>
          <ModalBody>
            <h3>Add new book</h3>
            <form onSubmit={addBookHandler}>
              <div className="mb-3">
                <label for="name" className="form-label">
                  name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  value={form.name}
                ></input>
              </div>
              <div className="mb-3">
                <label for="name" className="form-label">
                  writer
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="writer"
                  name="writer"
                  onChange={handleChange}
                  value={form.writer}
                ></input>
              </div>
              <div className="mb-3">
                <label for="description" className="form-label">
                  description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  name="description"
                  onChange={handleChange}
                  value={form.description}
                ></input>
              </div>
              <div className="mb-3">
                <label for="image" className="form-label">
                  image
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  name="image"
                  onChange={handleChange}
                  value={form.image}
                ></input>
              </div>
              <div className="mb-3">
                <label for="category" className="form-label">
                  category
                </label>
                {/* <input
                  type="text"
                  className="form-control"
                  id="category"
                  name="category"
                  onChange={handleChange}
                  value={form.category}
                ></input> */}
                <div class="dropdown">
                  <button
                    className="form-control dropdown-toggle"
                    type="button"
                    id="category"
                    name="category"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                    onChange={handleChange}
                    value={form.category}
                  >
                    Категория
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Психология
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Художественная литература
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Деловая литература
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-3">
                <button className="btn btn-primary" type="submit">
                  Add
                </button>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}
