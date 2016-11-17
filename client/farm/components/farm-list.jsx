import React, { Component, PropTypes } from 'react'
import Farm from '../components/farm'
import FlipCard from '../../flip-card'
import { fetchFarms, toggleFarm } from '../farm-actions'
import styles from '../styles.css';

const splitInHalf = (farms) => {
  var halfLength = Math.ceil(farms.length / 2); 
  var firstHalf = farms.slice(0,halfLength);
  var lastHalf = farms.slice(halfLength, farms.length);
  return ({
    firstHalf: firstHalf,
    lastHalf: lastHalf
  })
}

const back = (farm) => (
  <div>
    <h2>{farm.name}</h2>
  </div>
)
const front = (farm, dispatch) => (
          <Farm
            key={farm.id}
            dispatch={dispatch}
            {...farm}
          />
        )

const onCardClick = (id, dispatch) => {
  dispatch(toggleFarm(id))
}

class FarmList extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchFarms())
  }
  render() {
    const halves = splitInHalf(this.props.farms);
    const { dispatch } = this.props
    const flipCard = (farm) => (
            <FlipCard
              front={front(farm, dispatch)}
              back={back(farm)}
              key={farm.id}
              id={farm.id}
              className={styles.farm}
              flipped={farm.selected}
              onClick={onCardClick}
              clickProps={[farm.id, dispatch]}
            /> 
    )
    return (
      <div className={styles.row}>
        <div className={styles.column}>
          {halves.firstHalf.map(farm => flipCard(farm))}
        </div>
        <div className={styles.column}>
          {halves.lastHalf.map(farm => flipCard(farm))}
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
          image: PropTypes.bool,
          onClick: PropTypes.func,
          clickProps: PropTypes.object
  }).isRequired).isRequired,
}


export default FarmList
