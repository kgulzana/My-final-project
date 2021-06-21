import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./components/Login";
import Register from "./components/Register";
import Auth from "./components/Auth";

import Categories from './pages/Categories';
import Promotions from "./pages/Promotions";
import NewItems from "./pages/NewItems";
import WhatElse from "./pages/WhatElse";
import Sales from "./pages/Sales";
import Users from "./components/Users";

function App() {
 
  
  return (
    <Router>
  
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/categories" exact component={Categories} />
        <Route path="/promotions" exact component={Promotions} />
        <Route path="/newItems" exact component={NewItems} />
        <Route path="/sales" exact component={Sales} />
        <Route path="/whatElse" exact component={WhatElse} />
        <Route path="/students/:id" exact component={Users} />
        <Route path="/bookPage/" exact component={Users} />
      </Switch>
    </Router>
  );
}

export default App;
