import React from 'react'
import PropTypes from 'prop-types'
import { Image } from '../Common/Styled'
import { calcSizeWithZoom } from '../../utils/calcZoom'

const CanvasImage = ({ item, onSelect, selectedItemId, zoomLevel }) => {
  const height = calcSizeWithZoom(item.height, zoomLevel)
  const width = calcSizeWithZoom(item.width, zoomLevel)
  const x = calcSizeWithZoom(item.posx, zoomLevel)
  const y = calcSizeWithZoom(item.posy, zoomLevel)

  return (
    <img
      style = {{
        position: 'absolute',
        top: y,
        left: x,
        border: selectedItemId === item.id ? '2px solid #00abdc' : '',
        boxSizing: "border-box",
        zIndex: selectedItemId === item.id ? '20' : '1',
      }}
      src={item.url}
      selected={selectedItemId === item.id}
      alt={''}
      width={width}
      height={height}
      onClick={ev => {
        ev.stopPropagation()
        onSelect(item.id,  true, zoomLevel)
      }}
    />
  )
}

CanvasImage.propTypes = {
  item: PropTypes.object.isRequired,
  onSelect: PropTypes.func,
  selectedItemId: PropTypes.string,
  zoomLevel: PropTypes.number,
}

export default CanvasImage
