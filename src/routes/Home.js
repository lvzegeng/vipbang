import React from 'react';
import { Carousel } from 'antd';
import styles from './Home.less';
import VideoPlayer from '../components/VideoPlayer';

const videoJsOptions = {
  autoplay: false,
  controls: true,
  poster: require('../assets/poster2.png'),
  sources: [{
    src: 'http://wx.hy-bang.com/pt/file/汇员帮动画宣传片.mp4',
    type: 'video/mp4',
  }],
};

class Home extends React.Component {

  render() {
    return (
      <div>
        <Carousel className={styles.carousel}>
          <div className={styles.wrapper}>
            <a href="http://wpa.qq.com/msgrd?v=3&uin=2445954150&site=qq&menu=yes" target="_blank">
              <img src={require('../assets/banner01.png')} alt="" />
            </a>
          </div>
        </Carousel>

        <div className={styles.introduce}>
          <div className={styles.left}>
            <h1 className={styles.chinese}>汇员帮介绍</h1>
            <div className={styles.english}>HY-BANG INTRODUCTION</div>
            <div style={{ width: '100%', height: '80%' }}>
              <VideoPlayer {...videoJsOptions} />
            </div>
          </div>
          <div className={styles.right}>
            <p>汇员帮是由广州启尔智信息科技公司专门为国内母婴连锁店打造的一款会员精准营销系统。系统通过PC端和手机微信入口端登录，依托营销数据模型精准分析会员消费行为，有效提升导购回访效率和会员消费，系统集成绩效管理、销售管理、营销活动管理、数据报表等强大的功能。</p>
            <p>可视化智能工具让您掌上轻松处理店务，实时掌握门店数据，实现会员价值最大化。</p>
            <div className={styles.flex}>
              <div className={styles.flex1}>
                <img src={require('../assets/performance.png')} alt="" />
                <div>绩效管理</div>
              </div>
              <div className={styles.flex1}>
                <img src={require('../assets/sales.png')} alt="" />
                <div>销售管理</div>
              </div>
              <div className={styles.flex1}>
                <img src={require('../assets/market.png')} alt="" />
                <div>营销活动管理</div>
              </div>
              <div className={styles.flex1}>
                <img src={require('../assets/report.png')} alt="" />
                <div>数据报表</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.form}>
          <div className={styles.chinese}>产品形式</div>
          <div className={styles.english}>PRODUCT FORM</div>
          <div className={styles.section}>
            <div className={styles.section2}>
              <img src={require('../assets/home/computer.png')} alt="" />
            </div>
            <div className={styles.section1}>
              <div className={styles.section11}>
                <img src={require('../assets/home/manager.png')} alt="" />
                <div>
                  <div className={styles.text1}>PC端</div>
                  <div className={styles.text2}>店长</div>
                </div>
              </div>
              <ul>
                <li>分配会员归属跟进</li>
                <li>管理店员营销过程</li>
                <li>配置活动优惠券</li>
                <li>评估店员营销绩效</li>
              </ul>
            </div>
            <div className={styles.section3}>
              <img src={require('../assets/home/tree.png')} alt="" />
            </div>
            <div className={styles.section1}>
              <div className={styles.section11}>
                <img src={require('../assets/home/salesman.png')} alt="" />
                <div>
                  <div className={styles.text1}>PC端</div>
                  <div className={styles.text2}>店长</div>
                </div>
              </div>
              <ul>
                <li>查看会员消费记录</li>
                <li>跟进会员精准营销</li>
                <li>记录会员行为轨迹</li>
                <li>学习母婴专业知识</li>
              </ul>
            </div>
            <div className={styles.section2}>
              <img src={require('../assets/home/iphone.png')} className={styles.iphone} alt="" />
            </div>
          </div>
        </div>

        <div className={styles.function}>
          <div className={styles.chinese}>产品功能</div>
          <div className={styles.english}>PRODUCT FUNCTION</div>

          <div className={styles.section}>
            <div className={styles.section1}>
              <img src={require('../assets/home/function1.png')} alt="" />
              <div className={styles.text1}>
                管理会员
              </div>
              <img src={require('../assets/home/line.png')} className={styles.lineImg} alt="" />
              <div className={styles.text2}>
                使用资料随时查阅，方便会员使用和门店管理
              </div>
            </div>

            <div className={styles.section1}>
              <img src={require('../assets/home/function2.png')} alt="" />
              <div className={styles.text1}>
                分析会员
              </div>
              <img src={require('../assets/home/line.png')} className={styles.lineImg} alt="" />
              <div className={styles.text2}>
                为会员行为打标签，优化会员结构，自动分类分级
              </div>
            </div>

            <div className={styles.section1}>
              <img src={require('../assets/home/function3.png')} alt="" />
              <div className={styles.text1}>
                电子会员卡
              </div>
              <img src={require('../assets/home/line.png')} className={styles.lineImg} alt="" />
              <div className={styles.text2}>
                电子会员卡取代实体卡，提升效率和客户体验
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.section1}>
              <img src={require('../assets/home/function4.png')} alt="" />
              <div className={styles.text1}>
                精准营销
              </div>
              <img src={require('../assets/home/line.png')} className={styles.lineImg} alt="" />
              <div className={styles.text2}>
                通过会员营销模型，精准推送回访名单、商品和话术
              </div>
            </div>

