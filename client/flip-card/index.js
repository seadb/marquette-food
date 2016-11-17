import React, { Component, PropTypes } from 'react'
import styles from './styles.css'

const addClasses = (className, optional) => (
    className + ' ' + (optional ? optional : '')
)

class FlipCard extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {
    // resizes inner container div to height of tallest side
    const front = document.getElementById("front" + this.props.id)
    const back  = document.getElementById("back" + this.props.id)
    const frontHeight = window.getComputedStyle(front).height
    const backHeight = window.getComputedStyle(back).height
    const maxHeight =  ((parseInt(frontHeight) > parseInt(backHeight)) ? frontHeight : backHeight)
    document.getElementById("inner"+this.props.id).style.height = maxHeight
  }
  render() {
    return (
      <div
        className={(styles.flipCard + (this.props.selected ? ' ' + styles.flipped : ''))}
        onTouchStart={() => this.classList.toggle('hover')}
        onClick={() => { 
          console.log(this.props.clickProps)
          this.props.onClick(...this.props.clickProps) }}
      >
     	  <div
          id={"inner"+ this.props.id}
          className={addClasses(this.props.className, styles.flipper)}
        >
      		<div
            id={"front"+ this.props.id}
            className={addClasses(styles.front, this.props.frontClass)}
          >
            {this.props.front}
      		</div>
      		<div
            id={"back" + this.props.id}
            className={addClasses(styles.back, this.props.backClass)}
          >
            {this.props.back}
      	  </div>
        </div>
      </div>
    )
  }
}

FlipCard.propTypes = {
  id: PropTypes.number,
  front: PropTypes.element,
  back: PropTypes.element,
  className: PropTypes.string,
  frontClass: PropTypes.string,
  backClass: PropTypes.string,
  perspective: PropTypes.string,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
  clickProps: PropTypes.array
}

FlipCard.defaultProps = {
}

export default FlipCard
