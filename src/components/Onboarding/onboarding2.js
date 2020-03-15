import React from 'react'
import PropTypes from 'prop-types'
import AbstractCard from './abstractCard'
import Archive from '../../assets/archive.svg'

const OnboardingTwo = ({ onClose, onNext }) => {
  return (
    <AbstractCard
      imgSrc={Archive}
      title="Canvas and timeline"
      body="There are three levels on Paint.garden: your canvas, your areas, and annotations.
      Use the slider to move through the layers of each area.
      In this example, by moving the slider we can see how the artist’s project developed over three months."
      onClose={onClose}
      onNext={onNext}
      steps="2 of 4 steps"
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
