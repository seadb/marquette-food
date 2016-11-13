import React from 'react'
import glossary from '../glossary-data'
import styles from '../styles.css'

const Glossary = () => {
  const segment = Math.floor(glossary.length/2);
  return (
    <div>
      <h3>Glossary</h3>
      <div className={styles.row}>
        <div className={styles.column} style={{width: '50%'}}>
          {glossary.slice(0,segment+1).map((entry, index) => (
              <div key={index} className={styles.entry}>
                <b>{entry.term} </b>
                {entry.definition}
              </div>
              )
          )}
        </div>
        <div className={styles.column} style={{width: '50%'}}>
          {glossary.slice(segment+1, segment*2+1).map((entry, index) => (
              <div key={index} className={styles.entry}>
                <b>{entry.term} </b>
                {entry.definition}
              </div>
              )
          )}
        </div>
      </div>
    </div>
  )
}

export default Glossary
