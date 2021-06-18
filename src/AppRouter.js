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
import Prueba from "./views/Pruebas/Prueba";
import Register from "./views/Register/Register";
import Search from "./views/Search/Search";
import PrivateRoute from "./PrivateRoute";
import { useAuth } from "./context/authContext";
import { userInfo } from "./services/users";
import Loader from "react-loader-spinner";

export default function AppRouter() {
  const { state, dispatch } = useAuth();

  useEffect(() => {
    if (state && state.token) {
      userInfo(state.token).then((result) => {
        if (result.ok) {
          dispatch({ type: "userInfo", payload: result.user });
        } else {
          dispatch({ type: "notLoading" });
        }
      });
    } else {
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
          <Route exact path="/home" component={() => <Home />} />
          <Route exact path="/search" component={() => <Search />} />
          <Route exact path="/search/:id" component={Detail} />
          <Route exact path="/prueba" component={() => <Prueba />} />
          {/*   <Route exact path="/publish" component={NewPost} /> */}
          <PrivateRoute
            path="/applications"
            component={Applications}
            type={state.type ? state.type : ""}
            redirectTo="/home"
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
          <Redirect to="/home" />
        </Switch>
      ) : (
        <div style={{ margin: "auto" }}>
          <Loader
            type="Circles"
            color="#795933"
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
