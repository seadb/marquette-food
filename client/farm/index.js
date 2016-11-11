import React, { PropTypes } from 'react';
import styles from './styles.css';
import VisibleFarmList from './visible-farm-list'

const FarmsPage = () => (
  <div className={styles.farms} >
    Welcome to the farms page <br />
    <VisibleFarmList />
  </div>
)

export default FarmsPage;
