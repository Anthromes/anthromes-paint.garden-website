import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Text, Image, Heading, TextZone, CloseZone, CartZone, Medium, TopZone } from './Styled'
import api from '../../utils/api'
import close from '../../assets/close.svg'
import cart from '../../assets/shopping-cart.svg'

const Sidebar = ({ pin, onClose, imgSrc, zIndex }) => (
  console.log(pin),
  <Wrapper style={{ zIndex: `${zIndex}` }}>
    {pin.image_url ? (
      <Image src={pin.image_url ||  imgSrc } alt={pin.headline} />
    ) : (
      <Image src={imgSrc} alt={pin.headline} />
    )}
    <CloseZone onClick={onClose}>
      <img src={close} alt={'Close'} />
    </CloseZone>
    <TextZone>
      <TopZone>
        <div>
          <Heading>{pin.headline || 'No headline'}</Heading>
          <Medium>{pin.medium || 'No medium'}</Medium>
        </div>
        {/* <CartZone href={pin.link}>
          <img src={cart} alt={pin.link || 'No link provided'} width={25} />
        </CartZone> */}
      </TopZone>
      <Text>{pin.description}</Text>
    </TextZone>
  </Wrapper>
)

Sidebar.propTypes = {
  pin: PropTypes.object,
  onClose: PropTypes.func,
  imgSrc: PropTypes.string,
}

export default Sidebar
