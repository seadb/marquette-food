import React, { Component } from 'react';
import styles from './styles.css';

class Logo extends Component {
  render() {
    return (
      <div className={styles.logo} >
        Marquette Local Food
        <img src="/public/img/marquette.png" alt="marquette county"/>
      </div>
    )
  }
}

export default Logo;
