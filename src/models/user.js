import { login } from '../services/login'
import { queryUsers } from '../services/user'


export default {
  namespace: 'users',
  state: {
    data: {
      list: [],
      pagination: {},
    },
  },
  effects: {

    *fetch({ payload }, { call, put }) {
      const response = yield call(login, payload);
      yield put({
        type: 'show',
        payload: response,
      });
    }
  },
  reducers: {
    show(state, { payload }) {
      debugger;
      state.data = payload.data;
      return { ...state }
    },
  },
};