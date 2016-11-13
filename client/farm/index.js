import React, { PropTypes } from 'react';
import styles from './styles.css';
import VisibleFarmList from './containers/visible-farm-list'
import Glossary from './components/glossary'

const FarmsPage = () => (
  <div className={styles.farms} >
    <Glossary />
    <VisibleFarmList />
  </div>
)

export default FarmsPage;
