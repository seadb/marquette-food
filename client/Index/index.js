import React, { Component } from 'react';
import styles from './styles.css';

const Index = () => ( 
  <div className={styles.index} >
    Welcome to the Marquette Food Directory
    <h3> Sources </h3>
    <ul className={styles.plain}>
      <li>
        <a href="https://upfoodexchange.com/directory">Upper Peninsula Food and Farm Directory</a>
        (<a href="https://upfoodexchange.com/wp-content/uploads/2014/10/Farm-Directory-WEB2.pdf">
          pdf</a>)
      </li>
      <li>
        <a href=""></a>
      </li>
      <li>
        <a href=""></a>
      </li>
    </ul>
  </div>
)

export default Index;
