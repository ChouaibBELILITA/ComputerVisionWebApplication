import React, { Component } from "react";
import VideoSocket from "../components/videoSocket";
import "antd/dist/antd.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <VideoSocket></VideoSocket>
      </div>
    );
  }
}

export default Home;
