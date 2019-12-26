import React from 'react'
import PropTypes from 'prop-types'

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
          <p style={{ fontSize: 14, fontFamily: 'Proxima Nova Semibold', marginTop: -5, marginBottom: 5 }}>{title}</p>
          <div style={{ flexBasis: '100%', height: 0 }} />
          <p style={{ fontSize: 14, fontFamily: 'Proxima Nova Light' }}>{body}</p>
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
          <div
            style={{
              display: 'flex',
              marginLeft: '20px',
              paddingTop: '7px',
              fontFamily: 'Proxima Nova Semibold',
              justifyContent: 'flex-start',
            }}
          >
            <p style={{ color: 'lightGray', fontSize: 15, cursor: 'pointer' }}>{steps}</p>
          </div>
          <div
            style={{
              display: 'flex',
              marginRight: '20px',
              marginLeft: '40px',
              paddingTop: '7px',
              justifyContent: 'flex-end',
            }}
          >
            <p onClick={onClose} style={{ color: 'lightGray', fontSize: 15, cursor: 'pointer' }}>
              Skip the tour
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              background: 'rgb(86, 145, 210)',
              padding: '8px 15px 9px 13px',
              borderRadius: 4,
              fontSize: 15,
              color: 'white',
              height: 38,
              marginRight: 15,
              cursor: 'pointer',
              justifyContent: 'flex-end',
            }}
            onClick={() => {
              onClose()
              onNext()
            }}
          >
            {button}
          </div>
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
