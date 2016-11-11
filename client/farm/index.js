import React, { PropTypes } from 'react';
import styles from './styles.css';
import VisibleFarmList from './containers/visible-farm-list'

const FarmsPage = () => (
  <div className={styles.farms} >
    <h3>Glossary</h3>
    <div className={styles.row}>
      <div className={styles.column}>
      <b>Authentic</b> (defined by the Marquette Food Co-op) Operations are considered Authentic if they do not use any synthetic fertilizers, pesticides, herbicides, insecticides, hormones, antibiotics, and common enhancers like Miracle GroTM.  The only exception would be in the case of antibiotics administered to a sick animal that is quarantined away from the herd or flock for the duration of its illness and then reintroduced to the herd or flock.
      </div>
      <div className={styles.column}>

      </div>
    </div>
    <VisibleFarmList />
  </div>
)

export default FarmsPage;
