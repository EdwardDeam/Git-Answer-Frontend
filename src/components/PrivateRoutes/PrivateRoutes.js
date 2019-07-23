import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import EditPost from "../EditPost/Editpost";

class PrivateRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route
          path="/auth/edit-post/:id"
          render={props => {
            return <EditPost {...props} currentUser={this.props.currentUser} />;
          }}
        />
      </Switch>
    );
  }
}

export default PrivateRoutes;
