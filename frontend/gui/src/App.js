import React, { Component } from "react";
import { BrowserRouter as Route } from "react-router-dom";
import "antd/dist/antd.css";
import MyMain from "./containers/Main.js";
import BaseRoute from "./routes";
import { connect } from "react-redux";
import * as actions from "./store/actions/auth";

class App extends Component {
  state = {};
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    return (
      <div className="App">
        <Route>
          <MyMain {...this.props}>
            <BaseRoute />
          </MyMain>
        </Route>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("token:");
  console.log(state.token !== null);
  return {
    isAuthenticated: state.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
