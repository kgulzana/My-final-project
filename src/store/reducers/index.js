import quotesReducer from "./quotesReducer";
import booksReducer from "./booksReducer";
import { combineReducers } from "redux";
import settingsReducer from "./settingsReducer";
import authReducer from "./authReducer";
import userReducer from "./userReducer";

export default combineReducers({
  quotes: quotesReducer,
  books: booksReducer,
  settings: settingsReducer,
  auth: authReducer,
  users: userReducer,
});
