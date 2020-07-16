import styled from 'styled-components'

export const PinWrapper = styled.div`
  position: absolute;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
  cursor: pointer;
  z-index: 99;
`

export const PinViewWrapper = styled.div`
  z-index: 1000;
`