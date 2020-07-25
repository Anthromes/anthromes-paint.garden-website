import styled from 'styled-components'
import colors from '../../constants/colors'

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  height: 65px;
  width: 100%;
  z-index: 100;
  overflow: scroll;
`

export const InnerWrapper = styled.div`
  position: relative;
  height: 65px;
  display: flex;
  align-items: center;
  background: white;
  box-shadow: 0 2px 7px lightgrey;
  z-index: 11111;
`

export const Icon = styled.img`
  position: absolute;
  left: 38px;
  top: -10px;
  cursor: pointer;
`

export const IconClose = styled.img`
  cursor: pointer;
`

export const PreviewArea = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 10px;
  margin: 0 auto;
`

export const Thumb = styled.img`
  max-width: 50px;
  max-height: 50px;
  cursor: pointer;
  margin-right: 15px;
  ${props => props.selected && `border: 2px solid ${colors.blue};`}
`
