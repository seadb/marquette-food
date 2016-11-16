import React, { Component, PropTypes } from 'react'
import styles from './styles.css'

const outerClasses = (selected) => {
  return ((styles.flipCard) + (selected ? ' flipped' : ''))
}

const innerClasses = (className) => (
  (className) + ' ' + (styles.flipper)
)

class FlipCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className={outerClasses(this.props.selected)}
        ontouchstart="this.classList.toggle('hover');">
      	  <div className={innerClasses(this.props.className)}>
      	  	<div className={(styles.front)+(this.props.frontClassName ? this.props.frontClassName : '')}>
              {this.props.front}
      	  	</div>
      	  	<div className={(styles.back) + (this.props.backClassName ? this.props.backClassName : '')}>
              {this.props.back}
      	  	</div>
      	  </div>
      </div>
    )
  }
}

FlipCard.propTypes = {
  front: PropTypes.element,
  back: PropTypes.element,
  className: PropTypes.string,
  frontClassName: PropTypes.string,
  backClassName: PropTypes.string,
  perspective: PropTypes.string,
  selected: PropTypes.bool

}

FlipCard.defaultProps = {
}

export default FlipCard
