import React from 'react'
import PropTypes from 'prop-types'
import Image from '../../assets/image.svg'
import AbstractCard from './abstractCard'

const OnboardingThree = ({ onClose, onNext }) => {
  return (
    <AbstractCard
      imgSrc={Image}
      title="Gallery"
      body="To switch between section quickly, use the gallery and quickly find a specific section or image."
      onClose={onClose}
      onNext={onNext}
      steps="3 of 4 steps"
      button="Next"
      top="60%"
      left="25%"
    />
  )
}

OnboardingThree.propTypes = {
  onClose: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
}

export default OnboardingThree
