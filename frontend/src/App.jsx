import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Profile from "./main/profile/Profile";
import Todo from "./todos/Todo";
import { CustomLoader, PrivateRoute, NavBar } from "./component/";

import { useAuth0 } from "./auth/Auth0";
import history from "./utils/history";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <CustomLoader />;
  }
  return (
    <div className="App">
      <Router history={history}>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            Hello World
          </Route>
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/todos" component={Todo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
