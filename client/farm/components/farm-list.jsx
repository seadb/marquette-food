import React, { Component, PropTypes } from 'react'
import Farm from '../components/farm'
import FlipCard from '../../flip-card'
import { fetchFarms, toggleFarm } from '../farm-actions'
import styles from '../styles.css';
import style from '../../flip-card/styles.css'


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
    const segment = Math.ceil(this.props.farms.length / 2) 
    const { dispatch, farms } = this.props
    const flipCard = (farm) => (
            <FlipCard
              front={front(farm, dispatch)}
              back={back(farm)}
              key={farm.id}
              id={farm.id}
              className={style.card}
              flipped={farm.selected}
              onClick={onCardClick}
              clickProps={[farm.id, dispatch]}
            /> 
    )
    return (
      <div className="row">
          <div className={"col-xs-12 col-sm-6 "+styles.col}>
          {farms.slice(0,segment).map(farm => flipCard(farm) )}
          </div>
          <div className={"col-xs-12 col-sm-6 "+styles.col}>
          {farms.slice(segment).map(farm => flipCard(farm) )}
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
