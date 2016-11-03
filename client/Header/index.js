import React, { Component } from 'react';
import styles from './styles.css';
import Logo from '../Logo';
import Nav from '../Nav';

class Header extends Component {
  render() {
    return (
      <div className={styles.header} >
       <Logo/>
       <Nav/>
      </div>
    )
  }
}

export default Header;
