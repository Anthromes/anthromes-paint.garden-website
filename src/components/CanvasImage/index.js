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
   // console.log(item),
    <img
      style = {{
        position: 'absolute',
        top: y,
        left: x,
      }}
      src={item.url}
      isselected={selectedItemId === item.id}
      alt={''}
      width={width}
      height={height}
      onClick={ev => {
        ev.stopPropagation()
        onSelect(item.id)
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
