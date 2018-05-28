import React from 'react';
import styles from './Solute.less';

class Solute extends React.Component {

  render() {
    return (
      <div>
        <img src={require('../assets/solute1.jpg')} style={{ width: '100%', minWidth: '800px' }} alt="" />
        <img src={require('../assets/solute2.jpg')} style={{ width: '100%', minWidth: '800px' }} alt="" />
        <div className={styles.afterSale}>
          <div className={styles.title}>—— <span>售后服务</span> ——</div>

          <div className={styles.section}>
            <div className={styles.section1}>
              <img src={require('../assets/home/service1.png')} alt="" />
              <div>会员营销</div>
              <div>培训服务</div>
            </div>
            <div className={styles.section1}>
              <img src={require('../assets/home/service2.png')} alt="" />
              <div>24小时</div>
              <div>微信服务群</div>
            </div>
            <div className={styles.section1}>
              <img src={require('../assets/home/service3.png')} alt="" />
              <div>每月会员</div>
              <div>运营分析报告</div>
            </div>
            <div className={styles.section1}>
              <img src={require('../assets/home/service4.png')} alt="" />
              <div>每年会员</div>
              <div>健康度体检报告</div>
            </div>
            <div className={styles.section1}>
              <img src={require('../assets/home/service5.png')} alt="" />
              <div>会员精准营销</div>
              <div>顾问咨询服务</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Solute;
