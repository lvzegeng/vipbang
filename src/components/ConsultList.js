import React from 'react';
import styles from './ConsultList.less';
import { connect } from 'dva';
import { Link } from 'dva/router';
import moment from 'moment';


class ConsultList extends React.Component {

  render() {
    return (
      <div style={{ flex: 1, overflow: 'hidden' }}>
        {
          this.props.treads.treads &&
          this.props.treads.treads.data &&
          this.props.treads.treads.data.map((item, index) => {
            return (
              <Consult data={item} key={index} category={this.props.match.params.category || 'CompanyNews'} />
            );
          })
        }
      </div>

    );
  }
}

const Consult = (props) => {
  return (
    <Link
      to={`/treadsContent/${props.data.consultId}?category=${props.category}`} className={styles.container}
      key={props.index}
    >

      <img src={props.data.thumbnail} alt="" className={styles.img} />

      <div className={styles.text}>
        <div className={styles.head}>
          {props.data.head}
        </div>
        <div className={styles.content}>
          {props.data.text ? String(props.data.text) : ''}
        </div>
        <div className={styles.last}>
          <div className={styles.publishTime}>
            发布时间：{moment(props.data.publishTime).format('YY-MM-DD')}
          </div>
          <div className={styles.category}>
            资讯来源：{props.data.from}
          </div>
          <div className={styles.category}>
            {props.data.category}
          </div>
        </div>
      </div>

    </Link>
  );
};

export default connect(({ treads }) => ({ treads }))(ConsultList);
