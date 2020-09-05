import React, { Component } from "react";
import MyTable from "./table";
import EditPerson from "./EditPerson";
import { Descriptions, Divider, Card, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

class DetailView extends Component {
  state = { data: {} };

  sexdetail = (sex) => {
    let sexstring = "";
    if (sex == "M") {
      sexstring = "Male";
    } else if (sex == "F") {
      sexstring = "Female";
    }
    return sexstring;
  };

  render() {
    return (
      <Card>
        <Avatar size={127} icon={<img src={this.props.data.picture} />} />

        <Divider>Person Info</Divider>
        <Descriptions>
          <Descriptions.Item label="Nom">
            {this.props.data.familyName}
          </Descriptions.Item>
          <Descriptions.Item label="Prenom">
            {this.props.data.firstName}
          </Descriptions.Item>
          <Descriptions.Item label="Age">
            {this.props.data.age}
          </Descriptions.Item>
          <Descriptions.Item label="sex">
            {this.sexdetail(this.props.data.gender)}
          </Descriptions.Item>
          <Descriptions.Item label="Address">
            {this.props.data.address}
          </Descriptions.Item>
          <Descriptions.Item label="Remark">
            {this.props.data.remark}
          </Descriptions.Item>
          <Descriptions.Item>
            <EditPerson
              reloadData={this.props.reloadData}
              personId={this.props.data.id}
            ></EditPerson>
          </Descriptions.Item>
        </Descriptions>
        <br />
        <br />
        <br />
        <Divider> Persons with similar face descriptors</Divider>
        <MyTable link="http://127.0.0.1:8000/api/persons/" />
      </Card>
    );
  }
}

export default DetailView;
