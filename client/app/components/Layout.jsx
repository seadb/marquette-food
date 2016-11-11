import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Routes from './Routes';
import Logo from '../../Logo';
import Nav from '../components/Nav';
import styles from '../styles.css';
 
class Layout extends Component {
  render() {
    return (
      <div>
        <div className={styles.header} >
          <Logo/>
          <Nav/>
        </div>
        <Routes />
      </div>
    )
  }
}

export default Layout
