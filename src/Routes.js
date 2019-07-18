import React from "react";
import { Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import Landing from "./components/layout/Landing";

class Routes extends React.Component {
  render() {
    return (
      // <header className="topnav">
      //   <h3>GitAnswer</h3>
      //   <div className="topnav-links">
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/profile" component={Profile} />
      </Switch>
      //   </div>
      // </header>
    );
  }
}

export default Routes;
