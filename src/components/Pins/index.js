import React from 'react'
import PropTypes from 'prop-types'
import Pin from './Pin'
import { PinViewWrapper } from './Styled'

const Pins = ({ pins = [], zoomLevel, onPinSelect }) => {
  return (
    <PinViewWrapper>
      {pins.map((pin, i) => (
        <Pin key={i} data={pin} onPinClick={onPinSelect} zoomLevel={zoomLevel} />
      ))}
    </PinViewWrapper>
  )
}

Pins.propTypes = {
  pins: PropTypes.arrayOf(PropTypes.object),
  onPinSelect: PropTypes.func,
  zoomLevel: PropTypes.number,
}

export default Pins
