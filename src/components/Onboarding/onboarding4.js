import React from 'react'
import PropTypes from 'prop-types'
import Image from '../../assets/image.svg'
import AbstractCard from './abstractCard'

const OnboardingThree = ({ onClose, onNext }) => {
  return (
    <AbstractCard
      imgSrc={Image}
      title="Gallery"
      body="To switch between the areas of your canvas, use the gallery, which shows each ofyour areas as an icon at the bottom of the screen."
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
