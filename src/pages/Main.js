import Quotes from "../components/Quotes";
import HeaderActions from "../components/HeaderActions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../store/actions/books";
import Books from "../components/Books";
import Slider from "../components/Slider";
import Auth from "../components/Auth";
import FilterMenu from "../components/FilterMenu";
import { fetchUsers } from "../store/actions/users";

import { useSelector } from "react-redux";
import { LOGIN_SUCCESS } from "../store/actions/types";

export default function Main() {
  let { logined } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("key")) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: localStorage.getItem("user_id"),
      });
    }
  }, []);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <Quotes />
      <HeaderActions />
      <FilterMenu />
      <Slider />
      <Books />
    </>
  );
}
