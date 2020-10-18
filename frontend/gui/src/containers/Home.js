import React, { Component, useState } from "react";

import "antd/dist/antd.css";

import VideoSocket from "../components/videoSocket";
import MyTable from "../components/table";
class Home extends Component {
  state = { personinfo: {} };
  constructor(props) {
    super(props);

    let links = {
      1: "127.0.0.1:5678",
      2: "127.0.0.1:5679",
      3: "127.0.0.1:5680",
      4: "127.0.0.1:5681",
    };

    this.state = {
      links: links,
    };
  }
  componentDidMount() {}
  setData = (personinfo) => {
    this.setState({
      personinfo: personinfo,
    });
  };
  shouldComponentUpdate() {
    console.log("update home");

    return true;
  }
  render() {
    return (
      <div className=".container-fluid overflow-auto" width="100%">
        <div></div>
        <VideoSocket
          className=""
          width={(window.innerWidth * 75) / 100}
          height="400px"
          link={
            this.state.links[this.props.match.params.cameraId]
              ? this.state.links[this.props.match.params.cameraId]
              : "127.0.0.1:5678"
          }
          setdata={this.setData}
          key="1"
        ></VideoSocket>
        <MyTable></MyTable>
      </div>
    );
  }
}

export default Home;
