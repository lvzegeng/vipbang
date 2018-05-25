import React from 'react';
import { Button, Modal } from 'antd';
import { Link, NavLink } from 'dva/router';
import styles from './Head.less';
import { Icon } from 'antd';
import { connect } from 'dva';

class Head extends React.Component {

  state = {
    visible: false,
  }

  active = (match, location) => {
    return (location.pathname.startsWith('/Treads'));
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }

  openQQ = () => {
    window.open('http://wpa.qq.com/msgrd?v=3&uin=2445954150&site=qq&menu=yes');
  }

  render() {
    return (
      <div>
        <div className={styles.head}>
          <Link to={'/'}>
            <img className={styles.logo} src={require('../assets/logo.png')} alt="" />
          </Link>
          <span className={styles.link}>
            <NavLink to={'/'} activeClassName={styles.active} exact>首页</NavLink>
            <NavLink to={'/Solute'} activeClassName={styles.active}>解决方案和服务</NavLink>
            <NavLink to={'/Treads'} activeClassName={styles.active} isActive={this.active}>公司动态</NavLink>
            <NavLink to={'/About'} activeClassName={styles.active}>关于我们</NavLink>
          </span>
          <span className={styles.button}>
            <Button
              type="primary" onClick={() => {
                window.open('http://crm.hy-bang.com');
              }}
            >登录</Button>
            <Button type="primary" onClick={this.showModal}>申请试用</Button>
          </span>
        </div>

        <Modal
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}
          closable={false}
          maskClosable={false}
          width="700"
        >
          <div className={styles.model}>
            <img src={require('../assets/modal.png')} className={styles.baby} alt="" />
            <img src={require('../assets/qq.png')} className={styles.qq} alt="" onClick={this.openQQ} />
            <Icon type="close" className={styles.close} onClick={this.handleCancel} />
          </div>
        </Modal>
      </div>

    );
  }
}

export default Head;
