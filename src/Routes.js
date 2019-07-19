import React from "react";
import { Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import Landing from "./components/layout/Landing";
import Login from "./components/Login/Login";

class Routes extends React.Component {
  render() {
    console.log(this.props);
    return (
      // <header className="topnav">
      //   <h3>GitAnswer</h3>
      //   <div className="topnav-links">
      <div>
        <Switch>
          <Route path="/" exact component={Landing} />
          {this.props.loggedIn && <Route path="/profile" component={Profile} />}
          <Route path="/login" render={props => <Login {...props} />} />
        </Switch>
      </div>
      // </header>
    );
  }
}

export default Routes;
