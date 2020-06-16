import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from './Styled'
import { LinkText, Slider } from '../Common/Styled'

const TimelineWrapper = ({ activeSection = {}, activeImageIndex, onChangeTimeline, showOnboardingTwo }) => {
  return (
    <Wrapper style={{ zIndex: `${showOnboardingTwo ? 99999 : 100}` }} onClick={ev => ev.stopPropagation()}>
      {activeSection.id && (
        <LinkText
          style={{
            display: 'block',
            textAlign: 'center',
            fontSize: '0.8em',
          }}
          bold
        >
          {activeSection.name}
        </LinkText>
      )}
      {activeSection.id && activeSection.imageIds.length > 1 && (
        <Slider
          width={[150, 200]}
          style={{
            display: 'block',
            width: '90%',
            margin: '0 auto',
          }}
          min={0}
          step={1}
          value={activeImageIndex}
          max={activeSection.imageIds.length - 1}
          onChange={onChangeTimeline}
        />
      )}
    </Wrapper>
  )
}

TimelineWrapper.propTypes = {
  activeSection: PropTypes.object.isRequired,
  activeImageIndex: PropTypes.number,
  onChangeTimeline: PropTypes.func,
}

export default TimelineWrapper
