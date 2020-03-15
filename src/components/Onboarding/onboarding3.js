import React from 'react'
import PropTypes from 'prop-types'
import pin from '../../assets/Annotation_t.svg'
import AbstractCard from './abstractCard'

const OnboardingThree = ({ onClose, onNext }) => {
  return (
    <AbstractCard
      imgSrc={pin}
      title="Annotations & comments"
      body="Annotations are the remarks and details you add to the layers of your folder. You use them to record your method, tools or inspiration, and viewers use them to bring the story of your art alive.

      Annotations can be added anywhere on a canvas."
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
