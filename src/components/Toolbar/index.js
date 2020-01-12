import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, LinksArea, Logo } from './Styled'
import { LinkText, MobileView, DesktopView, Slider } from '../Common/Styled'
import MenuButton from './MenuButton'
import LogoSrc from '../../assets/logo.svg'

const Toolbar = ({
  activeSection = {},
  activeImageIndex,
  onShowOnboarding,
  onShowAbout,
  onChangeTimeline,
  showOnboardingTwo,
}) => (
  <Wrapper>
    <LinksArea style={{ zIndex: `${showOnboardingTwo ? 99999 : 0}` }}>
      <Logo src={LogoSrc} alt="Paint.garden" />
      {activeSection.id && (
        <LinkText bold flexBasis="50%">
          {activeSection.name}
        </LinkText>
      )}
      {(activeSection.id && activeSection.imageIds.length > 1) && (
        <Slider
          width={[150, 200]}
          value={activeImageIndex}
          max={activeSection.imageIds.length - 1}
          onChange={onChangeTimeline}
        />
      )}
    </LinksArea>

    <DesktopView>
      <LinksArea>
        <LinkText onClick={onShowAbout}>About</LinkText>
        <LinkText onClick={onShowOnboarding}>Demo</LinkText>
        <LinkText>Sign Up</LinkText>
        <LinkText>Login</LinkText>
      </LinksArea>
    </DesktopView>
    <MobileView>
      <MenuButton>
        <LinkText onClick={onShowAbout}>About</LinkText>
        <LinkText onClick={onShowOnboarding}>Demo</LinkText>
        <LinkText>Sign Up</LinkText>
        <LinkText>Login</LinkText>
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
