import React from "react";
import { Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import Landing from "./components/layout/Landing";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import PostDetail from "./components/PostDetail/PostDetail";
import Newpost from "./components/NewPost/NewPost";

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
          <Route
            path="/login"
            render={props => (
              <Login
                handleLogout={this.props.handleLogout}
                login={this.props.login}
                loggedIn={this.props.loggedIn}
                {...props}
              />
            )}
          />
          <Route path="/registration" component={Registration} />
          <Route path="/profile" component={Profile} />
          <Route path="/:id" component={PostDetail} />
          <Route path="/newpost" component={Newpost} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
