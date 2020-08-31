import React, { Component } from "react";
import { Descriptions, Avatar } from "antd";

import { UserOutlined } from "@ant-design/icons";

import "antd/dist/antd.css";

class PersonInfo extends Component {
  state = {};
  render() {
    return (
      <div className="card m-2">
        <div className="card-body d-flex justify-content-center">
          <Avatar
            className="mr-2"
            shape="square"
            size={48}
            icon={<img src= {this.props.person.picture}/>}
          />
          <div>
            <span>{this.props.person.firstName}</span>
            <br />
            <span>{this.props.person.familyName}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonInfo;
