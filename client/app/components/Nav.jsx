import React, { Component } from 'react';
import styles from '../styles.css';

class Nav extends Component {
  render() {
    return (
      <div className={styles.nav} >
        <a href="/">Home</a>
        <a href="/farms">Farms</a>
      </div>
    );
  }
}

export default Nav;
