import React from 'react'
import PropTypes from 'prop-types'
import Wizard from '../../assets/wizard.svg'
import AbstractCard from './abstractCard'

const OnboardingFive = ({ onClose, onNext }) => {
  return (
    <AbstractCard
      imgSrc={null}
      title="Hello, there."
      body="Paint.garden is like one big map. Scroll anywhere and zoom using the magnifying icon and explore ideas and artworks."
      onClose={onClose}
      onNext={onNext}
      steps="1 of 4 steps"
      button="Next"
      top="calc(50% - 90px)"
      left="calc(50% - 223px)"
    />
  )
}

OnboardingFive.propTypes = {
  onClose: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
}

export default OnboardingFive
