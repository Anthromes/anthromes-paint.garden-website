import React from 'react'
import PropTypes from 'prop-types'
import AbstractCard from './abstractCard'
import LogoSrc from '../../assets/logo.svg'

const OnboardingOne = ({ onClose, onNext }) => {
  return (
    <AbstractCard
      imgSrc={LogoSrc}
      title="Hello"
      body="Welcome to Paint.garden an experimental tool to share and explore creativity. Take a tour to see the
      website features."
      onClose={onClose}
      onNext={onNext}
      button="Next"
      top="25%"
      left="25%"
    />
  )
}

OnboardingOne.propTypes = {
  onClose: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
}

export default OnboardingOne
