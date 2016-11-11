import React, { PropTypes } from 'react'
import styles from '../styles.css'

const CardImage = ({width, height, src}) => (
  <div className={styles.cardImage} style={{width: width, height: height}}>
    <img src={src} />
  </div>
)

CardImage.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  src: PropTypes.string
}

export default CardImage
