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
import Search from "./views/Search/Search";
import ZoomImage from "./views/ZoomImage/ZoomImage";

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/login" component={() => <Login />} />
        <Route exact path="/register" component={() => <Register />} />      
        <Route exact path="/home" component={() => <Home />} />
        <Route exact path="/search/:id" component={() => <Detail />} />
        <Route exact path="/publish" component={() => <NewPost />} />
        <Route exact path="/applications" component={() => <Applications />} />
        <Route exact path="/search" component={() => <Search />} />
        <Route exact path="/zoomimg" component={() => <ZoomImage />} />
        
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </Router>
  );
}
