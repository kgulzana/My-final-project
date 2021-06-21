import Book from "./Book";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Navbar, Nav, Container, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Books() {
  let books = useSelector((state) => state.books.books);
  let searchStr = useSelector((state) => state.settings.search);

  let [filteredBooks, setFilteredBooks] = useState([]);
  useEffect(() => {
    console.log(books);
    setFilteredBooks(
      books.filter(({ name }) => {
        return name.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1;
      })
    );
  }, [searchStr]);

  useEffect(() => {
    console.log(books);
    setFilteredBooks(books);
  }, [books]);
  return (
    <>
      <div className="container">
        <div className="row">
          {!filteredBooks ? (
            <p>Books not found</p>
          ) : (
            filteredBooks.map((book) => {
              return <Book key={book.id} data={book} />;
            })
          )}
        </div>
      </div>
      <footer className="footer">
        <div className="footer-info">
          <ul className="sections">
            <li>
              <Link to="/Categories">Категории</Link>
            </li>
            <li>
              <Link to="/NewItems">Новинки</Link>
            </li>
            <li>
              <Link to="/Promotions">Акции</Link>
            </li>
            <li>
              <Link to="/Sales">Распродажа</Link>
            </li>
            <li>
              <Link to="/WhatElse">Что еще почитать?</Link>
            </li>
          </ul>
        </div>

        <div className="developers">
          <p>Frontent Developer: Katkeldieva Gulzana</p>
          <p>Backend Developer: Zahiddin Avtandil</p>
        </div>
      </footer>
    </>
  );
}
