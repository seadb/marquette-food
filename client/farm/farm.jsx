import React, { PropTypes } from 'react'
import styles from './styles.css';

const Farm = ({name, address, phoneNumber, email, website, products, carriers, growingMethod, CSA}) => (
  <section className={styles.farm}>
    <b>{name}</b> <br />
    {address}<br />
    {phoneNumber}<br />
  </section>
)

Farm.propTypes = {
        name: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        phoneNumber:  PropTypes.string,
        email: PropTypes.string,
        website: PropTypes.string,
        products: PropTypes.array,
        carriers: PropTypes.array, 
        growingMethod: PropTypes.string,
        CSA: PropTypes.bool
}

export default Farm
