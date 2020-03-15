import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from './Styled'
import { LinkText, Slider } from '../Common/Styled'


const TimelineWrapper = ({
  activeSection = {},
  activeImageIndex,
  onChangeTimeline,
}) => {
    return (
        <Wrapper onClick={ev => ev.stopPropagation()}>
            {activeSection.id && (
                <LinkText style={{display: 'inline-block'}} bold>
                {activeSection.name}
                </LinkText>
            )}
            {(activeSection.id && activeSection.imageIds.length > 1) && (
                <Slider
                    width={[150, 200]}
                    style={{display: 'inline-block', width: "60%"}}
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
