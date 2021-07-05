import "./App.css";
import "./responsive.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./components/Login";
import Register from "./components/Register";
import BookPage from "./pages/BookPage";
import UserPage from "./pages/UserPage";
import Admin from "./components/Admin";
import UserAdmin from "./components/UserAdmin";
import Notifications from "./pages/Notifications";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/register" component={Register} />

        <Route path="/admin" component={Admin} />
        <Route path="/userAdmin" component={UserAdmin} />

        <Route path="/book/:id" component={BookPage} />
        <Route path="/user/:id" component={UserPage} />
      </Switch>
    </Router>
  );
}

export default App;
