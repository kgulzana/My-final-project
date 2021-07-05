import React from "react";
import Quotes from "../components/Quotes";
import HeaderActions from "../components/HeaderActions";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import NavMenu from "../components/FilterMenu";
import Footer from "../components/Footer";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { fetchBooks, fetchExchangeBook } from "../store/actions/books";

export default function BookPage() {
  const dispatch = useDispatch();
  let { id } = useParams();
  let { data } = useSelector((state) => state.books);
  let book = data.find((b) => b.id === +id);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchBooks());
    }
  }, []);

  return (
    <>
      <Quotes />
      <HeaderActions />
      <NavMenu />
      <div className="container">
        <div className="row book-page">
          <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">
            <img
              className="card-img-top"
              src={book?.image}
              alt={book?.name}
            ></img>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
            <div className="book-desc">
              Название книги: <h3>{book?.name}</h3>
              Автор книги: <h4 className="data-author"> {book?.writer}</h4>
              Жанр книги: <p> {book?.category?.name}</p>
              Владелец книги:  <p>{book?.owner?.first_name}</p>
              <h6>О книге</h6><p>{book?.description}</p>
              {/* <button onClick={() => handleExchange(data.id)}>Exchange</button> */}
            </div>
            <div className="comments">
              <p>
                {book?.book_comments?.map((comment) => (
                  <div key={comment.id}>{comment.text}</div>
                ))}
              </p>
            </div>
            <button
              type="submin"
              onClick={toggle}
              className="btn btn-primary exchange-btn"
            >
              Обмен
            </button>
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>
                Уверены ли вы обменять на данную книгу?
              </ModalHeader>
              <ModalBody>
                <div className="mt-3">
                  <button
                    className="btn btn-primary"
                    onClick={() => dispatch(fetchExchangeBook(book.id))}
                  >
                    Согласны
                  </button>
                  <Button className='btn-not-agree'color="secondary" onClick={toggle}>
                    Не согласны
                  </Button>
                </div>
              </ModalBody>
            </Modal>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
