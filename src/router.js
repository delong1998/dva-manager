import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import Login from './routes/Login'
import { isLogined } from './utils/auth'

import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;

function RouterConfig({ history }) {

  var state = {
    collapsed: false,
    selectedKey: '',
  };

  var toggle = () => {
    state.collapsed = !state.collapsed;
  };

  var handleSelect = (item) => {
    document.getElementById('title').innerHTML = item.key;
  }
  if(!isLogined()) {
    history.push('/login');
    return (
      <div>
            <Router history={history}>
              <Switch>
                <Route path="/login" exact component={Login} />
              </Switch>
            </Router>
      </div>
    )
  }
  return (
    <Layout style={{ minHeight: 768, minWidth: 1024 }}>
      <Sider trigger={null} collapsible collapsed={state.collapsed}>
        <div className="logo" style={{
          height: 32,
          margin: 16,
          fontSize: 20,
          color: '#ccc',
          marginBottom: 50,
        }}>
          后台管理系统
          </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['菜单一']} onSelect={handleSelect}>
          <Menu.Item key="菜单一" icon={<UserOutlined />}>
            菜单一
            </Menu.Item>
          <Menu.Item key="菜单二" icon={<VideoCameraOutlined />}>
            菜单二
            </Menu.Item>
          <Menu.Item key="菜单三" icon={<UploadOutlined />}>
            菜单三
            </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ backgroundColor: '#ccc' }}>
        <Header className="site-layout-background" style={{ padding: 0, backgroundColor: '#fff' }} >
            <span id='title' style={{fontSize:20,paddingLeft:20}}>菜单一</span>
            <span style={{float:"right",marginLeft:20,marginRight:20}}>退出登录</span>
            <span style={{float:"right"}}>Admin</span>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            backgroundColor: '#fff',
          }}
        >
          <div>
            <Router history={history}>
              <Switch>
                <Route path="/" exact component={IndexPage} />
                <Route path="/products" exact component={Products} />
              </Switch>
            </Router>
          </div>
          </Content>
      </Layout>
    </Layout>
  );
  
}

export default RouterConfig;
