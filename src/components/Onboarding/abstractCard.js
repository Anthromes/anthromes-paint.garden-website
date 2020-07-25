import React from 'react'
import PropTypes from 'prop-types'
import {NoSteps, SkipTutorial, OnBoardingButton, OnBoardingText, TutorialText} from './Styled'
import '../../assets/fonts/fonts.css'

const AbstractCard = ({ onClose, onNext, title, body, imgSrc, steps, button, top, left }) => {
  const width = document.documentElement.clientWidth
  return (
    <div
      style={{
        position: 'absolute',
        top: `${width > '740' ? top : '50px'}`,
        left: `${width > '740' ? left : 0}`,
        width: `${width > '740' ? '445px' : '100%'}`,
        backgroundColor: 'white',
        borderRadius: `${width > '740' ? '8px' : 0}`,
        paddingTop: 21,
        zIndex: 11111,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'block',
          flexDirection: 'row',
          width: '100%',
          padding: '0 20px',
        }}
      >
        <div
          style={{
            position: 'absolute',
          }}
        >
          { imgSrc !== null ?
            <img src={imgSrc} width={40} height={40} fill="black" alt="Paint.garden" />
            : ''
          }
        </div>
        <div
          style={{
            ...imgSrc === null ? {marginRight: 60} : {marginLeft: 60},
            flex: '0.2 0.2 100%',
            paddingBottom: '10px'
          }}
        >
          <TutorialText style={{fontFamily: 'Spartan Semibold', marginTop: -5, marginBottom: 5 }}>{title}</TutorialText>
          <div style={{ flexBasis: '100%', height: 0 }} />
          <TutorialText style={{fontFamily: 'Spartan Light' }}>{body}</TutorialText>
        </div>
        <div style={{ flexBasis: '100%', height: 0 }} />
    </div>
        <div
          style={{
            bottom: 0,
            left: 0,
            backgroundColor: 'rgb(243,244,247)',
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            padding: '10px 0',
            justifyContent: 'space-between',
          }}
        >
          <NoSteps>
            <OnBoardingText>{steps}</OnBoardingText>
          </NoSteps>
          <SkipTutorial>
            <OnBoardingText onClick={onClose}>
              Skip the tour
            </OnBoardingText>
          </SkipTutorial>
          <OnBoardingButton
            onClick={() => {
              onClose()
              onNext()
            }}
          >
            {button}
          </OnBoardingButton>
        </div>
    </div>
  )
}

AbstractCard.propTypes = {
  onClose: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
}

export default AbstractCard
