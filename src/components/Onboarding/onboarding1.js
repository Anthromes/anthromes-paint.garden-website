import React from 'react'
import PropTypes from 'prop-types'
import AbstractCard from './abstractCard'
import LogoSrc from '../../assets/logo.svg'

const OnboardingOne = ({ onClose, onNext }) => {
  return (
    <AbstractCard
      imgSrc={LogoSrc}
      title="Hello, there."
      body="Paint.garden records your creative process and, if you want, lets you share it. Store
      your work and tells its story."
      onClose={onClose}
      onNext={onNext}
      button="Let’s take a quick tour "
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
