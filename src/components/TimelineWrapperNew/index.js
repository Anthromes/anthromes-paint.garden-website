import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Dot, Bar } from './Styled'
import { LinkText } from '../Common/Styled'

const TimelineWrapperNew = ({ activeSection = {}, onChangeTimeline, activeImageIndexes, showOnboardingTwo }) => {
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
        <Bar
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: '70%',
            margin: '0 auto',
          }}
        >
          {activeSection.imageIds.map((image_id, key) => (
            <Dot
              key={image_id}
              style={{
                ...(activeImageIndexes[activeSection.id] === key ? { border: '6px solid #D6E3FE' } : {}),
              }}
            >
              <input
                type="radio"
                value={key}
                name={activeSection.id}
                style={{
                  display: 'none',
                }}
                onChange={onChangeTimeline}
              />
            </Dot>
          ))}
        </Bar>
      )}
    </Wrapper>
  )
}

TimelineWrapperNew.propTypes = {
  activeSection: PropTypes.object.isRequired,
  activeImageIndex: PropTypes.number,
  onChangeTimeline: PropTypes.func,
}

export default TimelineWrapperNew
