import React from 'react'
import PropTypes from 'prop-types'
import Image from '../../assets/image.svg'
import AbstractCard from './abstractCard'

const OnboardingThree = ({ onClose, onNext }) => {
  return (
    <AbstractCard
      imgSrc={Image}
      title="Gallery"
      body="To switch between the areas of your canvas, use the gallery, which shows each of your areas as an icon at the bottom of the screen."
      onClose={onClose}
      onNext={onClose}
      steps="4 of 4 steps"
      button="Start exploring"
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
