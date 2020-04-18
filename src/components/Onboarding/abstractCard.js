import React from 'react'
import PropTypes from 'prop-types'
import {NoSteps, SkipTutorial, OnBoardingButton, OnBoardingText} from './Styled'
import '../../assets/fonts/fonts.css'

const AbstractCard = ({ onClose, onNext, title, body, imgSrc, steps, button, top, left }) => {
  const width = document.documentElement.clientWidth
  return (
    <div
      style={{
        position: 'absolute',
        top: `${width > '740' ? top : '250px'}`,
        left: `${width > '740' ? left : 0}`,
        maxHeight: 200,
        width: `${width > '740' ? '445px' : '100%'}`,
        backgroundColor: 'white',
        borderRadius: `${width > '740' ? '8px' : 0}`,
        paddingLeft: 24,
        paddingTop: 21,
        zIndex: 11111,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          height: 165,
          paddingRight: 10,
        }}
      >
        <div
          style={{
            position: 'absolute',
          }}
        >
          <img src={imgSrc} width={40} height={40} fill="black" alt="Paint.garden" />
        </div>
        <div
          style={{
            marginLeft: 60,
            flex: '0.2 0.2 100%',
          }}
        >
          <p style={{ fontSize: 14, fontFamily: 'Spartan Semibold', marginTop: -5, marginBottom: 5 }}>{title}</p>
          <div style={{ flexBasis: '100%', height: 0 }} />
          <p style={{ fontSize: 14, fontFamily: 'Spartan Light' }}>{body}</p>
        </div>
        <div style={{ flexBasis: '100%', height: 0 }} />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            backgroundColor: 'rgb(243,244,247)',
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: '58px',
            paddingTop: '10px',
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
    </div>
  )
}

AbstractCard.propTypes = {
  onClose: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
}

export default AbstractCard
