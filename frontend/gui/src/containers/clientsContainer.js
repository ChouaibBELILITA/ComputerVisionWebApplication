import React, { Component } from "react";
import { List, Descriptions, Divider } from "antd";
import AddPerson from "../components/addPerson";

import axios from "axios";
import { NavLink } from "react-router-dom";

class ClientContainer extends Component {
  state = { data: [] };
  componentDidMount() {
    let link = "http://127.0.0.1:8000/api/persons/";
    axios.get(link).then((res) => {
      this.setState({ data: res.data });
    });
  }
  reloadData = () => {
    let link = "http://127.0.0.1:8000/api/persons/";
    axios.get(link).then((res) => {
      this.setState({ data: res.data });
    });
  };
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <br />
          <AddPerson reloadData={this.reloadData}></AddPerson>
        </div>
        <div className="card-body">
          {" "}
          <List
            itemLayout="vertical"
            size="medium"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 7,
            }}
            dataSource={this.state.data}
            renderItem={(item) => (
              <List.Item
                key={item.id}
                extra={<img width={158} alt="logo" src={item.picture} />}
              >
                <NavLink to={"/details/" + item.id}>
                  <Descriptions title={item.familyName + " " + item.firstName}>
                    <Descriptions.Item label="Prenom">
                      {item.firstName}
                    </Descriptions.Item>
                    <Descriptions.Item label="Nom">
                      {item.familyName}
                    </Descriptions.Item>
                    <Descriptions.Item label="Age">
                      {item.age}
                    </Descriptions.Item>
                    <Descriptions.Item label="address">
                      {item.address}
                    </Descriptions.Item>
                  </Descriptions>
                </NavLink>

              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}
export default ClientContainer;
