import NavMenu from "../components/NavMenu";
import Quotes from "../components/Quotes";
import HeaderActions from "../components/HeaderActions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../store/actions/books";
import Books from "../components/Books";
import Slider from "../components/Slider";
import Auth from "../components/Auth";
import Users from "../components/Users";
import { Link, useParams } from "react-router-dom";
import { fetchUsers } from "../store/actions/users";
import BookPage from "../components/BookPage";
import { useSelector } from "react-redux";

export default function Main() {
  let { logined } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  useEffect(() => {
    dispatch(fetchUsers(id));
  }, [id]);

  return (
    <>
      <Quotes />
      <HeaderActions />
      <NavMenu />
      <Slider />
      <Books />
      <Auth />
      <Users />
      <BookPage />
      <Auth logined={logined} />
    </>
  );
}
