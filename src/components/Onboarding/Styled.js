import styled, { css } from 'styled-components'
import '../../assets/fonts/fonts.css'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  z-index: 11111;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`

const bottomCss = css`
  position: absolute;
  bottom: 0.7em;
  left: 7em;
  text-align: left;

  @media (min-width: 768px) {
    bottom: 1.4em;
    left: 5em;
  }
`

const topCss = css`
  position: absolute;
  top: 60px;
  left: 60px;

  z-index: 99999 !important;
`

export const BigText = styled.p`
  margin: 0.5em 0;
  text-align: center;
  color: black;
  z-index: 222222;
  font-size: 0.9rem;
  padding: 0 1.5em;

  ${props => props.bottom && bottomCss}
  ${props => props.top && topCss}
`

export const Bold = styled.span`
  font-weight: 700;
`
export const NumberText = styled.p`
  color: white;
`

export const PinIcon = styled.img`
  margin-right: 0.7em;
  position: relative;
  top: 0.25em;
`

export const OverlayDiv = styled.div`
  position: fixed;
  top: ${props => (props.top ? '60px' : 0)};
  bottom: 0;
  width: 100%;
  overflow: hidden;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 1.5em;
  margin-bottom: ${props => (props.bottom ? '65px' : 0)};
`

export const LinksArea = styled.div`
  display: flex;
  height: 100%;
  align-items: center;

  & > a {
    text-decoration: none;
  }
`
