import { query, getTreads, getHot } from '../services/treads';
import queryString from 'query-string';

export default {

  namespace: 'treads',

  state: {
    treads: {},
    treadsContent: {},
    hotTreads: [],
  },

  subscriptions: {
    setup({dispatch, history}) {  // eslint-disable-line
      history.listen((location) => {
        if (location.pathname === '/treads' || location.pathname === '/treads/newsCoverage' || location.pathname === '/treads/industryAnalysis' || location.pathname === '/treads/preciseMarketing' || location.pathname === '/treads/productUpgrade') {
          dispatch({ type: 'fetch', payload: { page: 1, pathname: location.pathname } });
        } else if (location.pathname.startsWith('/treadsContent')) {
          const consultId = parseFloat(location.pathname.slice(15));
          const category = queryString.parse(location.search).category;
          dispatch({ type: 'getTreads', payload: { consultId, category } });
        }
      });
    },
  },

  effects: {
    * fetch({payload}, {call, put}) {  // eslint-disable-line
      const { pathname, page } = payload;
      let data;
      if (pathname === '/treads') {
        data = yield call(query, page || 1);
      } else if (pathname === '/treads/newsCoverage') {
        data = yield call(query, page || 1, 'category=新闻媒体报道');
      } else if (pathname === '/treads/industryAnalysis') {
        data = yield call(query, page || 1, 'category=行业分析报告');
      } else if (pathname === '/treads/preciseMarketing') {
        data = yield call(query, page || 1, 'category=精准营销智库');
      } else if (pathname === '/treads/productUpgrade') {
        data = yield call(query, page || 1, 'category=产品升级公告');
      }
      yield put({ type: 'save', payload: { treads: data.data } });
    },

    * getTreads({ payload }, { call, put, select }) {
      const treadsContent = yield call(getTreads, payload.consultId, payload.category);
      let hotTreads = yield select(state => state.treads.hotTreads);
      if (!hotTreads.length) {
        hotTreads = yield call(getHot);
        yield put({ type: 'save', payload: { hotTreads: hotTreads.data } });
      }
      yield put({ type: 'save', payload: { treadsContent: treadsContent.data } });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
