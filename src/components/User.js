import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { addNewBookAction } from "../store/actions/users";

export default function User({ data, loading }) {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({});

  const toggle = () => setModal(!modal);

  let addBookHandler = (e) => {
    e.preventDefault();

    let request = {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("http://zahiddin.pythonanywhere.com/book/ " + "/add", request)
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
    <>
      <div className="col-3 book">
        <div className="book-desc">
          <Link to="/users:id" className="name">
            {data.name}
          </Link>
        </div>
      </div>
      <div>
        <button disabled={loading} className="btn btn-primary">
          Add new book
        </button>

        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            <h3>Add new book</h3>
            <form onSubmit={addBookHandler}>
              <div className="mb-3">
                <label for="name" className="form-label">
                  name
                </label>
                <inpuit
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  value={form.name}
                ></inpuit>
              </div>
              <div className="mb-3">
                <label for="name" className="form-label">
                  author
                </label>
                <inpuit
                  type="text"
                  className="form-control"
                  id="author"
                  name="author"
                  onChange={handleChange}
                  value={form.author}
                ></inpuit>
              </div>
              <div className="mb-3">
                <label for="name" className="form-label">
                  description
                </label>
                <inpuit
                  type="text"
                  className="form-control"
                  id="description"
                  name="description"
                  onChange={handleChange}
                  value={form.deswcription}
                ></inpuit>
              </div>
              <div className="mt-3">
                <button className="btn btn-primary" type="submit">
                  Add
                </button>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}
