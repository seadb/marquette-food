import React, { Component, PropTypes } from 'react'
import Farm from '../components/farm'
import { fetchFarms } from '../farm-actions'
import styles from '../styles.css';

function splitInHalf(farms) {
  var halfLength = Math.ceil(farms.length / 2); 
  var firstHalf = farms.slice(0,halfLength);
  var lastHalf = farms.slice(halfLength, farms.length);
  return ({
    firstHalf: firstHalf,
    lastHalf: lastHalf
  })
}

class FarmList extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchFarms())
  }
  render() {
    const halves = splitInHalf(this.props.farms);
    const { dispatch } = this.props
    return (
      <div className={styles.row}>
        <div className={styles.column}>
            {halves.firstHalf.map(farm =>
              <Farm
                key={farm.id}
                dispatch={dispatch}
                {...farm}
              />
            )}
        </div>
        <div className={styles.column}>
          {halves.lastHalf.map(farm =>
              <Farm
                key={farm.id}
                dispatch={dispatch}
                {...farm}
              />
            )}
        </div>
      </div>
    )
  }
}

FarmList.propTypes = {
  farms: PropTypes.arrayOf(PropTypes.shape({
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
  }).isRequired).isRequired,
}


export default FarmList
