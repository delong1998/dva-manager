import { queryProducts } from '../services/products'


export default {
  namespace: 'products',
  state: {
    data: {
      list: [],
      pagination: {},
    },
  },
  effects: {
    *test({ payload }, { call, put }) {
      const response = yield call(queryProducts, payload);
      yield put({
        type: 'appendList',
        payload: response,
      });
    }
  },
  reducers: {
    appendList(state, { payload }) {
      debugger;
      state.data = payload.data;
      return {...state}
    },
  },
};