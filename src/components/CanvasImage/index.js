import React from 'react'
import PropTypes from 'prop-types'
import { Image } from '../Common/Styled'
import { calcSizeWithZoom } from '../../utils/calcZoom'

const CanvasImage = ({ item, onSelect, selectedItemId, zoomLevel }) => {
  const height = calcSizeWithZoom(item.height, zoomLevel)
  const width = calcSizeWithZoom(item.width, zoomLevel)
  const x = calcSizeWithZoom(item.x, zoomLevel)
  const y = calcSizeWithZoom(item.y, zoomLevel)

  return (
    <Image
      src={item.url}
      isSelected={selectedItemId === item.id}
      alt={''}
      top={y}
      left={x}
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
