import { login, logout } from '../services/login'
import { message } from 'antd';
import { setToken } from '../utils/auth'

export default {
  namespace: 'login',
  state: {
    data: {
      list: [],
      pagination: {},
    },
  },
  effects: {

    *login({ payload }, { call, put }) {
      const response = yield call(login, payload);
      debugger;
      if (response && response.data === '200') {
        setToken({
          authories: 'true'
        });
        message.error('登录成功');
        window.location.href = '/';
      } else {
        message.error('用户名或密码错误!');
      }
      yield put({
        type: 'show',
        payload: response,
      });
    },
    *logout({ payload }, { call, put }) {
      const response = yield call(logout, payload);
      yield put({
        type: 'show',
        payload: response,
      });
    }
  },
  reducers: {
    show(state, { payload }) {
      //   state.data = payload.data;
      return { ...state }
    },
  },
};