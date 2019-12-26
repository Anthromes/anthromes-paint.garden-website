import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { Wrapper, InnerWrapper, PreviewArea, Thumb } from './Styled'

const BottomPanel = ({ items, onSelect, selectedId }) => {
  const [active] = useState(true)

  return (
    <Wrapper onClick={ev => ev.stopPropagation()}>
      <InnerWrapper active={active}>
        <Fragment>
          <PreviewArea>
            {items.map(({ url, id }) => (
              <Thumb
                src={url}
                key={id}
                onClick={() => onSelect(id)}
                selected={selectedId === id}
                style={{ zIndex: 22222 }}
              />
            ))}
          </PreviewArea>
        </Fragment>
      </InnerWrapper>
    </Wrapper>
  )
}

BottomPanel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      sectionId: PropTypes.string,
    }),
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
}

BottomPanel.defaultProps = {
  items: [],
}

export default BottomPanel
