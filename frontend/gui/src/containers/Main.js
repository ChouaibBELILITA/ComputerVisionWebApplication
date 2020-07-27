import React, { Component } from "react";

import { Input, Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  SettingOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;
class MyMain extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo"></div>

          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<DesktopOutlined />}>
              <NavLink to="/">Home</NavLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<PieChartOutlined />}>
              <NavLink to="/statistics/">Statistic</NavLink>
            </Menu.Item>
            <Menu.Item key="3" icon={<FileSearchOutlined />}>
              <NavLink to="/details/">Details</NavLink>
            </Menu.Item>
            <Menu.Item key="4" icon={<SettingOutlined />}>
              <NavLink to="/configuration/">Config</NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            {/*           <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
    </Breadcrumb>*/}
            <div>{this.props.children}</div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
export default MyMain;
