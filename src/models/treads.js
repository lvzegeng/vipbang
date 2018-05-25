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
        if (location.pathname === '/Treads' || location.pathname === '/Treads/NewsCoverage' || location.pathname === '/Treads/IndustryAnalysis' || location.pathname === '/Treads/PreciseMarketing' || location.pathname === '/Treads/ProductUpgrade') {
          dispatch({ type: 'fetch', payload: { page: 1, pathname: location.pathname } });
        } else if (location.pathname.startsWith('/TreadsContent')) {
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
      if (pathname === '/Treads') {
        data = yield call(query, page || 1);
      } else if (pathname === '/Treads/NewsCoverage') {
        data = yield call(query, page || 1, 'category=新闻媒体报道');
      } else if (pathname === '/Treads/IndustryAnalysis') {
        data = yield call(query, page || 1, 'category=行业分析报告');
      } else if (pathname === '/Treads/PreciseMarketing') {
        data = yield call(query, page || 1, 'category=精准营销智库');
      } else if (pathname === '/Treads/ProductUpgrade') {
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
