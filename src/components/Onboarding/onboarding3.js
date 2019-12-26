import React from 'react'
import PropTypes from 'prop-types'
import pin from '../../assets/Annotation_t.svg'
import AbstractCard from './abstractCard'

const OnboardingThree = ({ onClose, onNext }) => {
  return (
    <AbstractCard
      imgSrc={pin}
      title="Annontation"
      body="Annotations can be added anywhere on the canvas, click to learn about this area's inspiration, meaning, and related works."
      onClose={onClose}
      onNext={onNext}
      steps="2 of 4 steps"
      button="Next"
      top="25%"
      left="5px"
    />
  )
}

OnboardingThree.propTypes = {
  onClose: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
}

export default OnboardingThree
