import React, { PropTypes } from 'react'
import styles from './styles.css';

const Farm = ({name, address, phoneNumber, email, website, products, carriers, growingMethod, CSA, image}) => {
  return (
    <section className={styles.farm}>
      {image ? <img src={"public/img/"+image} /> : null}
      <b>{name}</b> <br />
      {address}<br />
      {phoneNumber ? <span>{phoneNumber}<br /></span> : null}
      <a href={"mailto:"+ email +"?Subject=Local%20Food"} target="_blank">
        {email}
      </a><br />
      {website ? <a href={"http://"+website}>Website<br/> </a> : null}
      Produce:
      <ul>
        {products.map((product) => <li>{product}</li> )}
      </ul>
      {growingMethod} Growing Method<br />
    </section>
  )
}

Farm.propTypes = {
        name: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        phoneNumber:  PropTypes.string,
        email: PropTypes.string,
        website: PropTypes.string,
        products: PropTypes.array,
        carriers: PropTypes.array, 
        growingMethod: PropTypes.string,
        CSA: PropTypes.bool,
        image: PropTypes.string
}

export default Farm
