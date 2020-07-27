import React, { Component } from "react";
import { BrowserRouter as Route } from "react-router-dom";
import "antd/dist/antd.css";
import MyMain from "./containers/Main.js";
import BaseRoute from "./routes";
class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Route>
          <MyMain>
            <BaseRoute />
          </MyMain>
        </Route>
      </div>
    );
  }
}

export default App;
