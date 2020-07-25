import React from 'react'
import PropTypes from 'prop-types'
import { PinWrapper } from './Styled'
import { calcSizeWithZoom } from '../../utils/calcZoom'
import PinIcon from '../../assets/Annotation_t.svg'

const Pin = ({ data, onPinClick, zoomLevel }) => (
    console.log(PinIcon),
  <PinWrapper x={calcSizeWithZoom(data.posx, zoomLevel)} y={calcSizeWithZoom(data.posy, zoomLevel)}>
    <img
      src={PinIcon}
      alt={data.headline}
      onClick={ev => {
        ev.stopPropagation()
        onPinClick(data)
      }}
    />
  </PinWrapper>
)

Pin.propTypes = {
  data: PropTypes.object,
  onPinClick: PropTypes.func,
  zoomLevel: PropTypes.number,
}

export default Pin
