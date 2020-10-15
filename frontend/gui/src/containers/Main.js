import React, { Component } from "react";
import { connect } from "react-redux";
import { Input, Layout, Menu, Breadcrumb } from "antd";

import * as actions from "../store/actions/auth";
import { NavLink, withRouter } from "react-router-dom";
import {
  LogoutOutlined,
  LoginOutlined,
  DesktopOutlined,
  PieChartOutlined,
  SettingOutlined,
  FileSearchOutlined,
  PlayCircleOutlined,
  IdcardOutlined,
} from "@ant-design/icons";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
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
            <SubMenu key="1" icon={<DesktopOutlined />} title="Home">
              <Menu.Item key="8">
                <NavLink to="/home/1/">
                  <img
                    className="img-fluid"
                    width="30%"
                    height="50%"
                    src="./images/one.png"
                  ></img>
                  <span></span>
                  camera 1
                </NavLink>
              </Menu.Item>
              <Menu.Item key="9">
                <NavLink to="/home/2/">
                  <img
                    className="img-fluid"
                    width="30%"
                    height="50%"
                    src="./images/one.png"
                  ></img>
                  <span></span>
                  camera 2
                </NavLink>
              </Menu.Item>
              <Menu.Item key="10">
                <NavLink to="/home/3/">
                  <img
                    className="img-fluid"
                    width="30%"
                    height="50%"
                    src="./images/one.png"
                  ></img>
                  <span></span>
                  camera 3
                </NavLink>
              </Menu.Item>
              <Menu.Item key="11">
                <NavLink to="/home/4/">
                  <img
                    className="img-fluid"
                    width="30%"
                    height="50%"
                    src="./images/one.png"
                  ></img>
                  <span></span>
                  camera 4
                </NavLink>
                <div></div>
              </Menu.Item>
            </SubMenu>

            <Menu.Item key="2" icon={<PieChartOutlined />}>
              <NavLink to="/statistics/">Statistic</NavLink>
            </Menu.Item>
            <Menu.Item key="3" icon={<PlayCircleOutlined />}>
              <NavLink to="/videos/">Videos</NavLink>
            </Menu.Item>
            <Menu.Item key="4" icon={<IdcardOutlined />}>
              <NavLink to="/detections/">Detections</NavLink>
            </Menu.Item>
            <Menu.Item key="5" icon={<FileSearchOutlined />}>
              <NavLink to="/details/">Clients</NavLink>
            </Menu.Item>
            <Menu.Item key="6" icon={<SettingOutlined />}>
              <NavLink to="/configuration/">Config</NavLink>
            </Menu.Item>
            {!this.props.isAuthenticated ? (
              <Menu.Item key="7" icon={<LoginOutlined />}>
                <NavLink to="/Login/">Login</NavLink>
              </Menu.Item>
            ) : (
              <Menu.Item
                key="7"
                icon={<LogoutOutlined />}
                onClick={this.props.logout}
              >
                logout
              </Menu.Item>
            )}
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
          <Footer style={{ textAlign: "center" }}>IGAF</Footer>
        </Layout>
      </Layout>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};
export default withRouter(connect(null, mapDispatchToProps)(MyMain));
