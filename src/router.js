import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import Login from './routes/Login'
import User from './routes/user/user'
import Books from './routes/books/books'
import { isLogined, clearToken } from './utils/auth'
import { logout } from './services/login'

import { Layout, Menu } from 'antd';
import {
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
    pathname: ''
  };

  switch(window.location.pathname){
    case '/': state.pathname = '看板'; break;
    case '/users': state.pathname = '用户管理'; break;
    case '/products': state.pathname = '产品'; break;
    case '/books': state.pathname = '图书管理'; break;
    default: state.pathname = '看板';
  }

  var toggle = () => {
    state.collapsed = !state.collapsed;
  };

  var handleSelect = (item) => {
    document.getElementById('title').innerHTML = item.key;
  }

  var loginOut = () => {
    logout();
    clearToken();
    window.location.reload();
  }

  console.log(window.location.pathname);

  if (!isLogined()) {
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
  } else {
    setTimeout(() => {
      clearToken();
    }, 20 * 60 * 1000);
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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[state.pathname]} onSelect={handleSelect}>
          <Menu.Item key="看板" icon={<UserOutlined />} onClick={() => { history.push('/') }}>
            看板
          </Menu.Item>
          <Menu.Item key="读者管理" icon={<UserOutlined />} onClick={() => { history.push('/users') }}>
            读者管理
          </Menu.Item>
          {/* <Menu.Item key="产品" icon={<VideoCameraOutlined />} onClick={() => { history.push('/products') }}>
            产品
            </Menu.Item> */}
          <Menu.Item key="图书管理" icon={<UserOutlined />} onClick={() => { history.push('/books') }}>
            图书管理
          </Menu.Item>
          {/* <Menu.Item key="菜单三" icon={<UploadOutlined />}>
            菜单三
            </Menu.Item> */}
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ backgroundColor: '#ccc' }}>
        <Header className="site-layout-background" style={{ padding: 0, backgroundColor: '#fff' }} >
          <span id='title' style={{ fontSize: 20, paddingLeft: 20 }}>{state.pathname}</span>
          <a style={{ float: "right", marginLeft: 20, marginRight: 20 }} onClick={loginOut}>退出登录</a>
          <span style={{ float: "right" }}>Admin</span>
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
                <Route path="/users" exact component={User} />
                <Route path="/books" exact component={Books} />
              </Switch>
            </Router>
          </div>
        </Content>
      </Layout>
    </Layout>
  );

}

export default RouterConfig;
