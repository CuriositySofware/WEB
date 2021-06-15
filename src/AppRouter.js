import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Footer from "./shared/Footer";
import Header from "./shared/Header";
import Applications from "./views/Applications/Applications";
import Detail from "./views/Detail/Detail";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import NewPost from "./views/NewPost/NewPost";
import Register from "./views/Register/Register";
import PrivateRoute from './PrivateRoute';

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />      
        <Route exact path="/search" component={Home} />
        <Route exact path="/search/:id" component={Detail} />
      {/*   <Route exact path="/publish" component={NewPost} /> */}
        <Route exact path="/applications" component={Applications} />
        <PrivateRoute path="/publish" component={NewPost} />
        <Redirect to="/search" />
      </Switch>
      <Footer />
    </Router>
  );
}
