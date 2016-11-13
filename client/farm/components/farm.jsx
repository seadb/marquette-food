import React, { PropTypes } from 'react'
import styles from '../styles.css'
import CardImage from '../components/card-image'

const imagePath = (name) => {
  const apostrophe = name.indexOf("’")
  let first;
  if (apostrophe > -1) {
    console.log(apostrophe)
    first = name.slice(0, apostrophe).toLowerCase()
  } else {
    first = name.slice(0,name.indexOf('\ ')).toLowerCase()
  } 
  const path = "public/img/" + first + ".jpg"
  return path
}

const Farm = ({name, address, phoneNumber, email, website, products, carriers, growingMethod, CSA, image}) => {
  return (
    <section className={styles.farm}>
      {image ? <CardImage width="400px" height="200px" src={imagePath(name)}  /> : null}
      <b>{name}</b> <br />
      {address}<br />
      {phoneNumber ? <span>{phoneNumber}<br /></span> : null}
      <a href={"mailto:"+ email +"?Subject=Local%20Food"} target="_blank">
        {email}
      </a><br />
      {website ? <a href={"http://"+website}>Website<br/> </a> : null}
      Produce:
      <ul>
        {products.map((product, index) => <li key={index}>{product}</li> )}
      </ul>
      <i>{growingMethod}</i> Growing Method<br />
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
        image: PropTypes.bool
}

export default Farm
