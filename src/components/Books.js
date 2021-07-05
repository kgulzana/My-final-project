import Book from "./Book";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

export default function Books() {
  let books = useSelector((state) => state.books.data);
  console.log("b", books);
  let searchStr = useSelector((state) => state.settings.search);

  let [filteredBooks, setFilteredBooks] = useState([]);
  useEffect(() => {
    console.log(searchStr);
    setFilteredBooks(
      books.filter(({ name, writer }) => {
        return (
          name.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1 ||
          writer.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1
        );
      })
    );
  }, [searchStr]);

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);
  return (
    <>
      <div className="container cards">
        <div className="row justify-content-center">
          {!filteredBooks ? (
            <p>Books not found</p>
          ) : (
            filteredBooks.map((book) => {
              return <Book key={book.id} data={book} />;
            })
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
