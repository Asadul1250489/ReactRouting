import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Layout, Avatar, Menu, Icon, Breadcrumb, Switch } from "antd";

import { Typography } from "antd";
import Dashboard from "./Dashboard";
import User from "./User";
import Posts from "./Posts";
const { Title } = Typography;

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
class Admin extends React.Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    return (
      <Router>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Avatar style={{ float: "right" }} src="./admin.png"></Avatar>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
            <Title
              style={{ color: "green", float: "left", padding: 10 }}
              level={3}
            >
              ADMIN ASADUL
            </Title>
          </Header>

          <Layout>
            <Sider
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}
              style={{ background: "#fff" }}
            >
              <div className="logo" />
              <Menu
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
              >
                <Menu.Item>
                  <Icon type="clock-circle" />
                  <span>Dashboard</span>
                  <Link to="/dashboard"></Link>
                </Menu.Item>
                <Menu.Item>
                  <Icon type="user" />
                  <span>Users</span>
                  <Link to="/users"></Link>
                </Menu.Item>
                <Menu.Item>
                  <Icon type="usergroup-add" />
                  <span>Parent</span>
                  <Link to="/posts"></Link>
                </Menu.Item>
                <SubMenu
                  key="sub4"
                  title={
                    <span>
                      <Icon type="pie-chart" />
                      <span>Charts</span>
                    </span>
                  }
                >
                  <Menu.Item key="9">Echart</Menu.Item>
                  <Menu.Item key="10">HighChart</Menu.Item>
                  <Menu.Item key="11">RechChart</Menu.Item>
                  <Menu.Item key="12">FlowChart</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>

            <Layout>
              <Content style={{ padding: "0 100px" }}>
                <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>
                    <Icon type="clock-circle" />
                    <span>Dashboard</span>
                  </Breadcrumb.Item>
                </Breadcrumb>

                <div
                  style={{ background: "#fff", padding: 24, minHeight: 280 }}
                >
                  <Route path="/dashboard" exact component={Dashboard} />
                  <Route path="/users" component={User} />
                  <Route path="/posts" component={Posts} />
                </div>
              </Content>
              <Footer
                style={{ position: "sticky", bottom: "0", textAlign: "center" }}
              >
                Ant Design Dashboard created by Asadul
              </Footer>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default Admin;
