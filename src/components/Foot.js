import styles from './Foot.less';
import React from 'react';


class Foot extends React.Component {

  clickTop = () => {
    window.scrollTo(0, 0);
  }

  over = (el) => {
    this[el].style.display = 'block';
  }

  out = (el) => {
    this[el].style.display = 'none';
  }

  render() {
    return (
      <div>
        <div className={styles.foot}>
          Copyright © 2017 丨 广州启尔智信息科技有限公司 丨 粤ICP备17064736号-1
        </div>
        <div>
          <div className={styles.fixed}>
            <div className={styles.top} onClick={this.clickTop} />
            <div
              className={styles.call} onMouseOver={this.over.bind(this, 'callShow')}
              onMouseOut={this.out.bind(this, 'callShow')}
            />
            <div
              className={styles.wx} onMouseOver={this.over.bind(this, 'wxShow')}
              onMouseOut={this.out.bind(this, 'wxShow')}
            />
          </div>
          <img
            src={require('../assets/callShow.png')} className={styles.callShow} ref={(el) => {
              this.callShow = el;
            }} alt=""
          />
          <img
            src={require('../assets/wxShow.png')} className={styles.wxShow} ref={(el) => {
              this.wxShow = el;
            }} alt=""
          />
        </div>
      </div>
    );
  }
}

export default Foot;
