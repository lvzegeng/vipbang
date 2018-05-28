import React from 'react';
import { connect } from 'dva';
import { Carousel } from 'antd';
import { Link, NavLink, Route } from 'dva/router';
import styles from './Tread.less';
import ConsultList from '../components/ConsultList';
import { Pagination } from 'antd';

class Treads extends React.Component {

  changePage = (page) => {
    const { pathname } = this.props.location;
    this.props.dispatch({ type: 'treads/fetch', payload: { page, pathname } });
  }

  render() {
    const { match } = this.props;
    const { treads } = this.props.treads;
    return (
      <div>
        <div className={styles.wrapper}>
          <img src={require('../assets/banner1.jpg')} alt="" />
        </div>
        {/* <Carousel autoplay dots={false} className={styles.carousel}>
          <div className={styles.wrapper}>
            <img src={require('../assets/banner1.jpg')} alt="" />
          </div>
          <div className={styles.wrapper}>
            <img src={require('../assets/banner2.jpg')} alt="" />
          </div>
        </Carousel>*/}

        <div className={styles.content}>
          <div className={styles.link}>
            <NavLink to={`${match.url}`} activeClassName={styles.active} exact>
              <img src={require('../assets/CompanyNews.png')} alt="" />公司动态
            </NavLink>
            <NavLink to={`${match.url}/newsCoverage`} activeClassName={styles.active}>
              <img src={require('../assets/NewsCoverage.png')} alt="" />新闻媒体报道
            </NavLink>
            <NavLink to={`${match.url}/industryAnalysis`} activeClassName={styles.active}>
              <img src={require('../assets/IndustryAnalysis.png')} alt="" />行业分析报告
            </NavLink>
            <NavLink to={`${match.url}/preciseMarketing`} activeClassName={styles.active}>
              <img src={require('../assets/PreciseMarketing.png')} alt="" />精准营销智库
            </NavLink>
            <NavLink to={`${match.url}/productUpgrade`} activeClassName={styles.active}>
              <img src={require('../assets/ProductUpgrade.png')} alt="" />产品升级公告
            </NavLink>
          </div>

          <Route exact path={match.url} component={ConsultList} />
          <Route path={`${match.url}/:category`} component={ConsultList} />
        </div>

        {
          treads &&
          treads.total &&
          <Pagination
            showQuickJumper current={treads ? Number(treads.currentPage) : 1}
            total={treads ? Number(treads.total) : 1} className={styles.pagination}
            onChange={this.changePage}
          />
        }

      </div>

    );
  }
}

export default connect(({ treads }) => ({ treads }))(Treads);
