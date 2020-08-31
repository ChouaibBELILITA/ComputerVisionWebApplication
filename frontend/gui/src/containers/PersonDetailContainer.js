import React, { Component } from "react";
import { Menu, Card, Avatar } from "antd";
import DetailView from "../components/PersonDetails";
import Charts from "../components/personStatistic";
import axios from "axios";
import {
  IdcardOutlined,
  AreaChartOutlined,
  VideoCameraOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const tabList = [
  {
    key: "mail",
    tab: "Details",
  },
  {
    key: "app",
    tab: "Videos",
  },
];

class Details extends Component {
  state = {
    data: {},
    current: "tab1",
  };

  content = (tab) => {
    if (tab == "tab1") {
      return <DetailView data={this.state.data} />;
    }
    if (tab == "tab2") {
      return <Charts id={this.state.data.id}></Charts>;
    }
    if (tab == "tab3") {
      return "content 3";
    }
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };
  componentDidMount() {
    const PersonId = this.props.match.params.personId;

    let link = "http://127.0.0.1:8000/api/persons/" + PersonId;

    axios.get(link).then((res) => {
      this.setState({ data: res.data });
    });
  }
  render() {
    const { current } = this.state;
    return (
      <Card style={{ width: "100%" }}>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[current]}
          mode="horizontal"
        >
          <Menu.Item key="tab1" icon={<IdcardOutlined />}>
            Infos
          </Menu.Item>
          <Menu.Item key="tab2" icon={<AreaChartOutlined />}>
            Statistics
          </Menu.Item>
          <Menu.Item key="tab3" icon={<VideoCameraOutlined />}>
            Videos
          </Menu.Item>
        </Menu>
        {this.content(this.state.current)}
      </Card>
    );
  }
}

export default Details;
