import React from 'react';
import styles from './About.less';
import VideoPlayer from '../components/VideoPlayer';

const videoJsOptions = {
  autoplay: false,
  controls: true,
  poster: require('../assets/poster1.png'),
  sources: [{
    src: 'http://wx.hy-bang.com/pt/file/启尔智视频2.mp4',
    type: 'video/mp4',
  }],
};

class About extends React.Component {

  componentDidMount() {
    const map = new BMap.Map('allmap', { enableMapClick: false });

    // map.centerAndZoom(point, 18);
    map.enableScrollWheelZoom();     // 开启鼠标滚轮缩放
    map.enableInertialDragging();

    const myIcon = new BMap.Icon(require('../assets/mapIcon.png'), new BMap.Size(45, 66));
    const p = new BMap.Point(113.3354, 23.012);
    const marker2 = new BMap.Marker(p, { icon: myIcon });  // 创建标注

    setTimeout(() => {
      map.addOverlay(marker2);              // 将标注添加到地图中
      map.centerAndZoom(p, 18);
    }, 500);
  }

  render() {
    return (
      <div>
        <img src={require('../assets/aboutBanner.png')} style={{ width: '100%', minWidth: '800px' }} alt="" />
        <div className={styles.about}>
          <div className={styles.left}>
            <VideoPlayer {...videoJsOptions} />
          </div>
          <div className={styles.right}>
            <img src={require('../assets/logo1.png')} alt="" />

            <p>启尔智（中国）由行业资深内控与战略管理专家周如祥老师创立，至今已在广州、北京、上海、青岛、武汉、江西等地拥有十余家子公司。公司秉承启发智慧、助力成长的使命，整合行业内外优势资源，为有梦想的人搭建创业平台，凝聚所有人的智慧，为母婴企业发展提供系统解决方案。
            </p>
          </div>
        </div>

        <div className={styles.intro}>
          <h2>公司简介</h2>
          <h4>
            广州启尔智信息科技有限公司隶属于启尔智（中国），公司聚焦母婴门店会员精准营销及忠诚度管理，致力于通过大数据分析、会员营销系统及专业的会员营销顾问咨询服务，帮助母婴零售门店挖掘会员需求、提高复购率和客单价，帮助母婴零售门店实现会员价值最大化。
          </h4>

          <div className={styles.section}>
            <div className={styles.section1}>
              <img src={require('../assets/about/intro1.png')} alt=""/>
              <div className={styles.text}>股东及管理层均为</div>
              <div className={styles.text}>母婴行业专家及业内精英，</div>
              <div className={styles.text}>深耕行业30年</div>
            </div>
            <div className={styles.section1}>
              <img src={require('../assets/about/intro2.png')} alt=""/>
              <div className={styles.text}>曾成功打造</div>
              <div className={styles.text}>全国知名母婴会员平台，</div>
              <div className={styles.text}>团队研发及创新能力一流</div>
            </div>
            <div className={styles.section1}>
              <img src={require('../assets/about/intro3.png')} alt=""/>
              <div className={styles.text}>专业、快乐、严谨、有梦想</div>
              <div className={styles.text}>、会创新，具有服务意识，</div>
              <div className={styles.text}>做最懂消费者的平台</div>
            </div>
            <div className={styles.section1}>
              <img src={require('../assets/about/intro4.png')} alt=""/>
              <div className={styles.text}>为做一个最能为母婴门店创</div>
              <div className={styles.text}>造会员价值的平台而努力！</div>
            </div>
          </div>

        </div>

        <div className={styles.team}>
          <h2>核心团队</h2>

          <div className={styles.section}>
            <img src={require('../assets/about/team1.png')} alt=""/>
            <div className={styles.section1}>
              <div className={styles.text1}>覃琴</div>
              <div className={styles.text2}>广州启尔智信息科技CEO</div>
              <div className={styles.text2}>广东省早期教育行业协会理事</div>
              <div className={styles.text2}>中山大学工商管理硕士</div>
              <div className={styles.text2}>国家中级育婴师</div>
              <div className={styles.text2}>曾游学法国里昂商学院</div>
              <div className={styles.text2}>从事婴童行业10年，曾任合生元集团高管，妈妈100创始团队成员之一，</div>
              <div className={styles.text2}>负责会员体系搭建及会员营销平台运营</div>
              <div className={styles.text2}>从事快消行业3年，曾担任康师傅饮品核心产品经理，</div>
              <div className={styles.text2}>负责华南区域的品牌推广及通路行销</div>
            </div>
          </div>

        </div>

        <img src={require('../assets/about.png')} style={{ width: '100%', minWidth: '800px' }} alt="" />

        <div id="allmap" className={styles.map} />
        <div className={styles.mapSub}>
          <img src={require('../assets/mapSub1.png')} alt="" />
          <img src={require('../assets/mapSub2.png')} className={styles.mapSub2} alt="" />
          <img src={require('../assets/mapSub3.png')} alt="" />
        </div>
      </div>
    );
  }
}

export default About;
