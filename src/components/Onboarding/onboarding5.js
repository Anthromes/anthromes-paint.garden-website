import React from 'react'
import PropTypes from 'prop-types'
import Wizard from '../../assets/wizard.svg'
import AbstractCard from './abstractCard'

const OnboardingFive = ({ onClose, onNext }) => {
  return (
    <AbstractCard
      imgSrc={Wizard}
      title="Scroll & Zoom"
      body="Your canvas is like one big map. Scroll anywhere and zoom using the magnifying icon."
      onClose={onClose}
      onNext={onClose}
      steps="4 of 4 steps"
      button="Start exploring"
      top="25%"
      left="25%"
    />
  )
}

OnboardingFive.propTypes = {
  onClose: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
}

export default OnboardingFive
