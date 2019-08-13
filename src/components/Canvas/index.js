import React, { useState } from 'react'
import PropTypes from 'prop-types'
import CanvasImage from '../CanvasImage'
import Zoom from '../Zoom'
import BottomPanel from '../BottomPanel'
import Pins from '../Pins'
import constants from '../../constants'
import { getCanvasItems, getSectionById, calcCanvasSize } from '../../utils/dbHelper'
import { getCurrentZoomPercentage } from '../../utils/calcZoom'
import { Area } from './Styled'

const Canvas = ({ db, onSectionSelect, selectedSection, onPinSelect, activeImageIndex }) => {
  const [zoom, setZoom] = useState(0)
  if (!db) return <div>Loading</div>

  const items = getCanvasItems(db, selectedSection, activeImageIndex)
  const onZoomOut = () => zoom > -constants.MAX_ZOOM_LEVEL && setZoom(zoom - 1)
  const onZoomIn = () => zoom < constants.MAX_ZOOM_LEVEL && setZoom(zoom + 1)
  const onSectionSelectFromCanvas = sectionId => onSectionSelect(getSectionById(db, sectionId))
  const onSectionSelectFromPanel = sectionId => onSectionSelect(getSectionById(db, sectionId), true, zoom)
  const canvasSize = calcCanvasSize(db.sections, zoom)

  return (
    <Area onClick={() => onSectionSelect({})} width={canvasSize.width} height={canvasSize.height}>
      {items.map(item => (
        <CanvasImage
          item={item}
          key={item.id}
          onSelect={onSectionSelectFromCanvas}
          selectedItemId={selectedSection.id}
          zoomLevel={zoom}
        />
      ))}
      <Pins pins={db.pins} zoomLevel={zoom} onPinSelect={onPinSelect} />
      <Zoom zoomIn={onZoomIn} zoomOut={onZoomOut} value={getCurrentZoomPercentage(zoom)}/>
      <BottomPanel items={items} onSelect={onSectionSelectFromPanel} selectedId={selectedSection.id} />
    </Area>
  )
}

Canvas.propTypes = {
  db: PropTypes.object,
  selectedSection: PropTypes.object,
  activeImageIndex: PropTypes.number,
  onSectionSelect: PropTypes.func,
  onPinSelect: PropTypes.func,
}

export default Canvas
