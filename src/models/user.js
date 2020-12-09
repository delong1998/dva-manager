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
      const response = yield call(queryUsers, payload);
      yield put({
        type: 'show',
        payload: response,
      });
    },
    // *add({ payload }, { call, put }) {
    //   const response = yield call(addBooks, payload);
    //   yield put({
    //     type: 'appendList',
    //     payload: response,
    //   });
    // },
    // *remove({ payload }, { call, put }) {
    //   const response = yield call(removeBooks, payload);
    //   yield put({
    //     type: 'removeList',
    //     payload: payload,
    //   });
    // },
    // *update({ payload, callback }, { call, put }) {
    //   const response = yield call(updateBooks, payload);
    //   yield put({
    //     type: 'save',
    //     payload: response,
    //   });
    //   if (callback) callback();
    // },
  },
  reducers: {
    save(state, action) {
      return { ...state, data: action.payload };
    },
    show(state, { payload }) {
      state.data = payload.data;
      return { ...state }
    },
    appendList(state, action) {
      // state.data.list = state.data.list.unshift(action.payload);
      // state.data.pagination.total += 1;
      const length = state.data.list.unshift(action.payload.data);
      if (length > state.data.pagination.pageSize) {
        state.data.list.pop();
      }
      state.data.pagination.total += 1;
      const newState = { ...state };
      return newState;
    },
    removeList(state, action) {
      for (let i = 0; i < state.data.list.length; i++) {
        if (state.data.list[i].id === action.payload.id) {
          state.data.list.splice(i, 1);
          state.data.pagination.total -= 1;
        }
      }
      const newState = { ...state };
      return newState;
    },
  },
};