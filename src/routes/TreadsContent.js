import React from 'react';
import { connect } from 'dva';
import styles from './TreadsContent.less';
import moment from 'moment';
import { Link } from 'dva/router';
import queryString from 'query-string';
import { Helmet } from 'react-helmet';

class TreadsContent extends React.Component {

  componentDidMount() {
    if (this.props.treads.treadsContent.data) {
      this.body.innerHTML = this.props.treads.treadsContent.data.body;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.treads.treadsContent !== prevProps.treads.treadsContent) {
      if (this.props.treads.treadsContent.data) {
        this.body.innerHTML = this.props.treads.treadsContent.data.body;
      }
    }
  }

  render() {
    const { hotTreads, treadsContent } = this.props.treads;
    return (
      <div className={styles.all}>

        <Helmet>
          <meta name="Keywords" content={treadsContent.data ? treadsContent.data.keyword : ''} />
        </Helmet>

        <div className={styles.treads}>
          <div className={styles.head}>
            {
              treadsContent.data &&
              treadsContent.data.head
            }
          </div>
          <span className={styles.publishTime}>
            发布时间：{
            treadsContent.data &&
            moment(treadsContent.data.publishTime).format('YYYY-MM-DD')
          }
          </span>
          <span className={styles.category}>
            资讯来源：{
            treadsContent.data &&
            treadsContent.data.from
          }
          </span>
          <span className={styles.category}>
            {
              treadsContent.data &&
              treadsContent.data.category
            }
          </span>

          <hr />

          <div
            className={styles.body} ref={(el) => {
              this.body = el;
            }}
          />
          {
            treadsContent.next &&
            treadsContent.next.consultId &&
            <div className={styles.next}>
              <span>下一篇：</span>
              <Link
                to={`/TreadsContent/${treadsContent.next.consultId}?category=${queryString.parse(this.props.location.search).category}`}
              >
                {treadsContent.next.head}
              </Link>
            </div>
          }

        </div>
        <div className={styles.hot}>
          <span className={styles.hotTit}>热门文章</span>
          {
            hotTreads && hotTreads.map((item, index) => (
              <Hot data={item} key={index} />
            ))
          }
        </div>
      </div>
    );
  }
}

const Hot = props => (
  <Link to={`/TreadsContent/${props.data.consultId}`} key={props.index} className={styles.list}>
    <img src={props.data.thumbnail} alt="" />
    <div>
      <div className={styles.head}>{props.data.head.slice(0, 25)}</div>
      <div className={styles.publishTime}>
        发布时间：{moment(props.data.publishTime).format('YYYY-MM-DD')}
      </div>
    </div>
  </Link>
);


export default connect(({ treads }) => ({ treads }))(TreadsContent);
