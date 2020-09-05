import React, { Component } from "react";
import { Menu, Card, Empty } from "antd";
import DetailView from "../components/PersonDetails";
import Charts from "../components/personStatistic";
import axios from "axios";
import PersonVideoContainer from "./personVideosContainer";
import {
  IdcardOutlined,
  AreaChartOutlined,
  VideoCameraOutlined,
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
    if (this.state.data.id == null) {
      if (tab == "tab1") {
        return <Empty />;
      }
      if (tab == "tab2") {
        return <Empty />;
      }
      if (tab == "tab3") {
        return <Empty />;
      }
    } else {
      if (tab == "tab1") {
        return (
          <DetailView reloadData={this.reloadData} data={this.state.data} />
        );
      }
      if (tab == "tab2") {
        return <Charts id={this.state.data.id}></Charts>;
      }
      if (tab == "tab3") {
        return (
          <PersonVideoContainer
            personId={this.state.data.id}
          ></PersonVideoContainer>
        );
      }
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
  reloadData = () => {
    const PersonId = this.props.match.params.personId;

    let link = "http://127.0.0.1:8000/api/persons/" + PersonId;

    axios.get(link).then((res) => {
      this.setState({ data: res.data });
    });
  };

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
