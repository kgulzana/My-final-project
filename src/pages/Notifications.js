import React from "react";
import Quotes from "../components/Quotes";
import HeaderActions from "../components/HeaderActions";
import FilterMenu from "../components/FilterMenu";
import Footer from "../components/Footer";
import { fetchExchanges, fetchMyExchanges } from "../store/actions/exchange";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchDelete } from "../store/actions/exchange";

export default function Notifications() {
  let { exchanges, myExchanges } = useSelector((state) => state.exchanges);

  let dispatch = useDispatch();
  let userId = useSelector((state) => state.auth.userId);
  let { data: books } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchMyExchanges(userId));
    dispatch(fetchExchanges(books, userId));
  }, [userId, books]);

  return (
    <>
      <Quotes />
      <HeaderActions />
      <FilterMenu />
      <>
        <div className="container">
          <h2>Мои запросы</h2>
          {!myExchanges.length ? (
            <h3>Запросов нет</h3>
          ) : (
            <div className="row">
              {myExchanges.map((item) => (
                <div className="col-md-6">
                  <div class="card text-center book-notifications">
                    <h5 class="card-header"> Уведомление</h5>
                    <div class="card-body n-details" key={item?.id}>
                      <h5 class="card-title">{item?.book?.name}</h5>
                      <p class="card-text">{item?.book?.writer}</p>
                      <p className="card-text proposal">
                        Пользователь{" "}
                        <Link to={`user/${item?.id}`}>
                          <h4>{item?.owner?.username}</h4>
                        </Link>
                        предлагает обменять книгу
                      </p>
                      <button
                        onClick={() => {
                          dispatch(fetchDelete(item?.id));
                        }}
                        className="btn btn-primary delete-noticeBtn"
                      >
                        Удалить
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="container">
          <h2>Запросы на мои книги</h2>
          {!exchanges.length ? (
            <h3>Запросов нет</h3>
          ) : (
            <div className="row">
              {exchanges.map((item) => (
                <div className="col-md-6">
                  <div class="card text-center book-notifications">
                    <h5 class="card-header"> Уведомление</h5>
                    <div class="card-body n-details" key={item?.id}>
                      <h5 class="card-title">{item?.book?.name}</h5>
                      <p class="card-text">{item?.book?.writer}</p>
                      <p className="card-text proposal">
                        Пользователь{" "}
                        <Link to={`user/${item?.id}`}>
                          <h4>{item?.owner?.username}</h4>
                        </Link>
                        предлагает обменять книгу
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </>
      <Footer />
    </>
  );
}
