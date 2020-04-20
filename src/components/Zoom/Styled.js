import styled, { css } from 'styled-components'
import colors from '../../constants/colors'

export const Wrapper = styled.div`
  position: fixed;
  right: 10px;
  top: 91px;
  z-index: 100;
`

const topButton = css`
  top: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`

const bottomBoutton = css`
  bottom: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`

export const Buttons = styled.div`
  background-clip: padding-box;
  width: 29px;
  z-index: 0;
  position: relative;
  outline: none;
  cursor: pointer;
  height: 57px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`

export const Button = styled.button`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  display: block;
  height: 29px;
  left: 0;
  overflow: hidden;
  position: absolute;
  cursor: pointer;
  width: 29px;
  z-index: 2;
  box-sizing: border-box;
  transition: background-color 0.16s ease-out;

  &:hover,
  &:active,
  &:focus {
    outline: none;
  }

  ${props => (props.top ? topButton : bottomBoutton)}
`

export const ButtonItem = styled.div`
  background: transparent url(//maps.gstatic.com/tactile/zoom/icon-sprite-2x.png) 0 0 no-repeat;
  background-size: 120px 30px;
  display: block;
  height: 15px;
  left: 7px;
  position: absolute;
  top: 7px;
  width: 15px;

  ${props => `background-position: ${props.top ? '0 0' : '0 -15px'}`}
`

export const Divider = styled.div`
  background-color: rgb(90%, 90%, 90%);
  height: 1px;
  left: 5px;
  position: absolute;
  top: 28px;
  width: 19px;
  z-index: 3;
  transition: background-color 0.16s ease-out;
`

export const Value = styled.div`
  font-size: 11px;
  line-height: 12px;
  background: ${colors.darkGrey};
  text-align: center;
  color: white;
  opacity: 0.7;
  margin-top: 5px;
`
