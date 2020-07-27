import React, { Component } from "react";
import MyTable from "./table";
import { Descriptions, Divider, Card, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

class DetailView extends Component {
  state = {};

  render() {
    return (
      <Card>
        <Avatar size={64} icon={<UserOutlined />} />
        <p>user Name</p>
        <Divider>Person Info</Divider>
        <Descriptions>
          <Descriptions.Item label="Name">
            {this.props.data.name}
          </Descriptions.Item>
          <Descriptions.Item label="Age">
            {this.props.data.age}
          </Descriptions.Item>
          <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
          <Descriptions.Item label="Remark">empty</Descriptions.Item>
          <Descriptions.Item label="Address">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
        </Descriptions>
        <br />
        <br />
        <br />
        <Divider>Related Persons</Divider>
        <MyTable link="http://127.0.0.1:8000/api/" />
      </Card>
    );
  }
}

export default DetailView;