            <div className={styles.section1}>
              <img src={require('../assets/home/function5.png')} alt="" />
              <div className={styles.text1}>
                业绩管理
              </div>
              <img src={require('../assets/home/line.png')} className={styles.lineImg} alt="" />
              <div className={styles.text2}>
                随时随地了解门店销售和员工业绩
              </div>
            </div>

            <div className={styles.section1}>
              <img src={require('../assets/home/function6.png')} alt="" />
              <div className={styles.text1}>
                灵活拓客
              </div>
              <img src={require('../assets/home/line.png')} className={styles.lineImg} alt="" />
              <div className={styles.text2}>
                通过新增会员功能，随时开拓新客户
              </div>
            </div>

            <div className={styles.section1}>
              <img src={require('../assets/home/function7.png')} alt="" />
              <div className={styles.text1}>
                学习提升
              </div>
              <img src={require('../assets/home/line.png')} className={styles.lineImg} alt="" />
              <div className={styles.text2}>
                随时随地学习商学院母婴知识及销售管理课程
              </div>
            </div>
          </div>

        </div>

        <div className={styles.advantage}>
          <div className={styles.chinese}>产品优势</div>
          <div className={styles.english}>PRODUCT ADVANTAGE</div>

          <img src={require('../assets/home/advantage.png')} alt="" />
          <div className={styles.text1}>无需更换CRM系统</div>
          <div className={styles.text2}>门店数据自动同步至云端服务器</div>
          <div className={styles.text2}>减少门店更换系统带来的成本</div>
        </div>

        <div className={styles.service}>
          <div className={styles.chinese}>售后服务</div>
          <div className={styles.english}>AFTER-SALES-SERVICE</div>
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

        <div className={styles.customer}>
          <div className={styles.chinese}>部分合作客户</div>
          <div className={styles.english}>OUR CLIENT</div>

          <div className={styles.custom}>
            <div>
              <img src={require('../assets/home/custom01.png')} alt="" />
            </div>
            <div>
              <img src={require('../assets/home/custom11.png')} alt="" />
            </div>
            <div>
              <img src={require('../assets/home/custom21.png')} alt="" />
            </div>
            <div>
              <img src={require('../assets/home/custom31.png')} alt="" />
            </div>
            <div>
              <img src={require('../assets/home/custom41.png')} alt="" />
            </div>
          </div>
          <div className={styles.custom}>
            <div>
              <img src={require('../assets/home/custom51.png')} alt="" />
            </div>
            <div>
              <img src={require('../assets/home/custom61.png')} alt="" />
            </div>
            <div>
              <img src={require('../assets/home/custom71.png')} alt="" />
            </div>
            <div>
              <img src={require('../assets/home/custom81.jpg')} alt="" />
            </div>
            <div>
              <img src={require('../assets/home/custom91.jpg')} alt="" />
            </div>
          </div>
        </div>

        <div className={styles.contacts}>
          <div className={styles.section}>
            <img src={require('../assets/home/address.png')} alt="" />
            <img src={require('../assets/home/phone.png')} alt="" />
            <img src={require('../assets/home/attention.png')} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
