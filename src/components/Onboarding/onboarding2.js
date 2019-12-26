import React from 'react'
import PropTypes from 'prop-types'
import AbstractCard from './abstractCard'
import Archive from '../../assets/archive.svg'

const OnboardingTwo = ({ onClose, onNext }) => {
  return (
    <AbstractCard
      imgSrc={Archive}
      title="Archive"
      body="Each section in paint.garden can have layers. Use the slider like an archive and discover how a picture has evolved."
      onClose={onClose}
      onNext={onNext}
      steps="1 of 4 steps"
      button="Next"
      top="13%"
      left="30%"
    />
  )
}

OnboardingTwo.propTypes = {
  onClose: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
}

export default OnboardingTwo
