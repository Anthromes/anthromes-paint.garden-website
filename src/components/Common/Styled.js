import styled, { css } from 'styled-components'
import colors from '../../constants/colors'

const ButtonMainStyle = css`
  background: ${colors.buttonBg};
  color: ${colors.mainGrey};
  min-width: 120px;
  text-align: center;
`

const ButtonAlarmStyle = css`
  background: ${colors.pink};
  color: ${colors.red};
  min-width: 120px;
  text-align: center;
`

const ButtonSecondaryStyle = css`
  background: transparent;
  color: ${colors.dark};
`

const BasicText = css`
  font-size: 12px;
  line-height: 16px;
  color: ${colors.grey};

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 22px;
  }
`

export const Text = styled.div`
  ${BasicText};
`

export const TextBlue = styled.div`
  ${BasicText};
  cursor: pointer;
  color: ${colors.mainGrey};

  &:hover {
    text-decoration: underline;
  }
`

export const LinkText = styled.div`
  ${BasicText};
  cursor: pointer;
  padding: 0.55em 1.1em;
  text-decoration: none;
  flex-basis: ${props => props.flexBasis || 'auto'};
  font-weight: ${props => (props.bold ? '600' : 'normal')};

  @media (min-width: 768px) {
    white-space: nowrap;
    flex-basis: auto;
  }

  &:hover {
    color: darkgrey;
  }
`

export const Button = styled.div`
  border-radius: 3px;
  position: relative;
  display: inline-block;
  cursor: pointer;
  padding: 10px 20px;
  text-decoration: none;
  ${props => (props.secondary ? ButtonSecondaryStyle : props.alarm ? ButtonAlarmStyle : ButtonMainStyle)};
`

export const MainArea = styled.div`
  height: calc(100% - 60px);
  position: relative;
  overflow: auto;
`

export const IconWrapper = styled.div`
  cursor: pointer;
`

const ActiveImage = css`
  border: 1px dashed ${colors.blue};
`

export const Image = styled.img`
  position: absolute;
  width: ${props => props.width || 200}px;
  height: ${props => props.height || 100}px;
  top: ${props => props.top || 0}px;
  left: ${props => props.left || 0}px;
  user-select: none;
  ${props => props.isselected && ActiveImage};
`

export const MobileView = styled.div`
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`

export const DesktopView = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`

const sliderHeight = 7
const thumbSize = 17

export const Slider = styled.input.attrs({ type: 'range' })`
  border: none;
  width: ${props => props.width[0] || 140}px;
  flex-basis: 50%;
  -webkit-appearance: none;
  cursor: pointer;
  outline: none;
  margin-right: 0.7em;

  @media (min-width: 768px) {
    width: ${props => props.width[1] || 200}px;
    flex-basis: auto;
    margin: 0 1.2em;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: ${props => props.height || sliderHeight}px;
    background: ${colors.blue};
    border: none;
    border-radius: ${props => props.height || sliderHeight}px;
    cursor: pointer;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: ${thumbSize}px;
    width: ${thumbSize}px;
    border-radius: 50%;
    background: ${colors.white};
    margin-top: -5px;
    cursor: pointer;
    box-shadow: 0 0 2px ${colors.darkGrey};
  }

  &:focus {
    outline: none;
  }

  &:focus::-webkit-slider-runnable-track {
    outline: none;
  }

  &::-moz-range-track {
    width: 100%;
    height: ${props => props.height || sliderHeight}px;
    background: ${colors.lightGrey};
    border: none;
    border-radius: ${props => props.height || sliderHeight}px;
    outline: none;
  }

  &::-moz-range-thumb {
    border: none;
    height: ${thumbSize}px;
    width: ${thumbSize}px;
    border-radius: 50%;
    background: ${colors.white};
    box-shadow: 0 0 2px ${colors.darkGrey};
    cursor: pointer;
  }

  &::-moz-range-progress {
    background: ${colors.blue};
    outline: none;
  }

  &:-moz-focusring {
    outline: 1px solid white;
    outline-offset: -1px;
  }

  &:focus::-moz-range-track {
    background: #ccc;
    outline: none;
  }

  &::-ms-track {
    width: 100%;
    height: ${props => props.height || sliderHeight}px;

    /*remove bg colour from the track, we'll use ms-fill-lower and ms-fill-upper instead */
    background: transparent;

    /*leave room for the larger thumb to overflow with a transparent border */
    border-color: transparent;
    border-width: 6px 0;

    /*remove default tick marks*/
    color: transparent;
  }

  &::-ms-fill-lower {
    background: ${colors.blue};
    border-radius: 10px;
  }

  &::-ms-fill-upper {
    background: ${colors.superLightGrey};
    border-radius: 10px;
  }

  &::-ms-thumb {
    border: none;
    height: ${thumbSize}px;
    width: ${thumbSize}px;
    border-radius: 50%;
    background: ${colors.white};
    box-shadow: 0 0 2px ${colors.darkGrey};
    cursor: pointer;
  }

  &:focus::-ms-fill-lower {
    background: ${colors.blue};
  }

  &:focus::-ms-fill-upper {
    background: #ccc;
  }

  &::-ms-tooltip {
    display: none;
  }
`
