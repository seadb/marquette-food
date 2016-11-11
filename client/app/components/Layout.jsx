import React from 'react'
import Routes from '../components/Routes';
import Logo from '../components/Logo';
import Nav from '../components/Nav';
import styles from '../styles.css';

const Layout = () => (
  <div>
    <div className={styles.header} >
      <Logo/>
      <Nav/>
    </div>
    <div className={styles.body} >
      <Routes />
    </div>
  </div>
)

export default Layout
