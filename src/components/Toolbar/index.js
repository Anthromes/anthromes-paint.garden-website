import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, LinksArea, Logo } from './Styled'
import { LinkText, MobileView, DesktopView } from '../Common/Styled'
import MenuButton from './MenuButton'
import LogoSrc from '../../assets/logo.svg'

const Toolbar = ({ onShowOnboarding, onShowAbout }) => (
  <Wrapper>
    <LinksArea>
      <Logo src={LogoSrc} alt="Paint.garden" />
    </LinksArea>
    <DesktopView>
      <LinksArea>
        <LinkText onClick={onShowOnboarding}>How to use</LinkText>
        <LinkText onClick={onShowAbout}>About</LinkText>
        <LinkText><a href = "admin.paint.garden/register">Join</a></LinkText>
      </LinksArea>
    </DesktopView>
    <MobileView>
      <MenuButton>
        <LinkText onClick={onShowOnboarding}>How to use</LinkText>
        <LinkText onClick={onShowAbout}>About</LinkText>
        <LinkText><a href = "admin.paint.garden/register">Join</a></LinkText>
      </MenuButton>
    </MobileView>
  </Wrapper>
)

Toolbar.propTypes = {
  activeSection: PropTypes.object.isRequired,
  activeImageIndex: PropTypes.number,
  onShowOnboarding: PropTypes.func,
  onShowAbout: PropTypes.func,
  onChangeTimeline: PropTypes.func,
  showOnboardingTwo: PropTypes.bool,
}

export default Toolbar
