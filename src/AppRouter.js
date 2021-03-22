import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Footer from "./shared/Footer";
import Header from "./shared/Header";
import Detail from "./views/Detail/Detail";
import Home from "./views/Home/Home";
import NewPost from "./views/NewPost/NewPost";

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/search" component={() => <Home />} />
        <Route exact path="/search/:id" component={() => <Detail />} />
        <Route exact path="/publish" component={() => <NewPost />} />
        <Redirect to="/search" />
      </Switch>
      <Footer />
    </Router>
  );
}
