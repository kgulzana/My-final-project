import React from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Book({ data }) {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({});
  const toggle = () => setModal(!modal);

  let changeBookHandler = (e) => {
    e.preventDefault();
    let request = {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    };
  };


  let handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="card shadow col-md-3 col-lg-3 book">
        <div className="inner">
          <div className="lbl-exchange">Обмен</div>
          <div className="lbl-sale">Продажа</div>
          <Link to={{ pathname: `book/${data.id}` }}>
            <img
              className="card-img-top book-img"
              src={data.image}
              alt={data.name}
            ></img>
          </Link>
        </div>

        <div className="card-body text-center book-desc">
          <p className="card-title book-title">{data.name}</p>
          <p className="book-author">{data.writer}</p>
        </div>

        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Уведомление на обмен</ModalHeader>
          <ModalBody>
            <form onSubmit={changeBookHandler}>
              <div className="mb-3">
                <label for="name" className="form-label">
                  Пользователь
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="username"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  value={form.name}
                ></input>
              </div>
              <div className="mb-3">
                <label for="change" className="form-label">
                  Обмен на
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="название и автор книги"
                  id="change"
                  name="change"
                  onChange={handleChange}
                  value={form.change}
                ></input>
              </div>

              <div className="mt-3">
                <button className="btn btn-primary" type="submit">
                  Отправить
                </button>
                <Button color="secondary" onClick={toggle}>
                  Cancel
                </Button>
              </div>
            </form>
          </ModalBody>
        </Modal>
      </div>
    </>
  );
}
