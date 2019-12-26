import React from 'react'
import PropTypes from 'prop-types'
import { OverlayDiv } from './Styled'

const Overlay = ({ bottom, top }) => {
  return <>{bottom ? <OverlayDiv bottom /> : top ? <OverlayDiv top /> : <OverlayDiv />}</>
}

Overlay.propTypes = {
  bottom: PropTypes.bool,
  top: PropTypes.bool,
}

export default Overlay
