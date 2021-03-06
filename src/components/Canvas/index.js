import React, { useState } from 'react'
import PropTypes from 'prop-types'
import CanvasImage from '../CanvasImage'
import TimelineWrapperNew from '../TimelineWrapperNew'
import Zoom from '../Zoom'
import BottomPanel from '../BottomPanel'
import Pins from '../Pins'
import constants from '../../constants'
import { getCanvasItems, getSectionById } from '../../utils/dbHelper'
import { getCurrentZoomPercentage } from '../../utils/calcZoom'
import { Area } from './Styled'

const Canvas = ({
  db,
  onSectionSelect,
  selectedSectionId,
  onPinSelect,
  activeImageIndexes,
  showOnboardingFive,
  showOnboardingTwo,
  activeSection = {},
  activeImageIndex,
  onChangeTimeline,
}) => {
  const [zoom, setZoom] = useState(constants.DEFAULT_ZOOM_LEVEL)
  if (!db) return <div>Loading</div>

  const items = getCanvasItems(db, activeImageIndexes)
  if (!items || !items.length) return <div>Sorry, there is no data for this project</div>

  const onZoomOut = () => zoom > -constants.MAX_ZOOM_LEVEL && setZoom(zoom - 1)
  const onZoomIn = () => zoom < constants.MAX_ZOOM_LEVEL && setZoom(zoom + 1)
  const onSectionSelectFromCanvas = (sectionId, isScrollTo, zoom) =>
    onSectionSelect(getSectionById(db, sectionId), isScrollTo, zoom)
  const onSectionSelectFromPanel = sectionId => onSectionSelect(getSectionById(db, sectionId), true, zoom)

  return (
    <Area onClick={() => onSectionSelect(null)}>
      {items.map(item => (
        <CanvasImage
          item={item}
          key={item.id}
          onSelect={onSectionSelectFromCanvas}
          selectedItemId={selectedSectionId}
          zoomLevel={zoom}
        />
      ))}
      <Pins pins={db.annotations} zoomLevel={zoom} onPinSelect={onPinSelect} />
      <Zoom
        zoomIn={onZoomIn}
        zoomOut={onZoomOut}
        value={getCurrentZoomPercentage(zoom)}
        showOnboardingFive={showOnboardingFive}
      />
      <TimelineWrapperNew
        activeSection={activeSection}
        activeImageIndex={activeImageIndex}
        onChangeTimeline={onChangeTimeline}
        activeImageIndexes={activeImageIndexes}
        showOnboardingTwo={showOnboardingTwo}
      />
      {/* <TimelineWrapper
        activeSection={activeSection}
        activeImageIndex={activeImageIndex}
        onChangeTimeline={onChangeTimeline}
        activeImageIndexes = {activeImageIndexes}
        showOnboardingTwo={showOnboardingTwo}
      /> */}
      <BottomPanel items={items} onSelect={onSectionSelectFromPanel} selectedId={selectedSectionId} />
    </Area>
  )
}

Canvas.propTypes = {
  db: PropTypes.object,
  selectedSectionId: PropTypes.string,
  activeImageIndexes: PropTypes.object,
  onSectionSelect: PropTypes.func,
  onPinSelect: PropTypes.func,
  showOnboardingFive: PropTypes.bool,
  activeSection: PropTypes.object.isRequired,
  activeImageIndex: PropTypes.number,
  onChangeTimeline: PropTypes.func,
}

export default Canvas
