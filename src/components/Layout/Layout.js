import React from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  LoadingOutlined,
  GlobalOutlined,
} from '@ant-design/icons';
import './layout.css'
import { Link } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

export default class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };


  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<LoadingOutlined />}>
              <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
                <Link to='/users'>Users</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<GlobalOutlined />}>
            <Link to='/about'>about</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
           {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}