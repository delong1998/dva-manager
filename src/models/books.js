import { queryBooks } from '../services/books'


export default {
  namespace: 'books',
  state: {
    data: {
      list: [],
      pagination: {},
    },
  },
  effects: {
    
    *fetch({ payload }, { call, put }) {
        const response = yield call(queryBooks, payload);
        yield put({
          type: 'show',
          payload: response,
        });
      }
  },
  reducers: {
    show(state, { payload }) {
      state.data = payload.data;
      return {...state}
    },
  },
};