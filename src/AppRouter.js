import React from "react";
import { useEffect } from "react";
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
import PrivateRoute from "./PrivateRoute";
import { useAuth } from "./context/authContext";
import { userInfo } from "./services/users";
import Loader from "react-loader-spinner";

export default function AppRouter() {
  const { state, dispatch } = useAuth();

  useEffect(() => {
    console.log(state.token);
    if (state && state.token) {
      userInfo(state.token).then((result) => {
        if (result.ok) {
          dispatch({ type: "userInfo", payload: result.user });
        }
      });
    } else {
      console.log("holi");
      dispatch({ type: "notLoading" });
    }
  }, []);

  return (
    <Router>
      <Header />
      {state && !state.isLoading ? (
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/search" component={Home} />
          <Route exact path="/search/:id" component={Detail} />
          {/*   <Route exact path="/publish" component={NewPost} /> */}
          <PrivateRoute
            path="/applications"
            component={Applications}
            type={state.type ? state.type : ""}
            redirectTo="/search"
            isLoggedIn={state.isLoggedIn}
            mustBeAdmin={true}
          />
          <PrivateRoute
            path="/publish"
            component={NewPost}
            type={state.type ? state.type : ""}
            redirectTo="/login"
            isLoggedIn={state.isLoggedIn}
            mustBeAdmin={false}
          />
          <Redirect to="/search" />
        </Switch>
      ) : (
        <div style={{ margin: "auto" }}>
          <Loader
            type="Circles"
            color="#313B72"
            height={150}
            width={150}
            visible={true}
          />
        </div>
      )}
      <Footer />
    </Router>
  );
}
