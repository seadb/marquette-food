import React from 'react'
import glossary from '../glossary-data'
import styles from '../styles.css'

const Glossary = () => {
  const segment = Math.floor(glossary.length/2);
  return (
    <div>
      <h3>Glossary</h3>
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          {glossary.slice(0,segment).map((entry, index) => (
              <div key={index} className={styles.entry}>
                <b>{entry.term} </b>
                {entry.definition}
              </div>
              )
          )}
        </div>
        <div className="col-xs-12 col-sm-6">
          {glossary.slice(segment).map((entry, index) => (
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
