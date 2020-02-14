import * as React from 'react';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;

import Long from '../../components/Long'

import './style/index.less'
import { Link, Route } from 'react-router-dom';
import Article from '../Article'
import Dashboard from '../Dashboard';

function Home() {
  return (
    <Layout style={{ height: '100vh' }}>

      <Sider width={200} style={{
        background: '#fff',
        position: 'relative',
        boxShadow: '2px 0 6px rgba(0,21,41,.1)'
      }}>
        <div className="menu-header" >
          <img src={require('../../assets/svgs/草莓.svg').default} draggable={false} />
          <div className="menu-title">唯二主義</div>
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['控制台']}
          defaultOpenKeys={['控制台']}
          style={{ borderRight: 0 }}
        >
          <Menu.Item key="控制台" >
            <Link to="/">
              <Icon type="appstore" />
              控制台
          </Link>
          </Menu.Item>
          <Menu.Item key="文章" >
            <Link to="/article">
              <Icon type="appstore" />
              写文章
            </Link>
          </Menu.Item>
          <Menu.Item key="碎碎念" >
            <Link to="/say">
              <Icon type="appstore" />
              碎碎念
            </Link>
          </Menu.Item>
          <Menu.Item key="已发列表" >
            <Link to="/say">
              <Icon type="appstore" />
              已发列表
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        {/* <Header className="header" style={{
          background: 'white',
          boxShadow: '0 1px 4px rgba(0,21,41,.2)',
        }}>
          <div className="logo" />
        </Header> */}
        <Layout style={{ padding: '24px 24px 24px 24px' }}>

          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
              overflow: 'auto'
            }}
          >

            <Breadcrumb style={{ margin: '0 0 16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Route path="/" exact component={Dashboard} />
            <Route path="/article" exact component={Article} />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Home